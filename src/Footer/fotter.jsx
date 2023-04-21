import '../Css/footer.css'
import logo from '../images/Logo.png'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
               <div className='links'>
                   <div className='footerLogo'>
                     <img src={logo} alt='logo.img'/>
                   </div>
             
                <div  className='quick'>
                    <h4> Quick Links</h4>
                    <p>About us</p>
                    <p>Services</p>  
                    <p>API</p>
                    <p>Become a Partner </p>  
                    <p>Branding</p> 
                    <p>Career</p> 
                </div>
            

                <div className='marketplac'>
                    <h4>Marketplace</h4>
                    <p>Explore</p>
                    <p>How it works</p>  
                    <p>Insights</p> 
                    <p> Help Center</p>
                </div>

            <div className='signUp'> 
                <h3>Sign Up to Receive Updates Services</h3>
                <p>youremail@gmail.com <span>&#8663;</span> </p>
            </div>
            </div>

            <div className='social'>
                <p> Qeeb 2022. All Rights Reserved</p>
                <p>Terms & Conditions     Privacy</p>

                <div className='socialLinks'>
                    <div><i class="fa fa-twitter" ></i></div>
                    <div><i class="fa fa-facebook-f"></i> </div> 
                    <div><i class="fa fa-instagram"></i></div> 
                    <div><i class="fa fa-linkedin-square"></i> </div> 
                    <div><i class="fa fa-youtube-play"></i></div> 
                </div>
            </div>

        </div>
           
        </div>
    )
}

export default Footer