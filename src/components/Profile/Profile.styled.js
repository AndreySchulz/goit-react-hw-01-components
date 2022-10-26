import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 350px;
  padding: 12px;
  box-shadow: 0px 5px 5px #00000021;
`;

export const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const ProfileImage = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: rebeccapurple;
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  padding: 0;
`;

export const StatsItem = styled.li`
  width: 100%;
  padding: 32px 8px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6f82d629;
`;
