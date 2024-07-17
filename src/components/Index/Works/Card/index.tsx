import React from 'react';
import styled from "styled-components";
import {H2} from "@/styles/textTags";
import {COLORS} from "@/styles/variables";

const Index = ({picture}) => {
  console.log(picture);
  return (
    <CardWr>
      <ImgWr>
        {picture.img.map((img: object[], index: number) => (
          <Img src={img.src} key={index} />
        ))}
      </ImgWr>

      <Desc>
        <H2>{picture.name}</H2>
        <p>{picture.info}</p>
      </Desc>
    </CardWr>
  );
};

const CardWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ImgWr = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  
  justify-content: center;
  align-items: center;
  align-self: stretch;
  
  background-color: ${COLORS.black};  
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Desc = styled.div`
  background-color: ${COLORS.cardBg};
  padding: 24px;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  width: 100%;
  height: 100%;
`



export default Index;