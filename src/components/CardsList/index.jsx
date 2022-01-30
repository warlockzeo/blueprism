import React, { useState } from 'react';
import { Card, LogList } from '../index';

import { CardsList as S } from './styles';

export const CardsList = ({ cards, logs }) => {
  const [actualLogs, setActualLogs] = useState([]);
  const [actualCard, setActualCard] = useState({});

  const filterLogs = (id) => {
    setActualLogs(logs.filter((log) => log.scheduleId === id));
    setActualCard(cards.filter((card) => card.id === id)[0]);
  };

  console.log(actualCard);
  return (
    <S.wrap>
      {Array.isArray(cards) && cards.length ? (
        <>
          <S.scroll>
            {cards.map((card) => (
              <Card
                key={card.id}
                data={card}
                onClick={() => filterLogs(card.id)}
                selected={card.id === actualCard.id}
              />
            ))}
          </S.scroll>
          <LogList logs={actualLogs} />
        </>
      ) : null}
    </S.wrap>
  );
};
