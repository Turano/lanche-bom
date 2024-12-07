import { useState } from 'react';
import { Input } from '../../components/Input';
import { ToggleButton } from '../../components/ToggleButton';
import { Container, ToggleButtonContainer } from './styles';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useForm, Controller } from 'react-hook-form';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';
import { BottomButtonContainer } from '../../styles';
import { User } from '../../types';

export const InfosPedido: React.FC = () => {
  const [selected, setSelected] = useState<'retirada' | 'entrega'>('retirada');

  const { register, handleSubmit, control, setValue, watch } = useForm<User>({
    defaultValues: {
      tipoEntrega: 'retirada', // or 'entrega' as a default value
    },
  });

  const navigate = useNavigate();
  const { dispatch } = useCart();

  const onSubmit = (data: User) => {
    dispatch({
      type: 'SET_INFO',
      payload: data,
    });
    navigate('/confirmar');
  };

  const tipoEntrega = watch('tipoEntrega');
  const name = watch('nome');
  const tel = watch('tel');
  const rua = watch('rua');
  const numero = watch('numero');
  const complemento = watch('complemento');
  const bairro = watch('bairro');

  const isFormValid =
    tipoEntrega === 'retirada'
      ? name && tel
      : name && tel && rua && numero && complemento && bairro;

  return (
    <>
      <Container>
        <Typography size="medium" weight="bold">
          Informações do pedido
        </Typography>
        <div style={{ marginBottom: '2rem' }} />
        <form id="formPedido" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('nome', { required: true })}>Nome*</Input>
          <Input {...register('tel', { required: true })} type="number">
            Telefone*
          </Input>

          <ToggleButtonContainer>
            <Controller
              name="tipoEntrega"
              control={control}
              defaultValue={'retirada'}
              render={({ field }) => (
                <>
                  <ToggleButton
                    isSelected={selected === 'entrega'}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelected('entrega');
                      field.onChange('entrega');
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
                      field.onChange('retirada');
                      setValue('rua', '');
                      setValue('bairro', '');
                      setValue('numero', '');
                      setValue('complemento', '');
                    }}
                    borderRadius="right"
                  >
                    Retirada
                  </ToggleButton>
                </>
              )}
            />
          </ToggleButtonContainer>
          {selected === 'entrega' && (
            <>
              <Input
                {...register('rua', {
                  validate: (value) =>
                    tipoEntrega !== 'entrega' || value
                      ? true
                      : 'A rua é obrigatória para entrega',
                })}
              >
                Rua*
              </Input>
              <Input
                {...register('numero', {
                  validate: (value) =>
                    tipoEntrega !== 'entrega' || value
                      ? true
                      : 'O número é obrigatório para entrega',
                })}
              >
                Número*
              </Input>
              <Input {...register('complemento')}>Complemento</Input>
              <Input
                {...register('bairro', {
                  validate: (value) =>
                    tipoEntrega !== 'entrega' || value
                      ? true
                      : 'O bairro é obrigatória para entrega',
                })}
              >
                Bairro*
              </Input>
            </>
          )}
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
      </Container>
    </>
  );
};
