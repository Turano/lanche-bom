import { useState } from 'react';
import { Input } from '../../components/Input';
import { ToggleButton } from '../../components/ToggleButton';
import { ButtonContainer, Container, ToggleButtonContainer } from './styles';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useForm, Controller } from 'react-hook-form';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  tel: string;
  cep?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  tipoEntrega: 'entrega' | 'retirada';
};

export const InfosPedido: React.FC = () => {
  const [selected, setSelected] = useState<'retirada' | 'entrega'>('retirada');

  const { register, handleSubmit, control, setValue, watch } =
    useForm<FormData>({
      defaultValues: {
        tipoEntrega: 'retirada', // or 'entrega' as a default value
      },
    });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    dispatch({
      type: 'SET_INFO',
      payload: data,
    });
    navigate('/confirmar');
  };

  const { dispatch } = useCart();

  const tipoEntrega = watch('tipoEntrega');

  return (
    <Container>
      <Typography size="medium" weight="bold">
        Informações do pedido
      </Typography>
      <form id="formPedido" onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name', { required: true })}>Nome*</Input>
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
                  onClick={() => {
                    setSelected('entrega');
                    field.onChange('entrega');
                  }}
                  borderRadius="left"
                >
                  Entrega
                </ToggleButton>
                <ToggleButton
                  isSelected={selected === 'retirada'}
                  onClick={() => {
                    setSelected('retirada');
                    field.onChange('retirada');
                    setValue('cep', ''); // Limpa os campos ao trocar o tipo
                    setValue('rua', '');
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
              {...register('cep', {
                validate: (value) =>
                  tipoEntrega !== 'entrega' || value
                    ? true
                    : 'O CEP é obrigatório para entrega',
              })}
            >
              CEP*
            </Input>
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
          </>
        )}
        <ButtonContainer>
          <Button borderRadius="both" type="submit" form="formPedido">
            <Typography as="span" size="medium" weight="bold">
              Continuar
            </Typography>
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};
