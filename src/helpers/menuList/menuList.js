export const menuList = (isLoggedIn) => {
  const menu = [{ name: "Домой", to: "/", icon: "home" }];

  if (!isLoggedIn) {
    menu.push(
      { name: "Войти", to: "/login", icon: "arrow_forward" },
      { name: "Реистрация", to: "/registration", icon: "check" }
    );
  } else if (isLoggedIn) {
    menu.push(
      { name: "Новый Фид", to: "/articles/new", icon: "add" },
      {
        name: "Настройки",
        to: "/settings",
        icon: "settings",
      }
    );
  }

  return menu;
};
