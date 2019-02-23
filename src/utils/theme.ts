export type Theme = {
  font: Font;
  color: Color;
};

type Font = {
  logo: string;
  title: string;
  body: string;
};

type Color = {
  [key: string]: string;
};

export const theme: Theme = {
  font: {
    logo: '',
    title: "'Roboto Slab', serif",
    body: "'Raleway', sans-serif",
  },
  color: {
    blue: '#ABD0CE',
    grey: '#7C7877',
    darkgrey: '#707070',
    lightgrey: '#D9D4CF',
    darkwhite: '#F0E5DE',
  },
};
