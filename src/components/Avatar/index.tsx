import React, { ImgHTMLAttributes } from "react";

import * as S from "./styles";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

const Avatar: React.FC<Props> = ({ size, ...props }) => {
  return <S.Avatar size={size || 32} {...props} />;
};

export default Avatar;
