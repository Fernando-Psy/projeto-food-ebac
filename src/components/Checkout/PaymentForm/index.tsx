import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, FormGroup, Label, Input, ErrorText, Button, ButtonSecondary } from './styles';

interface PaymentFormData {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

interface PaymentFormProps {
  totalAmount: number;
  onSubmit: (data: PaymentFormData) => void;
  onBack: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ totalAmount, onSubmit, onBack }) => {
  const validationSchema = Yup.object({
    cardName: Yup.string()
      .required('Nome no cartão é obrigatório')
      .min(2, 'Nome deve ter pelo menos 2 caracteres'),
    cardNumber: Yup.string()
      .required('Número do cartão é obrigatório')
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido'),
    cvv: Yup.string()
      .required('CVV é obrigatório')
      .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
    expiryMonth: Yup.string()
      .required('Mês é obrigatório')
      .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
    expiryYear: Yup.string()
      .required('Ano é obrigatório')
      .matches(/^\d{2}$/, 'Ano deve ter 2 dígitos')
      .test('valid-year', 'Ano deve ser atual ou futuro', (value) => {
        if (!value) return false;
        const currentYear = new Date().getFullYear() % 100;
        const inputYear = parseInt(value);
        return inputYear >= currentYear;
      })
  });

  const applyCardMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4} \d{4})(\d)/, '$1 $2')
      .replace(/(\d{4} \d{4} \d{4})(\d)/, '$1 $2')
      .substr(0, 19);
  };

  const applyMonthMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .substr(0, 2);
  };

  const applyYearMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .substr(0, 2);
  };

  const applyCvvMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .substr(0, 3);
  };

  return (
    <FormContainer>
      <h2>Pagamento - Valor a pagar R$ {totalAmount.toFixed(2)}</h2>

      <Formik
        initialValues={{
          cardName: '',
          cardNumber: '',
          cvv: '',
          expiryMonth: '',
          expiryYear: ''
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FormGroup>
              <Label>Nome no cartão</Label>
              <Field
                as={Input}
                name="cardName"
                type="text"
                placeholder="João Paulo de Souza"
              />
              <ErrorMessage name="cardName" component={ErrorText} />
            </FormGroup>

            <div style={{ display: 'flex', gap: '10px' }}>
              <FormGroup style={{ flex: 2 }}>
                <Label>Número do cartão</Label>
                <Field name="cardNumber">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      value={applyCardMask(field.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const maskedValue = applyCardMask(e.target.value);
                        setFieldValue('cardNumber', maskedValue);
                      }}
                      placeholder="0000 0000 0000 0000"
                    />
                  )}
                </Field>
                <ErrorMessage name="cardNumber" component={ErrorText} />
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>CVV</Label>
                <Field name="cvv">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      value={applyCvvMask(field.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const maskedValue = applyCvvMask(e.target.value);
                        setFieldValue('cvv', maskedValue);
                      }}
                      placeholder="000"
                    />
                  )}
                </Field>
                <ErrorMessage name="cvv" component={ErrorText} />
              </FormGroup>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label>Mês de vencimento</Label>
                <Field name="expiryMonth">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      value={applyMonthMask(field.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const maskedValue = applyMonthMask(e.target.value);
                        setFieldValue('expiryMonth', maskedValue);
                      }}
                      placeholder="MM"
                    />
                  )}
                </Field>
                <ErrorMessage name="expiryMonth" component={ErrorText} />
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>Ano de vencimento</Label>
                <Field name="expiryYear">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      value={applyYearMask(field.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const maskedValue = applyYearMask(e.target.value);
                        setFieldValue('expiryYear', maskedValue);
                      }}
                      placeholder="AA"
                    />
                  )}
                </Field>
                <ErrorMessage name="expiryYear" component={ErrorText} />
              </FormGroup>
            </div>

            <Button type="submit">
              Finalizar pagamento
            </Button>

            <ButtonSecondary type="button" onClick={onBack}>
              Voltar para a edição de endereço
            </ButtonSecondary>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default PaymentForm;