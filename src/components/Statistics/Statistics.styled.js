import styled from 'styled-components';

export const StatisticsBox = styled.section`
  width: 350px;
  padding: 12px;
  text-align: center;
  box-shadow: 0px 5px 5px #00000021;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: grey;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px 8px;
  border: 1px solid black;
`;
