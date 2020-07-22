const StyleGuide = {
  spacing: 8,
  colors: {
    // TODO: these should be handled by dark/light mode context
    backgroundLight: '#F5FCFF',
    backgroundDark: '#19191D',
    brandLight: '#FF4E5E', // This is more accessible, let's see how it works.
    // brandLight: '#C596B8', // This is more accessible, let's see how it works.
    brandDark: '#A748F9', // This is more accessible, let's see how it works.
    // brandDark: '#7A4375', // This is more accessible, let's see how it works.
    // brand: '#7a305c',
    brandSecondary: '#FF8651',
    black: '#050505',
    white: '#FFF',
    gray: '#EEE',
  },
  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20,
    },
    button: {
      fontWeight: '700',
      fontSize: 24,
    },
    secondaryButton: {
      fontWeight: '800',
      fontSize: 16,
    },
    header: {
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 64,
    },
  },
};

/*
PALETTE OPTIONS
pulling inspiration from firefox https://i.gzn.jp/img/2019/07/10/firefox-68/00.jpg
#FF4E5E - "Carnation"
#FF8651 - "Coral"
#A748F9 - "Lavender Indigo"
#21123B - "Haiti" (dark purple)
*/

export default StyleGuide;
