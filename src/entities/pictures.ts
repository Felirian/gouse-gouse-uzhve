import * as img from '../assets/pictures';

export type PictureEntity = {
  name: string,
  info: string,
  img: object[]
};

export const PICTURES_DATA: PictureEntity[] = [
  {
    name: '«После»',
    info: `холст, масло, аэрозоль
    100 x 200 см
    2023`,
    img: [img.img1]
  },
  {
    name: '«Стрела»',
    info: `холст, акрил, вытравка, аэрозоль
    100 x 80 см
    2022`,
    img: [img.img2]
  },
  {
    name: '«После»',
    info: `холст, масло, аэрозоль
    100 x 200 см
    2023`,
    img: [img.img1]
  },
  {
    name: '«После»',
    info: `холст, масло, аэрозоль
    100 x 200 см
    2023`,
    img: [img.img1]
  }, {
    name: '«После»',
    info: `холст, масло, аэрозоль
    100 x 200 см
    2023`,
    img: [img.img1]
  },

]
