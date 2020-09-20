import styled from "styled-components";

export const Avatar = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;

  background-color: var(--primary);
`;
