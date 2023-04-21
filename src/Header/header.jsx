import '../Css/headerCss.css'
import logo from '../images/Logo.png'
const Header = () => {
    return(
        <div>
            <section className='section'>
                <div className="container">
                    <div className='header'>
                        <div className='logo'>
                            <img src={logo} alt='logo.img'/>
                        </div>
                        <div>
                            <nav>
                                <ul>
                                    <li> <a href=''> Explore </a> </li>
                                    <li> <a href=''> Collections </a> </li>
                                    <li> <a href=''> Creators </a> </li>
                                    <li> <a href=''> Blog</a> </li>
                                 </ul>
                            </nav>
                        </div>
                        <div>
                            <button>Connect Wallet</button>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header