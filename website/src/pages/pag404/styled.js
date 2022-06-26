import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width:100%;
  height:100vh;

  background-color: #F3F3FB;

  .web{

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 80vh;

    background-color: white;
    border-radius: 40px 40px 40px 40px;
    box-shadow: 0px -1px 50px rgba(0, 0, 0, 0.42);

    .head{

      display: flex;
      flex-direction: row;
      padding: 1rem 2rem;

      height: 5rem;
      width: 100%;

      background: linear-gradient(96.78deg, #2A8BF2 0%, #2A8BF2 100%);
      border-radius: 40px 40px 0px 0px;

      .circle{

        width: 2rem;
        height: 2rem;

        margin: .5rem;

        background-color: white;
        border-radius: 50%;

      }
    }

    .text-icon{

      font-family: 'Mina';
      font-style: normal;
      font-weight: 700;
      font-size: 10rem;

      display: flex;
      align-items: center;
      text-align: center;

      color: #707C97;
    }

    .icon-error-pag404{
      width: auto;
      height: 50%;
    }
  }

  .buttonReturn{
    width: 40%;
    height: 4em;

    margin: 2rem 0rem;

    a{text-decoration: none;}
  }

`;

export {Container}
