import style from '../assets/default.module.css'
import Nav from './nav'

function LayoutDefault({children}) {
    return (
    <div className={style.principal}>
       <div className={style.container}>
            {children}
       </div>
       <div className={style.menu}>
         <Nav/>
       </div>
    </div>
    )
}

export default LayoutDefault