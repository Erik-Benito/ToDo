import { Container } from "./styled";

export default function Index(props) {

  const { name, photoURL, timeLastMessage, status, message } = props.data;

  return(
    <Container>
      <div className="header">
        <img src={photoURL} alt="user-friend"/>
        <div>
          <span>{name}</span>
          <br/>
          <span>{status}</span>
        </div>
        <div className="timeLastMessage"> {timeLastMessage} </div>
      </div>
      <div className="previewMessage">
        {message.lenght >= 150 ? message.subString(0, 150) : message}
      </div>
    </Container>
  );
}
