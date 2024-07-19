import React from "react";
import Card from "@/components/Index/Works/Card";
import { PictureEntity, PICTURES_DATA } from "@/entities/pictures";
import styled from "styled-components";
import { BREAKPOINTS } from "@/styles/variables";

const Index = () => {
  return (
    <WorksWr id={"works"}>
      <Title>работы</Title>
      <PictureGrid>
        {PICTURES_DATA.map((picture: PictureEntity, index) => (
          <Card
            key={index}
            picture={picture}
            id={index}
          />
        ))}
      </PictureGrid>
    </WorksWr>
  );
};

const WorksWr = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 80px 80px;

  max-width: 1400px;
  margin: 0 auto;
  @media ${BREAKPOINTS.laptop} {
    gap: 2.86vw;
    padding: 0 5.71vw 5.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    gap: 7.5vw;
    padding: 0 6.25vw 6.25vw;
  }
`;

const PictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
  @media ${BREAKPOINTS.laptop} {
    grid-column-gap: 1.43vw;
    grid-row-gap: 2.86vw;
  }
  @media ${BREAKPOINTS.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h3`
  /* title header */
  font-family: "Gella Display";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.57vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 6.25vw;
  }
`;

export default Index;
