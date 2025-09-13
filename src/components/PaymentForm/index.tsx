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

const PaymentSchema = Yup.object().shape({
  cardName: Yup.string().required('Nome no cartão é obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
    .required('Número do cartão é obrigatório'),
  cardExpiry: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'Data inválida (MM/AA)')
    .required('Mês de vencimento é obrigatório'),
  cardExpiryYear: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'Data inválida (MM/AA)')
    .required('Ano de vencimento é obrigatório'),
  cardCvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV inválido')
    .required('CVV é obrigatório'),
});

interface PaymentFormProps {
  onSubmit: (values: any) => void;
  onBack: () => void;
  amount: number;
}

// Funções de máscara
const applyCardMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4} \d{4})(\d)/, '$1 $2')
    .substr(0, 19);
};

const applyMonthMask = (value: string): string => {
  return value.replace(/\D/g, '').substr(0, 2);
};

const applyYearMask = (value: string): string => {
  return value.replace(/\D/g, '').substr(0, 2);
};

const applyCvvMask = (value: string): string => {
  return value.replace(/\D/g, '').substr(0, 3);
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
          cardExpiryYear: '',
          cardCvv: '',
        }}
        validationSchema={PaymentSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, isSubmitting, isValid, dirty }) => (
          <Form>
            <FormGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <Field
                name="cardName"
                type="text"
                placeholder="João Paulo de Souza"
              />
              <ErrorMessage name="cardName" component={ErrorText} />
            </FormGroup>

            <InputRow>
              <FormGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <Field name="cardNumber">
                  {({
                    field,
                  }: {
                    field: {
                      name: string;
                      value: string;
                      onChange: (
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => void;
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
                    };
                  }) => (
                    <input
                      {...field}
                      type="text"
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

              <FormGroup className="cvv">
                <label htmlFor="cardCvv">CVV</label>
                <Field name="cardCvv">
                  {({
                    field,
                  }: {
                    field: {
                      name: string;
                      value: string;
                      onChange: (
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => void;
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
                    };
                  }) => (
                    <input
                      {...field}
                      type="text"
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

            <InputRow>
              <FormGroup>
                <label htmlFor="cardExpiry">Mês de vencimento</label>
                <Field name="cardExpiry">
                  {({
                    field,
                  }: {
                    field: {
                      name: string;
                      value: string;
                      onChange: (
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => void;
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
                    };
                  }) => (
                    <input
                      {...field}
                      type="text"
                      value={applyMonthMask(field.value)}
                      onChange={(e) => {
                        const maskedValue = applyMonthMask(e.target.value);
                        setFieldValue('cardExpiry', maskedValue);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="cardExpiry" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="cardExpiryYear">Ano de vencimento</label>
                <Field name="cardExpiryYear">
                  {({
                    field,
                  }: {
                    field: {
                      name: string;
                      value: string;
                      onChange: (
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => void;
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
                    };
                  }) => (
                    <input
                      {...field}
                      type="text"
                      value={applyYearMask(field.value)}
                      onChange={(e) => {
                        const maskedValue = applyYearMask(e.target.value);
                        setFieldValue('cardExpiryYear', maskedValue);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="cardExpiryYear" component={ErrorText} />
              </FormGroup>
            </InputRow>

            <ButtonGroup>
              <Button
                type="submit"
                primary
                disabled={isSubmitting || !isValid || !dirty}
              >
                Finalizar pagamento
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
