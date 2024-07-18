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
    background: #6F5F58;
  }
  &:active {
    background: #665750;
  }
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
  width: 100%;
  height: 157px;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 439px;
  flex-shrink: 0;
  resize: none;

  border-radius: 16px;
  background: ${COLORS.white};

  border: none;
  outline: none;

  ${InputText}
`