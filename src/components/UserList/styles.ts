import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  min-width: 300px;

  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--secondary);
`;

export const ChatList = styled.div`
  flex: 1;

  background-color: var(--white);

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  height: 70px;

  padding-left: 15px;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const Details = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  padding-right: 15px;
  margin: 0 5px 0 15px;

  border-bottom: 1px solid var(--quaternary);

  flex-wrap: nowrap;
  min-width: 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > strong {
    font-size: 17px;
    color: var(--black);
  }

  & > time {
    font-size: 12px;
    color: var(--light-gray);
  }
`;

export const Message = styled.div`
  font-size: 14px;
  color: var(--light-gray);

  margin: 0;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
