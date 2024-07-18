import styled, {css} from "styled-components";
import {COLORS} from "@/styles/variables";

const InputText = css`
  font-family: Involve;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; /* 24.84px */
  text-transform: uppercase;
`

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

  ${InputText}
`

export const TextArea = styled.textarea`
  display: flex;
  width: 647px;
  height: 157px;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 439px;
  flex-shrink: 0;

  border-radius: 16px;
  background: ${COLORS.white};

  border: none;
  outline: none;

  ${InputText}
`