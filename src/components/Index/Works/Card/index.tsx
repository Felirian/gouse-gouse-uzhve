import React from 'react';
import styled from "styled-components";
import {COLORS} from "@/styles/variables";

const Index = ({picture}) => {
  const imgCount = String(picture.img.length) ;
  return (
    <CardWr imgCount={ imgCount }>
      <ImgWr>
        {picture.img.map((img: object, index: number) => (
          <Img src={img.src} key={index} />
        ))}
      </ImgWr>

      <Desc>
        <h2>{picture.name}</h2>
        <p>{picture.info}</p>
      </Desc>
    </CardWr>
  );
};

const CardWr = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 15px;
  grid-column: span ${({ imgCount }) => imgCount  };
  
  max-height: 700px;
`

const ImgWr = styled.div`  
  width: 100%;
  height: 100%;
  max-height: 455px;
  padding: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 70px;
  
  background-color: ${COLORS.blackOpacity};
  border-radius: 16px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;  
`;

const Desc = styled.div`
  background-color: ${COLORS.cardBg};
  padding: 24px;
  border-radius: 16px;
  
  min-height: 228px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  width: 100%;
  height: 100%;
`



export default Index;