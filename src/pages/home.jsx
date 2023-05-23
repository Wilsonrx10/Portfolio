import menuContext from '../contexts/menuContext'
import styles from '../assets/home.module.css'
import Nav from '../layout/nav'
import { useContext } from 'react';

function Home() {
    const {page} = useContext(menuContext);
    return (
        <div className={styles.home}>
          <Nav/>
        </div>
    )
}

export default Home