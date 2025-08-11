// src/components/Checkout/DeliveryForm/index.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { DeliveryFormData } from '../../../types/checkout';
import { applyCepMask } from '../../../utils/masks';
import { fetchAddressByCep } from '../../../services/cepService';
import { FormContainer, FormGroup, Label, Input, ErrorText, Button, ButtonSecondary } from './styles';

interface DeliveryFormProps {
  onSubmit: (data: DeliveryFormData) => void;
  onBack: () => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onSubmit, onBack }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Nome é obrigatório')
      .min(2, 'Nome deve ter pelo menos 2 caracteres'),
    address: Yup.string()
      .required('Endereço é obrigatório'),
    city: Yup.string()
      .required('Cidade é obrigatória'),
    cep: Yup.string()
      .required('CEP é obrigatório')
      .matches(/^\d{5}-?\d{3}$/, 'CEP deve ter formato válido (00000-000)'),
    number: Yup.string()
      .required('Número é obrigatório'),
    complement: Yup.string()
  });

  const handleCepChange = async (cep: string, setFieldValue: any, setFieldError: any) => {
    const maskedCep = applyCepMask(cep);
    setFieldValue('cep', maskedCep);

    const cleanCep = cep.replace(/\D/g, '');

    if (cleanCep.length === 8) {
      try {
        const addressData = await fetchAddressByCep(cleanCep);
        if (addressData) {
          setFieldValue('address', addressData.logradouro);
          setFieldValue('city', addressData.localidade);
          setFieldError('cep', undefined);
        }
      } catch (error) {
        setFieldError('cep', error instanceof Error ? error.message : 'Erro ao buscar CEP');
      }
    }
  };

  return (
    <FormContainer>
      <h2>Entrega</h2>

      <Formik
        initialValues={{
          name: '',
          address: '',
          city: '',
          cep: '',
          number: '',
          complement: ''
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, setFieldError }) => (
          <Form>
            <FormGroup>
              <Label>Quem irá receber</Label>
              <Field
                as={Input}
                name="name"
                type="text"
                placeholder="João Paulo de Souza"
              />
              <ErrorMessage name="name" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label>Endereço</Label>
              <Field
                as={Input}
                name="address"
                type="text"
              />
              <ErrorMessage name="address" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label>Cidade</Label>
              <Field
                as={Input}
                name="city"
                type="text"
              />
              <ErrorMessage name="city" component={ErrorText} />
            </FormGroup>

            <div style={{ display: 'flex', gap: '10px' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label>CEP</Label>
                <Field name="cep">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      value={applyCepMask(field.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleCepChange(e.target.value, setFieldValue, setFieldError);
                      }}
                      placeholder="00000-000"
                    />
                  )}
                </Field>
                <ErrorMessage name="cep" component={ErrorText} />
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>Número</Label>
                <Field
                  as={Input}
                  name="number"
                  type="text"
                />
                <ErrorMessage name="number" component={ErrorText} />
              </FormGroup>
            </div>

            <FormGroup>
              <Label>Complemento (opcional)</Label>
              <Field
                as={Input}
                name="complement"
                type="text"
              />
            </FormGroup>

            <Button type="submit">
              Continuar com o pagamento
            </Button>

            <ButtonSecondary type="button" onClick={onBack}>
              Voltar para o carrinho
            </ButtonSecondary>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DeliveryForm;