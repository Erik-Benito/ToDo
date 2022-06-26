import { Container } from "./styled";

import Menu from './menu';

export default function Index() {
  return(
    <Container>
        <Menu user={{name: 'Erik Benito', photoUrl: '/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg'}}/>

    </Container>
  );
}
