import '../Css/sectionThree.css'
import { topCollections } from '../TopCollectionsArray/topCollectionsArray';

const SectionThree = () => {
    
    return(
        <div className="section3">
            <div className="container">
                <div className="top">
                    <div className='coll'>
                        <h3>top collections </h3>
                    </div>
                    <div className='days'>
                        <div className='days7'> <p>7 Days </p> </div>
                        <div className='days30'> <p>30 Days </p>  </div>
                    </div>
                </div>

                <div className='collections'>

                     {
                        topCollections.map((item) => (
                            <div key={topCollections.id} className='topColl'>
                                 <div> <img src={item.avatar}/></div>
                               <div className='name'>
                                 <div className='avatarname'>
                                    <p>{item.name}</p>
                                    <span className='floor'>{item.floor}</span>
                                </div>
                                 <div className='box'> 
                                   <span className='eth'>{item.ETH}</span> 
                                   <span className='price'>{item.price}</span> 
                                   <span className='percent'>{item.percent}</span>
                                 </div>
                               </div>
                                
                            </div>
                        ) )
                     }

                </div>

                <div className='allColl'>
                    <button >See All Collection </button>
                </div>
                
                

            </div>


        </div>
    )
}

export default SectionThree