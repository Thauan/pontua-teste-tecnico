import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean | undefined;
}

function Button({ children, disabled = false }: ButtonProps) {
    return (
        <>
            <S.Wrapper disabled={disabled}>
                {children}
            </S.Wrapper>
        </>
    )
}

export { Button };