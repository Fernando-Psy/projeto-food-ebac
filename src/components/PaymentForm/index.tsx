import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  PaymentContainer,
  PaymentHeader,
  FormGroup,
  ErrorText,
  ButtonGroup,
  Button,
  InputRow,
} from './styles';

// Validação customizada para data de expiração
const isValidExpiryDate = (value: string | undefined): boolean => {
  if (!value || value.length !== 5) return false;

  const [month, year] = value.split('/');
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(`20${year}`, 10);

  if (monthNum < 1 || monthNum > 12) return false;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (yearNum < currentYear) return false;
  if (yearNum === currentYear && monthNum < currentMonth) return false;

  return true;
};

const PaymentSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .required('Nome no cartão é obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
    .required('Número do cartão é obrigatório'),
  cardExpiry: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'Use o formato MM/AA')
    .test(
      'valid-date',
      'Data de expiração inválida ou vencida',
      isValidExpiryDate,
    )
    .required('Data de vencimento é obrigatória'),
  cardCvv: Yup.string()
    .matches(/^\d{3,4}$/, 'CVV deve ter 3 ou 4 dígitos')
    .required('CVV é obrigatório'),
});

interface PaymentFormProps {
  onSubmit: (values: any) => void;
  onBack: () => void;
  amount: number;
}

// Funções de máscara aprimoradas
const applyCardMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4} \d{4})(\d)/, '$1 $2')
    .substr(0, 19);
};

const applyExpiryMask = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length >= 2) {
    const month = cleaned.substr(0, 2);
    const year = cleaned.substr(2, 2);

    // Validação básica do mês durante a digitação
    if (parseInt(month) > 12) {
      return cleaned.substr(0, 1);
    }

    return year ? `${month}/${year}` : month;
  }

  return cleaned;
};

const applyCvvMask = (value: string): string => {
  return value.replace(/\D/g, '').substr(0, 4); // Permitir até 4 dígitos
};

const formatCardName = (value: string): string => {
  return value
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '') // Apenas letras e espaços
    .replace(/\s+/g, ' ') // Múltiplos espaços para um só
    .toUpperCase(); // Maiúsculas (padrão em cartões)
};

export const PaymentForm = ({ onSubmit, onBack, amount }: PaymentFormProps) => {
  return (
    <PaymentContainer>
      <PaymentHeader>
        Pagamento - Valor a pagar R$ {amount.toFixed(2).replace('.', ',')}
      </PaymentHeader>

      <Formik
        initialValues={{
          cardName: '',
          cardNumber: '',
          cardExpiry: '',
          cardCvv: '',
        }}
        validationSchema={PaymentSchema}
        onSubmit={(values) => {
          // Limpar dados antes de enviar
          const cleanData = {
            ...values,
            cardNumber: values.cardNumber.replace(/\s/g, ''), // Remove espaços
            cardName: values.cardName.trim(),
          };
          onSubmit(cleanData);
        }}
      >
        {({ setFieldValue, values, isSubmitting, isValid, dirty }) => (
          <Form>
            <FormGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <Field name="cardName">
                {({ field }: any) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="JOÃO PAULO DE SOUZA"
                    value={formatCardName(field.value)}
                    onChange={(e) => {
                      const formattedValue = formatCardName(e.target.value);
                      setFieldValue('cardName', formattedValue);
                    }}
                  />
                )}
              </Field>
              <ErrorMessage name="cardName" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <Field name="cardNumber">
                {({ field }: any) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    inputMode="numeric"
                    value={applyCardMask(field.value)}
                    onChange={(e) => {
                      const maskedValue = applyCardMask(e.target.value);
                      setFieldValue('cardNumber', maskedValue);
                    }}
                  />
                )}
              </Field>
              <ErrorMessage name="cardNumber" component={ErrorText} />
            </FormGroup>

            <InputRow>
              <FormGroup>
                <label htmlFor="cardExpiry">Data de vencimento</label>
                <Field name="cardExpiry">
                  {({ field }: any) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="MM/AA"
                      inputMode="numeric"
                      value={applyExpiryMask(field.value)}
                      onChange={(e) => {
                        const maskedValue = applyExpiryMask(e.target.value);
                        setFieldValue('cardExpiry', maskedValue);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="cardExpiry" component={ErrorText} />
              </FormGroup>

              <FormGroup className="cvv">
                <label htmlFor="cardCvv">CVV</label>
                <Field name="cardCvv">
                  {({ field }: any) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="123"
                      inputMode="numeric"
                      value={applyCvvMask(field.value)}
                      onChange={(e) => {
                        const maskedValue = applyCvvMask(e.target.value);
                        setFieldValue('cardCvv', maskedValue);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="cardCvv" component={ErrorText} />
              </FormGroup>
            </InputRow>

            <ButtonGroup>
              <Button
                type="submit"
                primary
                disabled={isSubmitting || !isValid || !dirty}
              >
                {isSubmitting ? 'Processando...' : 'Finalizar pagamento'}
              </Button>
              <Button type="button" onClick={onBack}>
                Voltar para a edição de endereço
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </PaymentContainer>
  );
};
