import React, { useState, useEffect } from 'react';
import { Card as S } from './styles';
import { weekday } from '../../constants/weekDays';

export const Card = ({ data, onClick, selected }) => {
  const [isRetired, setIsRetired] = useState(false);

  useEffect(() => {
    setIsRetired(data.isRetired);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.wrap selected={selected} onClick={onClick}>
      {weekday[data.dayOfWeek]} {data.dayOfMonth}
      <br />
      {data.description}
      <S.tasks>{data.tasksCount}</S.tasks>
      <br />
      <strong>Period:</strong> {data.timePeriod} {data.intervalType}
      <S.butt onClick={() => setIsRetired(!isRetired)}>
        {isRetired ? 'Unretire' : 'Retire'}
      </S.butt>
    </S.wrap>
  );
};
