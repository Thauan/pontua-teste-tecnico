import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <>
            <S.Wrapper>
                {props.children}
            </S.Wrapper>
        </>
    )
}

export default Button;