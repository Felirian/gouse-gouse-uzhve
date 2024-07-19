import { StyledContentWr } from "@/styles/shared";
import { BREAKPOINTS } from "@/styles/variables";
import styled from "styled-components";

const PreviewBlock = () => {
  return (
    <StyledPreviewSection id="preview">
      <ImageBg src={'/house.png'} />
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
  position: relative;
  z-index: -1;
  @media ${BREAKPOINTS.laptop} {
    height: 58.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    height: 114.38vw;
  }
`;

const ImageBg = styled.img`
  position: absolute;
  width: 100vw;
  z-index: -1;
  bottom: 0;
`

const StyledPreviewContentWr = styled(StyledContentWr)``;

const StyledPreviewH1 = styled.h1`
  font-family: "Gella Display";
  margin: 80px 0 0;
  font-size: 126px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 9vw;
    margin: 5.71vw 0 0;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledMobilePreviewH1 = styled.h1`
  font-family: "Gella Display";
  font-weight: 500;
  line-height: 118%;
  display: none;
  margin: 5.63vw 0 0;
  font-size: 15vw;
  text-transform: uppercase;
  @media ${BREAKPOINTS.mobile} {
    display: block;
  }
`;

const StyledPreviewH2 = styled.h2`
  font-family: Involve;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 10px;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 3vw;
    margin-bottom: 0.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;
const StyledMobilePreviewH2 = styled.h2`
  display: none;
  font-family: Involve;
  text-transform: uppercase;
  font-size: 7.5vw;
  font-weight: 400;
  margin-bottom: 3.75vw;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS.mobile} {
    display: block;
  }
`;

const StyledPreviewP = styled.p`
  font-family: Involve;
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
