import styled from 'styled-components';

export const Card = {
  wrap: styled.div`
    position: relative;
    width: 100%;
    min-height: 100px;
    padding: 5px;
    margin-bottom: 10px;
    border: 4px solid #ccc;
    border-radius: 5px;
    background-color: ${({ selected }) =>
      selected === true ? '#bbb' : '#ddd'};
    cursor: pointer;

    &:first-child {
      margin-top: 10px;
    }

    &:hover {
      background-color: #bbb;
    }
  `,

  butt: styled.button`
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: none;
    border-radius: 5px;
    width: 100px;
  `,

  tasks: styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45px;
    background-color: green;
    color: #ffffff;
  `
};
