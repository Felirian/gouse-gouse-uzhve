import styled, { css } from "styled-components";
import { BREAKPOINTS, COLORS } from "@/styles/variables";

const InputText = css`
  font-family: Involve;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; /* 24.84px */
  text-transform: uppercase;

  color: ${COLORS.black};
  
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.286vw;
  }
`;

export const ButtonStyle = css`
  width: fit-content;
  margin-left: auto;
  margin-top: 20px;

  display: flex;
  padding: 8px 44px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: ${COLORS.black};
  transition: 0.2s;
  &:hover {
    background: #6f5f58;
  }
  &:active {
    background: #665750;
  }
  @media ${BREAKPOINTS.laptop} {
    margin-top: 1.429vw;
    border-radius: 0.857vw;
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 16px;
  background: ${COLORS.white};

  border: none;
  outline: none;

  ${InputText};

  @media ${BREAKPOINTS.laptop} {
    padding: 0.857vw 1.714vw;
    border-radius: 1.143vw;
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 157px;
  padding: 12px 24px;
  align-items: flex-start;
  flex-shrink: 0;
  resize: none;

  border-radius: 16px;
  background: ${COLORS.white};

  border: none;
  outline: none;

  ${InputText};

  @media ${BREAKPOINTS.laptop} {
    padding: 0.857vw 1.714vw;
    border-radius: 1.143vw;
  }
`;

export const StyledContentWr = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 0 80px;
  @media ${BREAKPOINTS.mobile} {
    padding: 0 6.25vw;
  }
`;
