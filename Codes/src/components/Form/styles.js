import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #355C7D;

  h1 {
    color: #C06C84;
  }

  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    margin-top: 10px;
    outline:   0;
    padding-left: 10px;
  }

  div {
    font-size: 14px;
    color: #000;
    margin-left: 4px;
    margin-top: 4px;
  }

  button {
    margin: 20px 90px;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    background: #FFF;
  }
`;