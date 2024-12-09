import { useState } from 'react';
import { Input } from '../../components/Input';
import { ToggleButton } from '../../components/ToggleButton';
import { Container, InputWrapper, ToggleButtonContainer } from './styles';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';
import { BottomButtonContainer } from '../../styles';
import { User } from '../../types';

export const InfosPedido: React.FC = () => {
  const [selected, setSelected] = useState<'retirada' | 'entrega' | null>(null);

  const methods = useForm<User>({
    defaultValues: {
      nome: '',
      tel: '',
      tipoEntrega: 'retirada',
      rua: '',
      numero: '',
      bairro: '',
      complemento: '',
    },
  });

  const { setValue, watch } = methods;

  const navigate = useNavigate();
  const { dispatch } = useCart();

  const onSubmit = (data: User) => {
    console.log('aqui');
    dispatch({
      type: 'SET_INFO',
      payload:
        data.tipoEntrega === 'retirada'
          ? { nome: data.nome, tel: data.tel, tipoEntrega: 'retirada' }
          : data,
    });
    navigate('/confirmar');
  };

  const tipoEntrega = watch('tipoEntrega');
  const isFormValid =
    tipoEntrega === 'retirada'
      ? watch('nome') && watch('tel')
      : watch('nome') &&
        watch('tel') &&
        watch('rua') &&
        watch('numero') &&
        watch('bairro');

  console.log('isFormValid', isFormValid);

  return (
    <Container>
      <FormProvider {...methods}>
        <Typography size="medium" weight="bold">
          Informações do pedido
        </Typography>
        <div style={{ marginBottom: '1rem' }} />
        <form id="formPedido" onSubmit={methods.handleSubmit(onSubmit)}>
          <label>
            <Typography size="small">Selecione uma das opções:</Typography>
          </label>
          {/* Toggle de entrega/retirada */}
          <ToggleButtonContainer>
            <Input
              name="tipoEntrega"
              type="hidden"
              rules={{ required: true }}
            />
            <ToggleButton
              isSelected={selected === 'entrega'}
              onClick={(e) => {
                e.preventDefault();
                setSelected('entrega');
                setValue('tipoEntrega', 'entrega');
              }}
              borderRadius="left"
            >
              Entrega
            </ToggleButton>
            <ToggleButton
              isSelected={selected === 'retirada'}
              onClick={(e) => {
                e.preventDefault();
                setSelected('retirada');
                setValue('tipoEntrega', 'retirada');
              }}
              borderRadius="right"
            >
              Retirada
            </ToggleButton>
          </ToggleButtonContainer>
          {selected === 'entrega' || selected === 'retirada' ? (
            <>
              {/* Nome */}
              <InputWrapper>
                <Input
                  name="nome"
                  rules={{
                    required: 'Campo obrigatório',
                    minLength: { value: 3, message: 'Campo curto demais' },
                    maxLength: { value: 30, message: 'Campo longo demais' },
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]+$/,
                      message: 'Campo inválido',
                    },
                  }}
                  placeholder="Nome*"
                />
              </InputWrapper>
              {/* Telefone */}
              <InputWrapper>
                <Input
                  mask="99 99999-9999"
                  alwaysShowMask={false}
                  name="tel"
                  type="tel"
                  rules={{
                    required: 'Campo obrigatório',
                    minLength: { value: 13, message: 'Telefone inválido' },
                  }}
                  placeholder="Telefone*"
                />
              </InputWrapper>
            </>
          ) : null}
          {/* Campos específicos para entrega */}
          {selected === 'entrega' && (
            <>
              <InputWrapper>
                <Input
                  name="rua"
                  rules={{
                    required: 'Campo obrigatório',
                    minLength: { value: 3, message: 'Campo curto demais' },
                    maxLength: { value: 30, message: 'Campo longo demais' },
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]+$/,
                      message: 'Campo inválido',
                    },
                  }}
                  placeholder="Rua*"
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="numero"
                  type="number"
                  rules={{
                    required: 'Campo obrigatório',
                    max: { value: 99999, message: 'Campo longo demais' },
                    min: { value: 1, message: 'Campo curto demais' },
                  }}
                  placeholder="Número*"
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="complemento"
                  placeholder="Complemento"
                  rules={{
                    maxLength: { value: 20, message: 'Campo longo demais' },
                    pattern: {
                      value: /^[a-zA-Z0-9\s]+$/,
                      message: 'Campo inválido',
                    },
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="bairro"
                  rules={{
                    required: 'Campo obrigatório',
                    minLength: { value: 3, message: 'Campo curto demais' },
                    maxLength: { value: 30, message: 'Campo longo demais' },
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]+$/,
                      message: 'Campo inválido',
                    },
                  }}
                  placeholder="Bairro*"
                />
              </InputWrapper>
            </>
          )}

          {/* Botão de submissão */}
          <BottomButtonContainer>
            <Button
              borderRadius="both"
              type="submit"
              form="formPedido"
              disabled={!isFormValid}
            >
              <Typography as="span" size="small">
                Continuar
              </Typography>
            </Button>
          </BottomButtonContainer>
        </form>
      </FormProvider>
    </Container>
  );
};
