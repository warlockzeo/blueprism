import styled from 'styled-components';

export const LogList = {
  wrap: styled.div`
    flex: 1;
    height: calc(100vh - 66px);
    padding: 5px;
    overflow-y: scroll;
  `,

  list: styled.div`
    display: flex;
    flex-wrap: wrap;
  `
};
