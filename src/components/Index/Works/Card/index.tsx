import React from 'react';
import styled from "styled-components";
import {COLORS} from "@/styles/variables";
import Link from "next/link";
import {ButtonStyle} from "@/styles/shared";

const Index = ({picture, id}) => {
  const imgCount = picture.img.length.toString() ;

  return (
    <CardWr imgCount={ imgCount }>
      <ImgWr>
        {picture.img.map((img: object, index: number) => (
          <ImgCon key={index}>
            <Img src={img.src} />
          </ImgCon>
        ))}
      </ImgWr>

      <Desc>
        <Name>{picture.name}</Name>
        <Description>{picture.info}</Description>
        <BuyBtn href={`/buy/${id}`}>
          купить
        </BuyBtn>
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

const ImgCon = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  height: fit-content;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Desc = styled.div`
  background-color: ${COLORS.cardBg};
  padding: 24px;
  border-radius: 16px;
  
  min-height: 228px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  width: 100%;
  height: 100%;
`

const Name = styled.h3`
  font-family: Involve;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${COLORS.MainColor};  
`

const Description = styled.p`
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.littleText};
  
  white-space: pre-wrap
`;

const BuyBtn = styled(Link)`
  ${ButtonStyle};
  
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  
  
`


export default Index;