import React from 'react'
import './Page3.scss'
import img1 from '../../assets/img.png'
function Page3() {
  return (
    <div className='main'>
        <div className='try'>
        <div className='lib'>
        Liberate your everyday wellness 
        </div>

        <div className="shop">
        Shop our self-care products
        </div>

        <div className="gentle">
        Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   
        </div>
        </div>
        <div className='Button'>
        <button className='btn'>
            <div className='btext'>
                Upgrade to Self-Care

            </div>
        </button>
        </div>

        <div className="nasties">
            #NoNasties, we Promise!
        </div>
        <div className="image">
            <img src={img1} alt="img" />
        </div>

    </div>
  )
}

export default Page3