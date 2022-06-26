import { Container } from "./styled";

import { ButtonBlue } from "../../components/common/style/button";

export default function Index(){
    return(
      <Container>
        <div className="web">
          <div className="head">
            <div className="circle"/>
            <div className="circle"/>
            <div className="circle"/>
          </div>
          <img className="icon-error-pag404" src="/src/assets/img/404 Error Page not Found with people connecting a plug.svg" alt="icon-error-pag404"/>
          <div className="buttonReturn">
            <ButtonBlue>
              Voltar!
            </ButtonBlue>
          </div>
        </div>
      </Container>
    );
}
