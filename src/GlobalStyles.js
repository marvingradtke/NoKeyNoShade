import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalSyles() {
  return (
    <Global
      styles={css`
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background-color: #cc99a2;
        }
      `}
    />
  );
}
