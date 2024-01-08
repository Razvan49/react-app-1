/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = ({ label }) => {
  const color = `white`;
  const style = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: ${color};
    }
  `;

  return <button css={style}>{label}</button>;
};

export default Button;
