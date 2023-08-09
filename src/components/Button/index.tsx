import { Wrapper } from './styles'

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean | undefined;
    onClick?:  () => void;
}

function Button({ children, onClick, disabled = false }: ButtonProps) {
    return (
        <>
            <Wrapper disabled={disabled} onClick={onClick}>
                {children}
            </Wrapper>
        </>
    )
}

export { Button };