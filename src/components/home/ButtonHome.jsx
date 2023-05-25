import style from '../../assets/home/button.module.css';

const ButtonHome = () => {
    const RedirectToPortfolio = () => {
        console.log('Portfolio');
    }
    return (
        <>
           <button 
             className={style.button}
             type="button"
             onClick={RedirectToPortfolio}
           >Portfolio</button>
        </>
    )
}

export default ButtonHome