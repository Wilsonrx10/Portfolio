import style from '../assets/default.module.css'
import NavBar from './NavBar'

function LayoutDefault({children}) {
    return (
    <div className={style.principal}>
       <div className={style.container}>
            {children}
       </div>
       <div className={style.menu}>
         <NavBar/>
       </div>
    </div>
    )
}

export default LayoutDefault