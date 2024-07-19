import React from 'react';
import Card from "@/components/Index/Works/Card";
import {PictureEntity, PICTURES_DATA} from "@/entities/pictures";
import styled from "styled-components";

const Index = () => {
  return (
    <WorksWr id={'works'}>

      <Title>работы</Title>

      <PictureGrid>
        {PICTURES_DATA.map((picture: PictureEntity, index) => (
          <Card key={index} picture={picture} id={index}/>
        ))}
      </PictureGrid>

    </WorksWr>
  );
};

const WorksWr = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 80px;
`;

const PictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
`

const Title = styled.h3`
  /* title header */
  font-family: "Gella Display";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`

export default Index;