import React from 'react';
import { Log } from '../index';
import { LogList as S } from './styles';

export const LogList = ({ logs }) => {
  console.log(logs);

  return (
    <>
      {Array.isArray(logs) && logs.length ? (
        <S.wrap>
          <S.list>
            {logs.map((log) => (
              <Log key={log.id} data={log} />
            ))}
          </S.list>
        </S.wrap>
      ) : null}
    </>
  );
};
