import { insights } from '../InsightsArray/InsightsArray'
import '../Css/sectionFive.css'
const SectionFive = () => {
    return(
        <div className="section5">
            <div className="container">
                <h3>Insights</h3>
                 <div className='insights'>
                   {
                    insights.map((item)=> (
                        <div key={insights.id} className='insightsBox'>
                            <div><img src={item.avatar} /> </div>
                            <div className='insigtsTypeName' >
                              <div className='insightsType'>{item.type}</div>  
                              <div className='insigtsName'>{item.name} </div> 
                            </div>
                            <div className='insigtsDescription'>{item.description}</div>
                            <div className='readMore'>
                                <button>Read More ↗</button>
                            </div> 
                        </div>
                    ))
                   }
                 </div>

            </div>
        </div>
    )
}

export default SectionFive