import styled from "styled-components";

export const ButtonBlue = styled.button`

  width: 100%;
  height: 100%;

  font-family: 'TT Norms';
  font-size: 2rem;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;

  background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
  color: #FFFFFF;

  border: solid 0px;
  border-radius: 6px;

  &:hover{
    background: #FFFFFF;
    color: #7CB8F7;
    cursor: pointer;
    transition: 0.5s;
  }
`


