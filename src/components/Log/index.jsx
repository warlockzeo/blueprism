import React from 'react';
import moment from 'moment';
import { Log as S } from './styles';

export const Log = ({ data }) => {
  return (
    <S.wrap className='col-sm-12 col-md-4 col-lg-3'>
      <S.period>
        <strong>From</strong>{' '}
        {moment(data.startTime).format('DD/MM/YYYY hh:mm')}
        <br />
        <strong>To</strong> {moment(data.endTime).format('DD/MM/YYYY hh:mm')}
      </S.period>
      {data.serverName}
      <S.status>{data.status}</S.status>
    </S.wrap>
  );
};
