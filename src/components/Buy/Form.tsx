import React, {useState} from 'react';
import {ButtonStyle, Input, TextArea} from "@/styles/shared";
import styled, {ThemeProvider} from "styled-components";
import {BREAKPOINTS, COLORS} from "@/styles/variables";
import Sended from "@/components/Buy/Sended";

const Form = ({picture, id}) => {
  console.log(picture.name);
  const [sended, setSended] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    images: picture?.name,
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      { sended ? (
          <Sended/>
      ) : (
        <FormWr onSubmit={sendEmail}>
          <InputWr>
            <H1>Покупка картины</H1>
            <P>Для того, чтобы забронировать или купить картину, заполните форму:</P>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={'ФИО'}
              required={true}
            />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={'+7(999)999-99-99'}
              required={true}
            />
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={'E-mail'}
              required={true}
            />
            <Input
              type="text"
              id="pic"
              name="images"
              style={{display: 'none'}}
              value={`${picture?.name}_${id}`}
              placeholder={''}
              required={true}
            />
            <PictureName>
              {picture.name}
            </PictureName>
            <P>Комментарий к заказу</P>
            <TextArea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder={'комментарий к заказу'}
            />
            <Caption>
              Нажимая на кнопку «Отправить»,<br/>
              вы даете согласие на обработку персональных данных <br/>
              и соглашаетесь с политикой конфиденциальности
            </Caption>

          </InputWr>

          <Right>

            <ImgWr>
              {picture.img.map((img, i) => (
                <Img src={img.src} key={i} />
              ))}
            </ImgWr>

            <ButtonSubmit type="submit">
              отправить
            </ButtonSubmit>

          </Right>
        </FormWr>
      )}
    </>
  );
};

const H1 = styled.h1`
  font-family: "Gella Display";
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${BREAKPOINTS.laptop} {
    font-size: 4.286vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 13.125vw;
  }
`

const P = styled.p`
  font-family: Involve;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.429vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5vw;
  }
`

const Caption = styled.p`
  color:  #B2B2B2;

  /* little footer text */
  font-family: Involve;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 13.8px */
  @media ${BREAKPOINTS.laptop} {
    font-size: 0.857vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 3.125vw;
  }
`

const PictureName = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  
  border-radius: 16px;
  background-color: ${COLORS.white};
  font-family: Involve;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; /* 24.84px */
  text-transform: uppercase;

  color: ${COLORS.black};
  
  @media ${BREAKPOINTS.laptop} {
    padding: 0.857vw 1vw;
    border-radius: 1.143vw;
    font-size: 1.286vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding: 2.5vw 5.625vw;
    border-radius: 3.75vw;
    font-size: 5vw;
  }
`

const FormWr = styled.form`
  display: flex;
  
  @media ${BREAKPOINTS.mobile} {
    flex-direction: column;
    gap: 6.25vw;
  }
`

const ImgWr = styled.div`
  
  width: 100%;
  height: 100%;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 40px;
  
  @media ${BREAKPOINTS.laptop} {
    gap: 2.857vw;
    padding-left: 2.857vw;
  }
  
  @media ${BREAKPOINTS.mobile} {
    gap: 6.25vw;
    padding-left: 0;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  align-items: center;
  justify-content: center;
`

const Img= styled.img`
  object-fit: contain;
  width: auto;
  height: auto;
  
  //max-width: 350px;
  max-height: 300px;
  @media ${BREAKPOINTS.laptop} {
    max-height: 21.429vw;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
`

const ButtonSubmit = styled.button`
  ${ButtonStyle};
  font-family: Involve;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; /* 33.12px */
  text-transform: uppercase;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.714vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding: 2.5vw 5.625vw;
    border-radius: 3.75vw;
    font-size: 5vw;
  }
`

const InputWr  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 650px;
  flex-shrink: 0;
  @media ${BREAKPOINTS.laptop} {
    width: 46.429vw;
    gap: 1.429vw;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 100%;
    gap: 3.75vw;
  }
`

export default Form;