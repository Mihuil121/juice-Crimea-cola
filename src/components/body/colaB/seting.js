import Down from '../../../img/body/down.png'

const sections = [
    {
      label: "Section 1",
      section: "#section1"
    },
    {
      label: "Section 2",
      section: "#section2"
    }
  ];
  
  export const config = {

    getScrollCompletionVal: (val) => {},
    onNavClicked: (val) => {},
    aesthetics: {
      icon: <img src={Down}/>,
      tooltipTxt: "",
      location: "bottom-center",
      size: 50,
      hideOnScroll: true,
      indicatorBackgroundColor: "#eed4d4", // Цвет фона индикатора
      indicatorProgressColor: "#cbacb1", // Цвет прогресса индикатора
      margins: {
        desktop: 80,
        mobile: 40
      },
      popupWidths: {
        desktop: "200px",
        mobile: "180px"
      },
      popupBackgroundColor: "#f9e2e6", // Цвет фона всплывающего окна
      popupLinksColor: "#cbacb1" // Цвет ссылок внутри всплывающего окна
    }
  };
  