import styled, { css } from "styled-components";
import { BREAKPOINTS } from "@/styles/variables";

export const H1Style = css`
  /* Heading 1 */
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 275;
  line-height: 105.4%; /* 47.43px */
  letter-spacing: -0.9px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 3.13vw;
    letter-spacing: -0.06vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 7.69vw;
    letter-spacing: -0.15vw;
  }
`;

export const H2Style = css`
  /* Heading 2 */
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 105.4%; /* 37.944px */
  letter-spacing: -0.36px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.5vw;
    letter-spacing: -0.05vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 6.41vw;
    letter-spacing: -0.13vw;
  }
`;

export const PStyle = css`
  /* Text 1 */
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 17.6px */
  letter-spacing: -0.36px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.25vw;
    letter-spacing: -0.03vw;
import { css } from "styled-components";

export const Fonts = css`
  @font-face {
    font-family: 'Gella Display';
    src: url("/fonts/GellaDisplay-ExpandedMedium.otf");
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 4.1vw;
    letter-spacing: -0.06vw;
  }
`;

export const ButtonTextStyle = css`
  /* buttons */
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 105.4%; /* 18.972px */
  letter-spacing: -0.36px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.25vw;
    letter-spacing: -0.06vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 4.62vw;
    letter-spacing: -0.09vw;
  }
`;

export const CaptionStyle = css`
  /* подпись форма */
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 110%; /* 14.3px */
  @media ${BREAKPOINTS.laptop} {
    font-size: 0.9vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.56vw;
  }
`;

export const H1 = styled.h1`
  ${H1Style}
`;

export const H2 = styled.h2`
  ${H1Style}
  @font-face {
    font-family: 'Involve';
    src: url("/fonts/Involve-VF.ttf");
  }
`;

export const H3 = styled.h3`
  ${H1Style}
`;

export const H4 = styled.h4`
  ${H2Style}
`;

export const P = styled.p`
  ${PStyle}
`;

