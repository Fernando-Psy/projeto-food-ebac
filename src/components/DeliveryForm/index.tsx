import axios from 'axios';
import * as Yup from 'yup';
import { DeliveryInfo } from '../../types';
import InputMask from 'react-input-mask';
import { ErrorMessage, Field, FieldHookConfig, Form, Formik } from 'formik';
import {
  FormGroup,
  ErrorText,
  Button,
  AutoFilledTag,
  ButtonGroup,
} from './styles';

const DeliverySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Muito curto')
    .max(50, 'Muito longo')
    .required('Obrigatório'),
  address: Yup.string().required('Obrigatório'),
  number: Yup.string().required('Obrigatório'),
  complement: Yup.string(),
  neighborhood: Yup.string().required('Obrigatório'),
  city: Yup.string().required('Obrigatório'),
  state: Yup.string()
    .length(2, 'Deve ter 2 caracteres')
    .required('Obrigatório'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('Obrigatório'),
  phone: Yup.string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido')
    .required('Obrigatório'),
});

interface DeliveryFormProps {
  initialValues: DeliveryInfo;
  onSubmit: (values: DeliveryInfo) => void;
  onBack: () => void;
}

export const DeliveryForm = ({
  initialValues,
  onSubmit,
  onBack,
}: DeliveryFormProps) => {
  const fetchAddressByCep = async (cep: string) => {
    try {
      const cleanedCep = cep.replace(/\D/g, '');
      if (cleanedCep.length !== 8) return null;

      const response = await axios.get(
        `https://viacep.com.br/ws/${cleanedCep}/json/`,
      );

      if (response.data.erro) {
        return null;
      }

      return {
        logradouro: response.data.logradouro || '',
        bairro: response.data.bairro || '',
        localidade: response.data.localidade || '',
        uf: response.data.uf || '',
      };
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={DeliverySchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, isSubmitting, isValid, dirty }) => (
        <Form>
          <FormGroup>
            <label htmlFor="name">Nome Completo</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component={ErrorText} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="cep">CEP</label>
            <Field name="cep">
              {({ field }: { field: FieldHookConfig<string> }) => (
                <InputMask
                  {...field}
                  mask="99999-999"
                  maskChar={null}
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    const cep = e.target.value;
                    field.onChange(e);

                    if (cep.length === 9) {
                      // 99999-999
                      const addressData = await fetchAddressByCep(cep);
                      if (addressData) {
                        setFieldValue('address', addressData.logradouro);
                        setFieldValue('neighborhood', addressData.bairro);
                        setFieldValue('city', addressData.localidade);
                        setFieldValue('state', addressData.uf);
                      }
                    }
                  }}
                >
                  {(
                    inputProps: React.InputHTMLAttributes<HTMLInputElement>,
                  ) => <input {...inputProps} type="text" />}
                </InputMask>
              )}
            </Field>
            <ErrorMessage name="cep" component={ErrorText} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="address">
              Endereço
              {values.address && values.address !== initialValues.address && (
                <AutoFilledTag>(auto-preenchido)</AutoFilledTag>
              )}
            </label>
            <Field name="address" type="text" />
            <ErrorMessage name="address" component={ErrorText} />
          </FormGroup>

          <div style={{ display: 'flex', gap: '15px' }}>
            <FormGroup style={{ flex: 1 }}>
              <label htmlFor="number">Número</label>
              <Field name="number" type="text" />
              <ErrorMessage name="number" component={ErrorText} />
            </FormGroup>

            <FormGroup style={{ flex: 2 }}>
              <label htmlFor="complement">Complemento</label>
              <Field name="complement" type="text" />
              <ErrorMessage name="complement" component={ErrorText} />
            </FormGroup>
          </div>

          <FormGroup>
            <label htmlFor="neighborhood">Bairro</label>
            <Field name="neighborhood" type="text" />
            <ErrorMessage name="neighborhood" component={ErrorText} />
          </FormGroup>

          <div style={{ display: 'flex', gap: '15px' }}>
            <FormGroup style={{ flex: 2 }}>
              <label htmlFor="city">Cidade</label>
              <Field name="city" type="text" />
              <ErrorMessage name="city" component={ErrorText} />
            </FormGroup>

            <FormGroup style={{ flex: 1 }}>
              <label htmlFor="state">Estado</label>
              <Field name="state" type="text" maxLength="2" />
              <ErrorMessage name="state" component={ErrorText} />
            </FormGroup>
          </div>

          <FormGroup>
            <label htmlFor="phone">Telefone</label>
            <Field name="phone">
              {({ field }: { field: FieldHookConfig<string> }) => (
                <InputMask {...field} mask="(99) 99999-9999" maskChar={null}>
                  {(
                    inputProps: React.InputHTMLAttributes<HTMLInputElement>,
                  ) => <input {...inputProps} type="tel" />}
                </InputMask>
              )}
            </Field>
            <ErrorMessage name="phone" component={ErrorText} />
          </FormGroup>

          <ButtonGroup>
            <Button type="button" onClick={onBack}>
              Voltar
            </Button>
            <Button
              type="submit"
              primary
              disabled={isSubmitting || !isValid || !dirty}
            >
              Continuar para Pagamento
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
};

export default DeliveryForm;
