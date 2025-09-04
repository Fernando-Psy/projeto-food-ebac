import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, ErrorText, ButtonGroup, Button } from './styles';

const PaymentSchema = Yup.object().shape({
  paymentMethod: Yup.string().required('Selecione um método de pagamento'),
  cardNumber: Yup.string().when('paymentMethod', {
    is: (value: string) => value === 'credit',
    then: (schema) =>
      schema
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
        .required('Obrigatório para cartão de crédito'),
  }),
  cardExpiry: Yup.string().when('paymentMethod', {
    is: (value: string) => value === 'credit',
    then: (schema) =>
      schema
        .matches(/^\d{2}\/\d{2}$/, 'Data inválida (MM/AA)')
        .required('Obrigatório para cartão de crédito'),
  }),
  cardCvv: Yup.string().when('paymentMethod', {
    is: (value: string) => value === 'credit',
    then: (schema) =>
      schema
        .matches(/^\d{3}$/, 'CVV inválido')
        .required('Obrigatório para cartão de crédito'),
  }),
  cardName: Yup.string().when('paymentMethod', {
    is: (value: string) => value === 'credit',
    then: (schema) => schema.required('Obrigatório para cartão de crédito'),
  }),
});

interface PaymentFormProps {
  onSubmit: (values: any) => void;
  onBack: () => void;
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

const applyExpiryMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .substr(0, 5);
};

const applyCvvMask = (value: string): string => {
  return value.replace(/\D/g, '').substr(0, 3);
};

export const PaymentForm = ({ onSubmit, onBack }: PaymentFormProps) => {
  return (
    <Formik
      initialValues={{
        paymentMethod: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: '',
        cardName: '',
      }}
      validationSchema={PaymentSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, isSubmitting, isValid, dirty }) => (
        <Form>
          <FormGroup>
            <label>
              <Field type="radio" name="paymentMethod" value="credit" />
              Cartão de Crédito
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <Field type="radio" name="paymentMethod" value="debit" />
              Cartão de Débito
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <Field type="radio" name="paymentMethod" value="pix" />
              PIX
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <Field type="radio" name="paymentMethod" value="cash" />
              Dinheiro
            </label>
          </FormGroup>

          {values.paymentMethod === 'credit' && (
            <>
              <FormGroup>
                <label htmlFor="cardNumber">Número do Cartão</label>
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

              <div style={{ display: 'flex', gap: '15px' }}>
                <FormGroup style={{ flex: 1 }}>
                  <label htmlFor="cardExpiry">Validade</label>
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

                <FormGroup style={{ flex: 1 }}>
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
              </div>

              <FormGroup>
                <label htmlFor="cardName">Nome no Cartão</label>
                <Field name="cardName" type="text" />
                <ErrorMessage name="cardName" component={ErrorText} />
              </FormGroup>
            </>
          )}

          {values.paymentMethod === 'pix' && (
            <FormGroup>
              <p>
                Você receberá um QR Code para pagamento via PIX após confirmar o
                pedido.
              </p>
            </FormGroup>
          )}

          {values.paymentMethod === 'cash' && (
            <FormGroup>
              <p>
                Prepare o valor em dinheiro para quando o entregador chegar.
              </p>
            </FormGroup>
          )}

          <ButtonGroup>
            <Button
              type="submit"
              primary
              disabled={isSubmitting || !isValid || !dirty}
            >
              Finalizar Pagamento
            </Button>
            <Button type="button" onClick={onBack}>
              Voltar para edição de endereço
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
};
