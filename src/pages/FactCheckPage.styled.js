import styled from 'styled-components';

export const FactCheckWrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
    overflow-x: hidden;
  }
`;

export const FactCheckUploadWrapper = styled.div`
    border: 1px solid black;
    display: block;
    width: 50%;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    max-width: 100%;

    @media (max-width: 1024px) {
        width: 60%;
        margin: 30px auto;
        padding: 18px;
    }

    @media (max-width: 820px) {
        width: 60%;
        margin: 30px auto;
        padding: 18px;
    }

    @media (max-width: 600px) {
        width: 100%;
        margin: 0;
        padding: 12px;
    }
`;