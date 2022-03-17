import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import testtube from '../../assets/Group.jpg';
import stars from '../../assets/Vector.jpg';
import img1 from '../../assets/img.png'
import phone from '../../assets/phone.png'
import img5 from '../../assets/Rectangle 194.jpg'
import img2 from '../../assets/Rectangle 197.jpg'
import img3 from '../../assets/Rectangle 198.jpg'
import img4 from '../../assets/Rectangle 193.jpg'
import cal from '../../assets/cal.jpg'
import docimg from '../../assets/docimg.jpg'
import pmspotion from '../../assets/pmspotion.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import mail from '../../assets/mail.png'
import nav from '../../assets/nav.png'
import net1 from '../../assets/network 1.jpg'
import net2 from '../../assets/Net2.jpg'
import net4 from '../../assets/Net4.jpg'
import net3 from '../../assets/net3.jpg'
import net0 from '../../assets/net0.jpg'
import wifi from '../../assets/wifi.png'
import battery from '../../assets/battery.png'
import noti from '../../assets/noti.png'
import cart from '../../assets/cart.png'
import menu from '../../assets/menu.png'
import './Page1.scss';
function Page1() {
  return (
    <div className="main">
        <div className="nav">
            <div className='rect1'>
                
            </div>
            <div className="rect2">
            <p className='time'>
                    9:41
                </p>
                <div className="net">
                    <img src={net0} alt="" />
                    <img src={net1} alt="" />
                    <img src={net2} alt="" />
                    <img src={net4} alt="" />
                    
                    
                </div>
                <div className="wifi">
                    <img src={wifi} alt="" className='wifi' />
                </div>
                <div className="battery">
                    <img src={battery} alt="" className='battery' />
                </div> 

                <div className="menu">
                    <MenuOutlinedIcon className='menu' />
                </div>

                <div className="cart">
                   <ShoppingCartOutlinedIcon className='cart'/>
                </div>

                <div className="noti">
                    <NotificationsOutlinedIcon className='noti' />
                </div>

            </div>
        </div>
    <div className='page1'>
    <div className='main-container'>
        
            <h1 className='about'>
                About Diana
            </h1>
            <h3 className='plat'>
                A platform that looks out for you
            </h3>
            <p className='empower'>
            Diana empowers you to understand how your body works so you can look and feel your best. 
            </p>

            <div className='line'>
            <hr  style={{
              color: '#000000',
              backgroundColor: '#000000', 
              width: '297px',
              height: '0px',
              left: '46px',
              top: '374px',
              borderColor : '#000000'
            }}/>

            </div>
            <h2 className='phil'>
              Our Philosophy
            </h2>

            <div className='sustain-border'>
              <h1>
              Sustainable wellness is a big-picture, inside out approach
              </h1>
            
            </div>

            <div className="mission">
            <p>
            Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
            </p>
            <p>
            That’s why we’ve created an integrated ecosystem of: 
            </p>
            </div>

             <div className='testtube'>
               <img src={testtube} alt="testtube" />
               </div> 
            <div className='cons'>
            <p>
            Consciously formulated products that deliver feel-good results fast 
            </p>

            <div className='stars'>
              <img src={stars} alt="stars" />
            </div>

            <p>
            In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body 
            </p>
            <div className='phone'>
              <img src={phone} alt="" className='phone' />
            </div>

            <p className='inapp'>
            In-app consultation portals that connect you with compassionate wellness experts 
            </p>
             </div> 
            <p className='nerd'>
            Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.

            </p>

        

    </div>
    </div>

    <div className="page2">
    <div className='back'>
    <div className='main-2'>
        <h1 className='diff'>
        What makes us different?
        </h1>

        <h1 className='reimagine'>
        Reimagining and rewiring self-care
        </h1>
        <div className='care'>
        <p>
        You care about conscious consumption, and so do we. 
        </p>
        <p>
        When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best 
        </p>
        <p>
        We collaborate with researchers and doctors to 
        </p>
        <p>
            <ul>
        <li>Help you get granular about your health and self-care with personalized insights, and</li>
        <li>Equip you with simple, sustainable products that get the job done</li>
        </ul>
        </p>
        <p>
        No to-the-moon-and-back claims in this neck of the woods.
        </p>
        <p>
        We’re just solving real problems for real people here. 
        </p>
        </div>
        
    </div>
    </div>




    </div>

    <div className='page3'>
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

    
    <div className='page4'>
        <div className="track">
            <p>
            Track your mood
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
            <img src={img5} alt="" />
        </div>
        <div className="img2">
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
    
    
    <div className='page5'>
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

    <div className='page7'>
        <div className="get">
            <p>
            Get your personalized period box
            </p>
        </div>
        
        <div className="pmspotion">
            <img src={pmspotion} alt="" className='pmspotion' />
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
                <i class="arrow"></i>                
            </div>
            
        </button>
        </div> 


    </div>

     <div className="page8">              
    <div className="withDiana">
        <p>
        With Diana, you’re in control of your health, your every day, and your story.
        </p>
    </div>
    </div>

    <div className="footer">
            <p></p>
    <div className='face'>
        <img src={facebook} alt="" className='face'/>
    </div>
    <div className='twitter'>
        <img src={twitter} alt="" className='twitter'/>
    </div>

        <div className="pro">
            Products
            <i class="arrow"></i>
        </div>
        <div className="our">
            Our Science
            <i class="arrow"></i>
        </div>
        <div className="vis">
            Vision & Mission
            <i class="arrow"></i>
        </div>
        <div className="about">
            About Us
            <i class="arrow"></i>
        </div>

        <div className='line'>
            <hr  style={{
              color: '#ffffff',
              backgroundColor: '#ffffff', 
              position: "absolute",
              width: '280px',
              height:'0px',
              left: '0px',
              top: '6575px',

              borderColor : '#ffffff'
            }}/>

            </div>

            <div className='subs'>
            Subscribe to our Newsletter

            </div>

            <div className='email-text'>
                <input type='email' placeholder='Enter your email...' ></input>
                <div className='rectangle'>
                    <img src={mail} alt="" className='imgmail' />
                    <p className='rtext'>
                        Activate
                    </p>
                </div>
            </div>

            <p className='by'>
                By Vedant Kulkarni
                
            </p>
            <p className='by1'>
                For Dyeus
            </p>
    </div>


    </div>

  )
}

export default Page1