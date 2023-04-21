import '../Css/sectionOne.css'
import creators from '../images/Creators.png'
import arrow from '../images/arrow.png'
import image1 from '../images/image 1.png'
import playIcon from '../images/Play icon.png'
const SectionOne = () => {
    return(
        <div>
            <section className="section1">
                <div className="container">
                  <div className='collectArt'>
                     <div className='artwork'>
                            <div className='nft'>
                                <h2>NFT Marketplace </h2>
                                <p>Collect rare digital artworks </p>
                            </div>
                            <div className='explore'>
                                <button>Explore </button>
                                <img className='creators' src={creators}/>
                                <img className='arrow' src={arrow}/>
                            </div>
                            <div className='funfact'>
                                <div className='fact'>
                                    <p>50k</p>
                                    <span>Artwork</span>
                                </div>

                                <div className='fact'>
                                    <p>35k</p>
                                    <span>Auction</span>
                                </div>

                                <div className='fact'>
                                    <p>23k+</p>
                                    <span>Artist</span>
                                </div>
                            </div>
                    </div>
                   

                    <div className='wingArt'>
                        <img className='wing' src={image1}/>
                        <img className='playIcon' src={playIcon}/>
                    </div>

                   </div>
                </div>
            </section>

        </div>
    )
}

export default SectionOne