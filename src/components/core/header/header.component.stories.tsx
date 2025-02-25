import { Header } from ".";

export default {
  title: "Core/Header",
  component: Header,
};

const toggleMenu = () => {
  console.info("Click toggle menu.");
};

const props_open = {
  open: true,
  toggleMenu: toggleMenu,
};

const props_close = {
  open: false,
  toggleMenu: toggleMenu,
};

export const Open = () => {
  return <Header {...props_open} />;
};

export const Close = () => {
  return <Header {...props_close} />;
};
