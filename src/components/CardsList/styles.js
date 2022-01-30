import styled from 'styled-components';

export const CardsList = {
  wrap: styled.div`
    flex: 1;
    display: flex;
  `,

  scroll: styled.div`
    flex: 0 30%;
    max-width: 300px;
    height: calc(100vh - 66px);
    padding: 0 10px;
    overflow-y: scroll;
  `
};
