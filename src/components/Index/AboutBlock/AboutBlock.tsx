import styled from "styled-components";
import AboutBlockCard from "./AboutBlockCard";
import Image from "next/image";
import { aboutImg1, aboutImg2 } from "@/assets/AboutBlock";
import { BREAKPOINTS } from "@/styles/variables";

const AboutBlock = () => {
  return (
    <StyledAboutSection>
      <StyledAboutSectionWr>
        <AboutBlockCard
          flexDirection="row"
          id="artist"
        >
          <StyledAboutBlockCardDesc>
            <StyledAboutBlockH2>о художнике</StyledAboutBlockH2>
            <StyledAboutBlockP>
              Константин Ужве — междисциплинарный петербургский <br />
              художник с уличным бэкграундом, член <br /> профессионального союза художников. Участник ярмарок: <br /> Cosmoscow, 1703, Port
              Art Fair, THIRD PLACE ART FAIR и Sam <br /> Fair и фестивалей: Карт Бланш, BACK TO THE ROOTS.
              <br /> Известен по сольным выставкам: «13 апостол» в галерее
              <br /> «Борей», «(без)граничность» в галерея «OpenYou», «Combo
              <br /> show» в Музее современного искусства «Артмуза»
              <br /> и другим.
            </StyledAboutBlockP>
            <StyledMobileAboutBlockP>
              Константин Ужве — <br />
              междисциплинарный <br />
              петербургский художник
              <br /> с уличным бэкграундом, член
              <br /> профессионального союза <br />
              художников. Участник ярмарок: <br />
              Cosmoscow, 1703, Port Art Fair,
              <br /> THIRD PLACE ART FAIR и Sam Fair
              <br /> и фестивалей: Карт Бланш, BACK
              <br /> TO THE ROOTS. Известен
              <br /> по сольным выставкам: <br />
              «13 апостол» в галерее «Борей», <br />
              «(без)граничность» в галереe <br />
              «OpenYou», «Combo show»
              <br /> в Музее современного искусства <br />
              «Артмуза» и другим.
            </StyledMobileAboutBlockP>
          </StyledAboutBlockCardDesc>
          <StyledAboutBlockCardImg
            src={aboutImg1}
            alt="Константин Ужве"
            width={620}
            height={478}
          />
        </AboutBlockCard>
        <AboutBlockCard
          id="exhibition"
          flexDirection="row-reverse"
        >
          <StyledAboutBlockCardDesc>
            <StyledAboutBlockH2>о выставке</StyledAboutBlockH2>
            <StyledAboutBlockP>
              Выставка «Невесомости» представляет серию работ <br /> посвящённую пограничным пространствам. Знакомые <br /> пейзажи
              и образы, распадаются тут во внеземные <br /> абстракции, органические макромиры и магические тени. <br />
              Это новый тип живописи, где краска не пытается скрыть <br /> поверхность, а нарочито подчёркивает её границы <br />
              и условности. Вся серия выполнена на негрунтованных <br /> холстах, которые становятся естественным пространством <br />
              для причудливых перетеканий границ и связей <br /> между абстрактным и фигуративным искусством.
            </StyledAboutBlockP>
            <StyledMobileAboutBlockP>
              Выставка «Невесомости»
              <br /> представляет серию работ <br />
              посвящённую пограничным
              <br /> пространствам. Знакомые <br />
              пейзажи и образы, распадаются <br />
              тут во внеземные абстракции,
              <br /> органические макромиры
              <br /> и магические тени. Это новый
              <br /> тип живописи, где краска
              <br /> не пытается скрыть поверхность, <br />
              а нарочито подчёркивает
              <br /> её границы и условности. <br />
              Вся серия выполнена <br />
              на негрунтованных холстах, <br />
              которые становятся <br />
              естественным пространством <br />
              для причудливых перетеканий <br />
              границ и связей <br />
              между абстрактным <br />
              и фигуративным искусством.
            </StyledMobileAboutBlockP>
          </StyledAboutBlockCardDesc>
          <StyledAboutBlockCardImg
            src={aboutImg2}
            alt="Картина"
            width={620}
            height={478}
          />
        </AboutBlockCard>
      </StyledAboutSectionWr>
    </StyledAboutSection>
  );
};

export default AboutBlock;

const StyledAboutSection = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  gap: 80px;
  @media ${BREAKPOINTS.laptop} {
    padding: 5.71vw 0;
    gap: 5.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding: 10vw 0;
    gap: 10vw;
  }
`;

const StyledAboutSectionWr = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  @media ${BREAKPOINTS.laptop} {
    gap: 5.71vw;
    width: 100vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding: 0 6.25vw;
    gap: 10vw;
  }
`;

const StyledAboutBlockCardDesc = styled.div`
  @media ${BREAKPOINTS.laptop} {
  }
  @media ${BREAKPOINTS.mobile} {
  }
`;

const StyledAboutBlockH2 = styled.h2`
  white-space: nowrap;
  font-family: "Gella Display";
  font-weight: 500;
  font-size: 36px;
  text-transform: uppercase;
  margin: 0 80px 40px 80px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.57vw;
    margin: 0 5.71vw 2.86vw 5.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 6.25vw;
    margin: 0 0 7.5vw 0;
  }
`;

const StyledAboutBlockP = styled.p`
  font-size: 20px;
  font-family: Involve;
  white-space: nowrap;
  margin: 0 80px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.43vw;
    margin: 0 5.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledMobileAboutBlockP = styled.p`
  font-family: Involve;
  line-height: normal;
  display: none;
  white-space: nowrap;
  font-size: 5vw;
  @media ${BREAKPOINTS.mobile} {
    display: block;
    margin: 0 0 7.5vw 0;
  }
`;

const StyledAboutBlockCardImg = styled(Image)`
  @media ${BREAKPOINTS.laptop} {
    width: 44.29vw;
    height: 34.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 100%;
    height: auto;
  }
`;
