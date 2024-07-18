import { BREAKPOINTS, COLORS } from "@/styles/variables";
import styled from "styled-components";

export const StyledContentWr = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 0 80px;
  @media ${BREAKPOINTS.mobile} {
    padding: 0 6.25vw;
  }
`;
