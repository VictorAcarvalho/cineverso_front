import  './Header.module.css'
import logo from "../../assets/movie-camera.svg"
import Title from '../title/Title';

function Header(){
    return(
        <header>
            <Title text='Cineverso' size='giant'/>
            <img src={logo}/>
        </header>
    )
}

export default Header;