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
    name: '«Крушение беспилотника»',
    info: `холст, акрил, хлор 100 x 80 см, 2024`,
    img: [img.img3]
  },
  {
    name: '«Комета»',
    info: `холст, акрил, хлор 100x 80 см 2024`,
    img: [img.img4]
  }, {
    name: '«Без названия»',
    info: `холст, акрил, хлор  90 x 50 / 50 x 50 см 2024`,
    img: [img.img51, img.img52]
  },

]
