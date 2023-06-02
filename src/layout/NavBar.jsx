import { useContext } from "react";
import styles from "../assets/nav.module.css";
import { PageContext } from "../contexts/pageContext";
import { Link } from "react-router-dom";

function NavBar() {
  const menus = [
    {
      title: "Home",
      router: '/',
      icon: "",
    },
    {
      title: "Portfolio",
      router:'portfolio',
      icon: "",
    },
    {
      title: "Contato",
      router: "contact",
      icon: "",
    },
    {
      title: "Sobre",
      router: 'sobre',
      icon: "",
    },
  ];

  const {pageActive} = useContext(PageContext)
  
  return (
    <>
      <ul className={styles.menu}>
        {menus.map((menu, id) => (
          <div key={id}>
            <Link to={menu.router}><li className={pageActive == menu.title ? styles.active : ''}>{menu.title}</li></Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default NavBar;