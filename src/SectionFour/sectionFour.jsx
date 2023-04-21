import '../Css/sectionFour.css';
import { trandingNfts } from '../TrandingNftsArray/trandingNftsArray'





const SectionFour = () => {
    return(
        <div className="section4">
            <div className="container">
             <h3> Tranding nfts</h3>

             <div className='trandingNftsBox'>
                 <button className='left2'>← </button>
                   {  
                    trandingNfts.map((item) => (
                        <div key={trandingNfts.id} className='NftsBox'> 
                          <div className='trandingImg'><img src={item.avatar}/></div>   
                          <div className='infoBox'>
                            <div>
                                <p>{item.name}  </p>
                                <span>{item.nickname}</span>
                            </div>
                            <div className='priceInfo'>
                                <div> <p>Price </p> <span>{item.price} </span></div>
                                <div> <p>Highest Bid </p>  <span>{item.highestBid} </span></div>
                            </div>
                            
                          </div>
                            
                        </div>
                    ))
                   }
                 <button className='right2'>→ </button>
             </div>

            </div>
        </div>
    )
}

export default SectionFour