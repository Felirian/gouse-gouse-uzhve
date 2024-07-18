import React, {useState} from 'react';
import {Input, TextArea} from "@/styles/shared";
import styled, {ThemeProvider} from "styled-components";
import {BREAKPOINTS} from "@/styles/variables";
import {FontGellaDisplay} from "@/styles/textTags";

const Form = ({picture}) => {
  console.log(picture.name);
  const [sended, setSended] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    images: picture?.name,
    comment: ''
  });


  const sendEmail = (e) => {
    e.preventDefault();

    console.log('e target: ', e.target);
    // emailjs
    //   .sendForm(
    //     "service_enyrjd7",
    //     "template_kx9lwid",
    //     e.target,
    //     'Ub0KtqImJsye3q2h6'
    //   )
    //   .then(
    //     (result) => {
    //       console.log('e send: ',e.target);
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log('error: ', error.message, JSON.stringify(error));
    //     }
    //   );
    e.target.reset();
    setSended(true);
    setTimeout(() => {
      setSended(false)
      window.location = '/'
    }, 3000);
  };

  return (
    <>
      <ThemeProvider theme={{sended: sended}}>
        <form onSubmit={sendEmail}>
          <InputWr>
            <H1>Покупка картины</H1>
            <P>Для того, чтобы забронировать или купить картину, заполните форму:</P>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              //onChange={handleChange}
              placeholder={'ФИО'}
              required={true}
            />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              //onChange={handleChange}
              placeholder={'+7(999)999-99-99'}
              required={true}
            />
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              //onChange={handleChange}
              placeholder={'E-mail'}
              required={true}
            />
            <P>Комментарий к заказу</P>
            <TextArea
              id="comment"
              name="comment"
              value={formData.comment}
              //onChange={handleChange}
              placeholder={'комментарий к заказу'}
            />

          </InputWr>
        </form>
      </ThemeProvider>
    </>
  );
};

const H1 = styled.h1`
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

const InputWr  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45%;
`

export default Form;