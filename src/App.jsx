import {
  Container,
  TopBackground,
  Form,
  Title,
  ContainerInputs,
  Input,
  InputLabel,
  Button
} from "./styles";
import UsersImage from "./assets/users.png";

function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-users" />
      </TopBackground>
      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome:<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade:<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" />
          </div>
        </ContainerInputs>

        <div style={{width:'100%'} }>
          <InputLabel>
            E-mail:<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="e-mail" />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}
export default Home;

// export default App => PARA EXPORTAR UMA COISA SÓ

// e para exportar varios => Colocar uma 'export' antes das funtions
