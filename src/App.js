import React, { useState, useEffect } from 'react';
import { CardsList } from './components';
import { App as S } from './AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [logs, setLogs] = useState([]);

  const getCards = async () => {
    return await fetch('http://localhost:3000/schedules')
      .then((response) => response.json())
      .then((resp) => setCards(resp));
  };

  const getLogs = async () => {
    return await fetch('http://localhost:3000/scheduleLogs')
      .then((response) => response.json())
      .then((resp) => setLogs(resp));
  };

  useEffect(() => {
    getCards();
    getLogs();
  }, []);

  return (
    <S.wrap>
      <h1>Schedules</h1>
      {cards?.length ? (
        <CardsList cards={cards} logs={logs} />
      ) : (
        <S.nothingToShow>No schedule to show</S.nothingToShow>
      )}
    </S.wrap>
  );
};

export default App;
