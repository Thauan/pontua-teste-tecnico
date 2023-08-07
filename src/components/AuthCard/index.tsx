import * as S from './styles'

type AuthCardProps = {
    title: string
    description: string
    children: React.ReactNode;
}

function AuthCard({ title, description, children }: AuthCardProps) {
    return (
        <>
            <S.Wrapper>
                <h2 className="title">{title}<span className="highlight">.</span></h2>
                <p className="description">{description}</p>
                <div className="content">
                    {children}
                </div>
            </S.Wrapper>
        </>
    )
}

export { AuthCard };