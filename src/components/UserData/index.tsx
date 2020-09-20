import React from "react";
import Avatar from "../Avatar";

import * as S from "./styles";

const UserData: React.FC = () => {
  return (
    <S.Container>
      <Avatar
        src="https://avatars2.githubusercontent.com/u/40339324?s=460&u=4f5a7b83aa4e018b4eccbeaa1f6a6b8b04e0e4b7&v=4"
        alt="avatar"
      />

      <S.Actions>
        <S.StatusIcon />
        <S.NewMessageIcon />
        <S.MenuIcon />
      </S.Actions>
    </S.Container>
  );
};

export default UserData;
