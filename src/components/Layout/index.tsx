import React from "react";

import UserList from "../UserList";
import Message from "../Message";

import * as S from "./styles";

const Layout: React.FC = () => {
  return (
    <S.Container>
      <UserList />
      <Message />
    </S.Container>
  );
};

export default Layout;
