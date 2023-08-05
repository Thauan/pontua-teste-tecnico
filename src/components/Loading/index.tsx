import { BounceLoader } from 'react-spinners';
import * as S from './styles';

function Loading() {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.Content>
                        <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
                        <BounceLoader
                            className='dot-loader'
                            color="#F21A05"
                            size={20}
                        />
                    </S.Content>
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export { Loading };