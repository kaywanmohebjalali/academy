import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    display: inline-block;
    letter-spacing: 0.15ch;
    font-weight: 400;
  `,
  medium: css`
    font-size: 1.2em;
    border-radius: 4px;
  `,
};

const Tag = styled.span`
  background-color: #e6f6fd;
  color: #35abea;
  border-radius: 3px;
  font-weight: 600;
  margin: 0.3rem 0.2rem;
  padding: 0.7rem;

  ${(props) => sizes[props.size]}
`;

Tag.defaultProps = {
  size: "small",
};

export default Tag;
