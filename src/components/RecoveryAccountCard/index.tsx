import { Wrapper } from './styles'

type AuthCardProps = {
    title: string
    description: string
    children: React.ReactNode;
}

function RecoveryAccountCard({ title, description, children }: AuthCardProps) {
    return (
        <>
            <Wrapper>
                <h2 className="title">{title}<span className="highlight">;)</span></h2>
                <p className="description">{description}</p>
                <div className="content">
                    {children}
                </div>
            </Wrapper>
        </>
    )
}

export { RecoveryAccountCard };