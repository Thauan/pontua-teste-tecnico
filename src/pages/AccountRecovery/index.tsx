import { Controller, useForm } from 'react-hook-form';
import AuthCard from '../../components/AuthCard';
import Button from '../../components/Button';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextInput from '../../components/TextInput';
import * as S from './styles';

const schema = yup
  .object({
    email: yup.string()
      .email("O e-mail deve ser valido")
      .required("O campo e-mail é obrigatorio")
  })
  .required()

function AccountRecovery() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors.email, "errors");
  }

  console.log(isValid, "isValid");

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
          </S.Header>
          <S.Content>
            <S.LeftContent>
              <img src="/illustrations/building.png" alt="Ilustração de um edificio" />
            </S.LeftContent>

            <S.RightContent>
              <AuthCard title='Recuperar senha' description='Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.' >
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        error={errors.email}
                        placeholder='Informe seu e-mail'
                        onButtonClick={() => console.log('a')}
                      />
                    )}
                  />
                  <Button disabled={!isValid}>enviar link</Button>
                </form>
              </AuthCard>
            </S.RightContent>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default AccountRecovery;