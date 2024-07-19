import React from 'react';
import {useRouter} from "next/router";
import {PICTURES_DATA} from "@/entities/pictures";
import Form from "@/components/Buy/Form";
import styled from "styled-components";
import {BREAKPOINTS} from "@/styles/variables";

const Id = () => {
  const router = useRouter();
  const {id} = router.query;


  return (
    <MainBuy>
      {id && <Form picture={PICTURES_DATA[id]} id={id}/>}
    </MainBuy>
  );
};

const MainBuy = styled.main`
  width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 40px 80px;
  @media ${BREAKPOINTS.laptop} {
    width: 100vw;
    padding: 2.857vw 5.714vw;
  }
`

const FormWr = styled.form

export default Id;