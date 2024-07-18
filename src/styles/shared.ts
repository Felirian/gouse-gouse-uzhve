import styled from "styled-components";
import {COLORS} from "@/styles/variables";

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
`