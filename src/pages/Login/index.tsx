import AuthCard from '../../components/AuthCard';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import * as S from './styles';

function Login() {
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
                                <div className="form">
                                    <TextInput placeholder='E-mail' onButtonClick={() => console.log('a')} />
                                    <TextInput placeholder='Informe sua senha' buttonChildren={<img src='/icons/eye.svg' />} onButtonClick={() => console.log('a')} />
                                    <Button>entrar</Button>
                                </div>

                                <div className="footer">
                                    <a href="#" className="link">Esqueceu a senha?</a>
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