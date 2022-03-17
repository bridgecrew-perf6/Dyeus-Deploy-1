import React from 'react';
import './Page5.scss';
import cal from '../../assets/cal.jpg'
function Page5() {
  return (
    <div className='outer'>
        <div className="track">
            <p>
                Track your Period
            </p>
        </div>
        <div className="stay">
            <p>
            Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. 
            </p>
        </div>
        <div className='Button'>
        <button className='btn'>
            <div className='btext'>
                Track Your period on the app

            </div>
        </button>
        </div>
        <div className="cal">
            <img src={cal} alt="" />
        </div>
        
    </div>
  )
}

export default Page5