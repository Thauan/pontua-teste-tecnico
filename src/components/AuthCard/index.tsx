import { Wrapper } from './styles'

type AuthCardProps = {
    title: string
    description: string
    children: React.ReactNode;
    symbol?: string;
}

function AuthCard({ title, description, children, symbol = "." }: AuthCardProps) {
    return (
        <>
            <Wrapper>
                <h2 className="title">{title}<span className="highlight">{symbol}</span></h2>
                <p className="description">{description}</p>
                <div className="content">
                    {children}
                </div>
            </Wrapper>
        </>
    )
}

export { AuthCard };