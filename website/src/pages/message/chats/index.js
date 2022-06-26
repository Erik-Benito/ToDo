import { Container } from "./styled";

import PreviewMessage from '../../../components/message/chats/';

export default function index() {
  const array = [
    {
      name:"Erik",
      photoURL:"",
      timeLastMessage:"",
      status:"",
      message:""
    }
  ];
  return(
    <Container>
      <PreviewMessage data={array[0]}/>
    </Container>
  )
}
