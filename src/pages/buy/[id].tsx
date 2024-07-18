import React from 'react';
import {useRouter} from "next/router";
import {PICTURES_DATA} from "@/entities/pictures";
import Form from "@/components/Buy/Form";
import styled from "styled-components";

const Id = () => {
  const router = useRouter();
  const {id} = router.query;


  return (
    <MainBuy>
      {id && <Form picture={PICTURES_DATA[id]}/>}
    </MainBuy>
  );
};

const MainBuy = styled.main`
  width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
`

const FormWr = styled.form

export default Id;