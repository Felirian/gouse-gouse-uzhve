import React from 'react';
import Card from "@/components/Index/Works/Card";
import {PictureEntity, PICTURES_DATA} from "@/entities/pictures";
import styled from "styled-components";
import {H2} from "@/styles/textTags";

const Index = () => {
  return (
    <WorksWr>
      <H2>работы</H2>

      <PictureGrid>
        {PICTURES_DATA.map((picture: PictureEntity, index) => (
          <Card key={index} picture={picture} />
        ))}
      </PictureGrid>

    </WorksWr>
  );
};

const WorksWr = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
`;

const PictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
`

export default Index;