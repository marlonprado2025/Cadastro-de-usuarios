import { useRef } from "react";
import api from "../../services/api";
import {
  Container,TopBackground,Form,Title,ContainerInputs,Input,InputLabel,Button,
} from "./styles";
import UsersImage from "../../assets/users.png";


function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser(){
   await api.post('/usuarios', {
     name: inputName.current.value,
     age: inputAge.current.value,
     email: inputEmail.current.value
    
   })
  
}
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
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade:<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail:<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="e-mail" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} >Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}
export default Home;

// export default App => PARA EXPORTAR UMA COISA SÓ

// e para exportar varios => Colocar uma 'export' antes das funtions
