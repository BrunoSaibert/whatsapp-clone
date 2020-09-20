import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const Container = styled.div`
  background-color: var(--quinary);

  border-bottom: 1px solid var(--quaternary);

  padding: 5px 15px;
`;

export const InputWarpper = styled.div`
  height: 40px;
  border-radius: 20px;

  background-color: var(--white);

  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const SearchIcon = styled(MdSearch)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Procurar ou começar uma nova conversa",
})`
  flex: 1;

  background-color: transparent;

  margin-left: 30px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  letter-spacing: 0.5px;

  &::placeholder {
    color: var(--symbol);
  }
`;
