/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AuthCard } from "../../components/AuthCard";
import SelectAgent from "../../components/SelectAgent";
import { Container, Content, Header, LeftContent, RightContent, Wrapper } from "./styles";
import { getOptionsCharacters } from "../../services/characters";

function ChooseAgent() {
  const [options, setOptions] = useState<any>([]);
  const [currentPage] = useState<number>(1);

  // const options = [
  //   { value: 'me', label: 'Montenegro', image: 'https://i.pinimg.com/originals/ad/71/e2/ad71e2d708a05de9773778b088d6ccff.jpg' },
  //   { value: 'rs', label: 'Serbia', image: 'https://i.pinimg.com/originals/ad/71/e2/ad71e2d708a05de9773778b088d6ccff.jpg' }
  // ];

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);

  const getDataCharacters = async (page: number) => {
    const response = await getOptionsCharacters(page);

    const data = response?.data?.results?.map((item: any) => {
      return {
        value: item.id,
        label: item.name,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
      }
    });

    setOptions(data);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
          </Header>
          <Content>
            <LeftContent>
              <img src="/illustrations/building.png" alt="Ilustração de um edificio" />
            </LeftContent>

            <RightContent>
              <AuthCard title='Selecione o seu agente mais legal.' description='' >
                <form className="form">
                  <p>Tenha a visão completa do seu agente.</p>
                  <SelectAgent options={options} />
                </form>
              </AuthCard>
            </RightContent>
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}

export { ChooseAgent };