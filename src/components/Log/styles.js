import styled from 'styled-components';

export const Log = {
  wrap: styled.div`
    position: relative;
    height: auto;
    padding: 5px;
    padding-bottom: 30px;
    border: 3px solid #fff;
    border-radius: 5px;
    background-color: #ddd;
  `,

  period: styled.div`
    margin: 5px 0;
  `,

  status: styled.p`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 5px;
    margin: 0;
    font-weight: bold;
    text-align: right;
  `
};
