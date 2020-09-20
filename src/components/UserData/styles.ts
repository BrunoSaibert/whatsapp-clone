import styled from "styled-components";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";

export const Container = styled.div`
  height: 60px;

  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;

  svg + svg {
    margin-left: 20px;
  }
`;

export const StatusIcon = styled(MdDonutLarge)`
  width: 34px;
  height: 34px;

  padding: 6px;

  color: var(--symbol);

  cursor: pointer;
`;

export const NewMessageIcon = styled(MdChat)`
  width: 34px;
  height: 34px;

  padding: 6px;

  color: var(--symbol);

  cursor: pointer;
`;

export const MenuIcon = styled(MdMoreVert)`
  width: 34px;
  height: 34px;

  padding: 6px;

  color: var(--symbol);

  cursor: pointer;
`;
