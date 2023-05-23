import styles from '../assets/nav.module.css'
function nav() {
    return (
        <>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contato</li>
            <li>Sobre</li>
          </ul>
        </>
    )
}

export default nav