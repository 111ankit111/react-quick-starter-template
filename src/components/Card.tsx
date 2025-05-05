import type { CardViewModel } from '../types/types';
import styled from 'styled-components';

const Card: React.FC<CardViewModel> = ({ name, borough, dayTimeRoute, icon }) => {
  return (
    <CardContainer>
      <div>{name}</div>
      <div>{borough}</div>
      <div>{dayTimeRoute}</div>
      <div>{icon}</div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
`;
