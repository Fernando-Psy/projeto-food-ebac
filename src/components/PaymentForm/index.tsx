import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
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
      {({ values, isSubmitting, isValid, dirty }) => (
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
                  {({ field }: { field: any }) => (
                    <InputMask
                      {...field}
                      mask="9999 9999 9999 9999"
                      maskChar={null}
                    >
                      {(inputProps: any) => (
                        <input {...inputProps} type="text" />
                      )}
                    </InputMask>
                  )}
                </Field>
                <ErrorMessage name="cardNumber" component={ErrorText} />
              </FormGroup>

              <div style={{ display: 'flex', gap: '15px' }}>
                <FormGroup style={{ flex: 1 }}>
                  <label htmlFor="cardExpiry">Validade</label>
                  <Field name="cardExpiry">
                    {({ field }: { field: any }) => (
                      <InputMask {...field} mask="99/99" maskChar={null}>
                        {(inputProps: any) => (
                          <input {...inputProps} type="text" />
                        )}
                      </InputMask>
                    )}
                  </Field>
                  <ErrorMessage name="cardExpiry" component={ErrorText} />
                </FormGroup>

                <FormGroup style={{ flex: 1 }}>
                  <label htmlFor="cardCvv">CVV</label>
                  <Field name="cardCvv">
                    {({ field }: { field: any }) => (
                      <InputMask {...field} mask="999" maskChar={null}>
                        {(inputProps: any) => (
                          <input {...inputProps} type="text" />
                        )}
                      </InputMask>
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
            <Button type="button" onClick={onBack}>
              Voltar
            </Button>
            <Button
              type="submit"
              primary
              disabled={isSubmitting || !isValid || !dirty}
            >
              Finalizar Pedido
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
};
