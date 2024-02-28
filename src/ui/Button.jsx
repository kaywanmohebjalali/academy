import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;

  `,
  circle: css`
    font-size: 1.6rem;
    padding: 1.4rem;
    font-weight: 500;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  `,

};

const types = {
  primary: css`
    color: #fff;
    background-color: var(--color-primary);

    &:hover {
      background-color: #2329d5;
    }
  `,
  accent: css`
    color: #fff;
    background: #2ed573;

    &:hover {
      background-color: #1bd167;
    }
  `,
  
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
`;

Button.defaultProps = {
  type: "primary",
  size: "medium",
};

export default Button;
