import React from 'react'
import './page4.scss'
import img1 from '../../assets/Rectangle 194.jpg'
import img2 from '../../assets/Rectangle 197.jpg'
import img3 from '../../assets/Rectangle 198.jpg'
import img4 from '../../assets/Rectangle 193.jpg'

function Page4() {
  return (
    <div className='outer'>
        <div className="track">
            <p>
            Track your 
            </p>
        </div>
        <div className="days">
            <p>
            All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 
            </p>
        </div>
        <div className='Button'>
        <button className='btn'>
            <div className='btext'>
                Track Your Mood

            </div>
        </button>
        </div>

    <div className='photos'>
        <div className="img1">
            <img src={img1} alt="" />
        </div>
        <div className="img2">s
            <img src={img2} alt="" />
        </div>
       
        <div className="img3">
            <img src={img3} alt="" />
        </div>
        <div className="img4">
            <img src={img4} alt="" />
        </div>

    </div>



    </div>
  )
}

export default Page4