import styles from '../assets/nav.module.css'

const menus = [
  {
    title:'Home',
    icon:''
  },
  {
    title:'Portfolio',
    icon:''
  },
  {
    title:'Contato',
    icon:''
  },
  {
    title:'Sobre',
    icon:''
  }
];

function Nav() {
    return (
        <>
          <ul className={styles.menu}>
            {
              menus.map((menu) => (
                <li>{menu.title}</li>
              ))
            }
            
          </ul>
        </>
    )
}

export default Nav