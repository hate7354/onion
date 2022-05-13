import styled from "styled-components";

export const Input = styled.input`
  width: ${ele => ele.width};
  height: ${ele => ele.height};
`;

export const InputPassword = styled(Input).attrs({
  type: "password",
})`
  &:hover {
    background-color: red;
  }
`;
