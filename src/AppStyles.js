import styled from 'styled-components';

export const App = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    h1 {
      margin: 0;
      padding: 10px;
    }
  `,

  nothingToShow: styled.h2`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `
};
