import React from 'react'

function Page7() {
  return (
    <div className='page7'>
        <div className="get">
            <p>
            Get your personalized period box
            </p>
        </div>
        
        <div className="pmspotion">
            <img src={pmspotion} alt="" />
        </div>

        <div className="tailor">
            <p>
            Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. 
            </p>    
        </div>   

        <div className='Button'>
        <button className='btn'>
            <div className='btext'>
                Create your box on the app
            </div>
            <div class="arrow">
                <div class="arrow-top"></div>
                <div class="arrow-bottom"></div>
            </div>
        </button>
        </div> 


    </div>
  )
}

export default Page7