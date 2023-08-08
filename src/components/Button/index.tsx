import { Wrapper } from './styles'

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean | undefined;
}

function Button({ children, disabled = false }: ButtonProps) {
    return (
        <>
            <Wrapper disabled={disabled}>
                {children}
            </Wrapper>
        </>
    )
}

export { Button };