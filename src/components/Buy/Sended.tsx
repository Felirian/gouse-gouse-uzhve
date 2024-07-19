import React from 'react';
import styled from "styled-components";

const Sended = () => {
  return (
    <>
      <Titile>
        Заявка отправлена
      </Titile>
      <P>Мы свяжемся с Вами в течение трех рабочих дней</P>
      <Img src={'/house.png'}/>
    </>
  );
};

const Titile = styled.h1`
  font-family: "Gella Display";
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const P = styled.p`
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Img = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
`

export default Sended;