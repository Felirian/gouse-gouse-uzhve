import { StyledContentWr } from "@/styles/shared";
import { H1, H2, P } from "@/styles/textTags";
import { BREAKPOINTS } from "@/styles/variables";
import styled from "styled-components";

const PreviewBlock = () => {
  return (
    <StyledPreviewSection>
      <StyledPreviewContentWr>
        <StyledPreviewH1>НЕВЕСОМОСТИ</StyledPreviewH1>
        <StyledMobilePreviewH1>
          НЕВЕСО-
          <br />
          МОСТИ
        </StyledMobilePreviewH1>
        <StyledPreviewH2>
          ВЫСТАВКА <span>КОНСТАНТИНА УЖВЕ</span>
        </StyledPreviewH2>
        <StyledMobilePreviewH2>
          ВЫСТАВКА <br />
          <span>КОНСТАНТИНА УЖВЕ</span>
        </StyledMobilePreviewH2>
        <StyledPreviewP>
          Санкт-Петербург, Большая
          <br />
          Конюшенная ул., 27,
          <br />
          Ресторан Goose Goose
        </StyledPreviewP>
      </StyledPreviewContentWr>
    </StyledPreviewSection>
  );
};

export default PreviewBlock;

const StyledPreviewSection = styled.section`
  height: 818px;
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.laptop} {
    height: 58.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    height: 114.38vw;
  }
`;

const StyledPreviewContentWr = styled(StyledContentWr)``;

const StyledPreviewH1 = styled(H1)`
  margin: 80px 0 30px;
  font-size: 126px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 9vw;
    margin: 5.71vw 0 2.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledMobilePreviewH1 = styled(H1)`
  display: none;
  margin: 5.63vw 0 3.75vw;
  font-size: 15vw;
  text-transform: uppercase;
  @media ${BREAKPOINTS.mobile} {
    display: block;
  }
`;

const StyledPreviewH2 = styled(H2)`
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 10px;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 3vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;
const StyledMobilePreviewH2 = styled(H2)`
  display: none;
  text-transform: uppercase;
  font-size: 7.5vw;
  font-weight: 500;
  margin-bottom: 3.75vw;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS.mobile} {
    display: block;
  }
`;

const StyledPreviewP = styled(P)`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 3.75vw;
  }
`;
