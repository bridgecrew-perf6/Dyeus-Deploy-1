import React from 'react'
import docimg from '../../assets/docimg.jpg'
function Page6() {
  return (
    <div className='page6'>
        <div className="consult">
            <p>
            Consult with wellness experts
            </p>
        </div>

        <div className="setup">
            <p>
            Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. 
            </p>
        </div>

        <div className='Button'>
        <button className='btn'>
            <div className='btext'>
                Get a consultation
            </div>
        </button>
        </div>

        <div className="docimg">
            <img src={docimg} alt="docimg" />
        </div>

    </div>
  )
}

export default Page6