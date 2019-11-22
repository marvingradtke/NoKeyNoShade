import React from "react";
import styled from "@emotion/styled";
import logopng from "./assets/NoKeyNoLogo.png";

const AppBar = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  background: lightpink;
`;

const Img = styled.img`
  width: 140px;
`;

export default function Header() {
  return (
    <AppBar>
      <Img src={logopng} />
    </AppBar>
  );
}
