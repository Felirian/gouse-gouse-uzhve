import React from "react";
import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/styles/variables";
import Link from "next/link";
import { ButtonStyle } from "@/styles/shared";

const Index = ({ picture, id }) => {
  const imgCount = picture.img.length.toString();
  return (
    <CardWr imgCount={imgCount}>
      <ImgWr imgCount={imgCount}>
        {picture.img.map((img: object, index: number) => (
          <Img
            imgCount={imgCount}
            src={img.src}
            key={index}
          />
        ))}
      </ImgWr>

      <Desc>
        <Name>{picture.name}</Name>
        <Description>{picture.info}</Description>
        <BuyBtn href={`/buy/${id}`}>купить</BuyBtn>
      </Desc>
    </CardWr>
  );
};

const CardWr = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 15px;
  grid-column: span ${({ imgCount }) => imgCount};
  max-height: 700px;
  @media ${BREAKPOINTS.laptop} {
    gap: 1.07vw;
    max-height: 50vw;
  }
  @media ${BREAKPOINTS.mobile} {
    grid-column: span 1;
    grid-template-rows: 1fr;
    max-height: none;
    gap: 2.5vw;
  }
`;

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
  @media ${BREAKPOINTS.laptop} {
    max-height: 32.5vw;
    padding: 1.43vw;
    gap: 5vw;
    border-radius: 1.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    max-height: none;
    height: ${({ imgCount }) => (imgCount === "1" ? "101.56vw" : "188.13vw")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9.38vw;
    border-radius: 5vw;
    gap: 10.94vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${BREAKPOINTS.mobile} {
    height: ${({ imgCount }) => (imgCount === "1" ? "100%" : "79vw")};
  }
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
  @media ${BREAKPOINTS.laptop} {
    border-radius: 1.14vw;
    padding: 1.71vw;
    min-height: 16.29vw;
  }
  @media ${BREAKPOINTS.mobile} {
    height: 65vw;
    border-radius: 5vw;
    padding: 7.5vw 7.5vw 3.75vw 7.5vw;
    justify-content: space-between;
  }
`;

const Name = styled.h3`
  font-family: Involve;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${COLORS.MainColor};
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.29vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 6.25vw;
  }
`;

const Description = styled.p`
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.littleText};

  white-space: pre-wrap;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5vw;
  }
`;

const BuyBtn = styled(Link)`
  ${ButtonStyle};
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5vw;
    padding: 2.5vw 13.75vw;
    border-radius: 3.75vw;
  }
`;

export default Index;
