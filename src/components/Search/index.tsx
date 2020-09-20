import React from "react";

import * as S from "./styles";

const Search: React.FC = () => {
  return (
    <S.Container>
      <S.InputWarpper>
        <S.SearchIcon />

        <S.Input />
      </S.InputWarpper>
    </S.Container>
  );
};

export default Search;
