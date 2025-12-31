export const useAnimation = () => {
  const jump = (dom: Element) => {
    console.log(dom);
    dom.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-6px)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(-3px)' },
        { transform: 'translateY(0)' }
      ],
      {
        duration: 400,
        easing: 'ease-out'
      }
    );
    return;
  };
  const rotate = (dom: Element) => {
    console.log(dom);
    dom.animate([{ transform: 'rotate(360deg)' }], {
      duration: 500,
      easing: 'ease-out'
    });
    return;
  };
  return { jump, rotate };
};
