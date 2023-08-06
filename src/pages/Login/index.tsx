import { Controller, useForm } from 'react-hook-form';
import AuthCard from '../../components/AuthCard';
import Button from '../../components/Button';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextInput from '../../components/TextInput';
import * as S from './styles';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string()
      .email("O e-mail deve ser valido")
      .required("O campo e-mail é obrigatorio"),
    password: yup.string().required("O campo senha é obrigatorio"),
  })
  .required()

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { login }: any = useAuth();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    login({
      email: data.email,
      password: data.password
    });
  }

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
              <AuthCard title='Bem-vindo' description='informe as suas credenciais de acesso ao portal' >
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        error={errors.email}
                        placeholder='E-mail'
                        onButtonClick={() => console.log('a')}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        isPassword={true}
                        error={errors.password}
                        placeholder='Informe sua senha'
                        buttonChildren={<img src='/icons/eye.svg' />}
                        onButtonClick={() => console.log('a')}
                      />
                    )}
                  />

                  <Button>entrar</Button>
                </form>

                <div className="footer">
                  <Link
                    to="/recovery/account"
                    relative="route"
                    className="link">
                      Esqueceu a senha?
                  </Link>
                </div>
              </AuthCard>
            </S.RightContent>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Login