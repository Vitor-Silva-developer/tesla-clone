import styled, { keyframes } from "styled-components";

const titleEntrance = keyframes`
  from{
    transform: translateY(30px);
    opacity: 0;
  }
  to{
    transform: translateY(initial);
    opacity: 1;
  }
`
const subtitleEntrance = keyframes`
  0%{
    opacity: 0;
  }
  75%{
    opacity: 0;
  }
  100%{
    opacity: initial;
  }
`
const buttonsEntrance = keyframes`
  from{
    transform: translateX(30px);
    opacity: 0;
  }
  to{
    transform: translateX(initial);
    opacity: initial;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;
  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #393c41;
    animation: ${titleEntrance} 0.7s;
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #5c5e62;
    animation: ${subtitleEntrance} 1s;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;

    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    min-width: 256px;
    width: 100%;
    cursor: pointer;
    animation: ${buttonsEntrance} 1s;
    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }
    & + button {
      margin: 10px 0 0;
    }
  }

  @media (min-width: 600px){
      flex-direction: row;
      margin-bottom: 90px;

      > button + button {
        margin: 0 0 0 10px;
      }
  }
`;

