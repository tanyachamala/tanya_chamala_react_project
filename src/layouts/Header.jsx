import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/edu",
    name: "Education",
  },

  {
    route: "/skills",
    name: "Skills",
  },
  {
    route: "/projects",
    name: "Projects",
  },

  {
    route: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  const themeButton = useRef(null);
  const darkTheme = "dark";
  const iconTheme = "uil-sunset";

  const getCurrentTheme = () =>
    document.body.parentElement.classList.contains(darkTheme)
      ? "dark"
      : "light";
  const getCurrentIcon = () =>
    themeButton.current.classList.contains(iconTheme)
      ? "uil-moonset"
      : "uil-sunset";

  useEffect(() => {
    if (selectedTheme) {
      document.body.parentElement.classList[
        selectedTheme === "dark" ? "add" : "remove"
      ](darkTheme);
      themeButton.current.classList[
        selectedIcon === "uil-moonset" ? "add" : "remove"
      ](iconTheme);
    }
  }, []);

  const handleThemeClick = () => {
    document.body.parentElement.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <header
      className="bg-primary text-black dark:text-white top-0 absolute right-0  z-50 w-fit"
      id="header"
    >
      <nav className="flex items-center py-4 px-8 max-w-screen-xl ml-auto">
        <ul
          className="flex  space-x-6 mr-4 w-full uppercase font-[600] text-sm"
          style={{
            justifyContent: "end",
          }}
        >
          {links.map((link, i) => (
            <li
              className={`hover:text-secondary ${
                link.route === currentPath && "text-secondary"
              } grid place-items-center`}
              key={i}
            >
              <Link to={link.route} className="">
                {link.name}
              </Link>
            </li>
          ))}

          <li className="cursor-pointer">
            <i
              ref={themeButton}
              className="uil uil-moonset text-3xl "
              onClick={handleThemeClick}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
