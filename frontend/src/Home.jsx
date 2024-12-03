  import React from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { FaInstagram } from "react-icons/fa";
  import './HomePage.css';
  import './Ourstory.css';
  import Minivator from './Minivator.png';
  import baler from './c.jpg';
  import cultivator2 from './5arm.jpg';
  import cultivator from './k.jpg';
  import cultivator3 from './v.jpg';
  import jcb from './jcb.webp';
  import t1 from './swaraj.jpg';
  import t2 from './john.jpg';
  import t3 from './kubota.jpg';
  import t4 from './machendra.jpg';
  import t5 from './truck.png';

  //import logo from './sps.jpg';


  const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Clear authentication data or token if necessary
      // localStorage.removeItem('authToken'); // Example

      // Navigate to the login page
      navigate('/login');
    };

    return (
      <div className='f-bg'>
        <Header onLogout={handleLogout} />
        <HeroSection />
        <AboutUs />
        <FeaturedMenu />
        <Footer />
      </div>
    );
  };

//   const Header = ({ onLogout }) => (
//     <header>
//       <nav>
//         <ul>
//           {/* <li><img src={logo} alt="Company Logo" className="logo" /></li> */}
//           <li><Link to="/home">HOME</Link></li>
//           <li className="dropdown">
//             <a href="/implements" className="dropbtn">
//               VEHICLE <span className="arrow">&#9660;</span>
//             </a>
//             <div className="dropdown-content">
//               <div className="sub-dropdown">
//                 <a href="#" className="dropbtn">Tractors</a>
//                 <div className="sub-dropdown-content">
//                   <Link to="/Tractor2">John Deere</Link>
//                   <Link to="/Tractor3">Kubota</Link>
//                   <Link to="/Tractor1">Swaraj</Link>
//                   <Link to="/Tractor4">Mahindra</Link>
//                 </div>
//               </div>
//               <Link to="/Jcb">JCB</Link>
//               <Link to="/Lorry">Lorry</Link>
//             </div>
//           </li>
//           <li className="dropdown">
//             <a href="/implements" className="dropbtn">
//               IMPLEMENTS <span className="arrow">&#9660;</span>
//             </a>
//             <div className="dropdown-content">
//               <div className="sub-dropdown">
//                 <a href="#" className="dropbtn">Land Preparation</a>
//                 <div className="sub-dropdown-content">
//                   <Link to="/ArmDetails">7 Arm Cultivator</Link>
//                   <Link to="/ArmsDetails">5 Arm Cultivator</Link>
//                   <Link to="/MinivatorDetails">Minivator</Link>
//                   <Link to="/RidgerDetails">Ridger</Link>
//                 </div>
//               </div>
//               <div className="sub-dropdown">
//                 <a href="#" className="dropbtn">Post Harvesting</a>
//                 <div className="sub-dropdown-content">
//                   <Link to="/BalerDetails">Baler</Link>
//                 </div>
//               </div>
//               <div className="sub-dropdown">
//                 <a href="#" className="dropbtn">Materials Handling</a>
//                 <div className="sub-dropdown-content">
//                   <Link to="/TrollyDetails">Trolly</Link>
//                 </div>
//               </div>
//             </div>
//           </li>
//           <li><Link to="/Order">BOOKING</Link></li>
//           <li><button onClick={onLogout} className='btn btn-danger'>Logout</button></li>
//         </ul>
//       </nav>
//     </header>
//   );
const Header = ({ onLogout }) => {
  const navigate = useNavigate();  // Use navigate hook

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li className="dropdown">
            <a href="/implements" className="dropbtn">
              VEHICLE <span className="arrow">&#9660;</span>
            </a>
            <div className="dropdown-content">
              <div className="sub-dropdown">
                <a href="#" className="dropbtn">Tractors</a>
                <div className="sub-dropdown-content">
                  <Link to="/Tractor2">John Deere</Link>
                  <Link to="/Tractor3">Kubota</Link>
                  <Link to="/Tractor1">Swaraj</Link>
                  <Link to="/Tractor4">Mahindra</Link>
                </div>
              </div>
              <Link to="/Jcb">JCB</Link>
              <Link to="/Lorry">Lorry</Link>
            </div>
          </li>
          <li className="dropdown">
            <a href="/implements" className="dropbtn">
            EQUIPMENTS <span className="arrow">&#9660;</span>
            </a>
            <div className="dropdown-content">
              <div className="sub-dropdown">
                <a href="#" className="dropbtn">Land Preparation</a>
                <div className="sub-dropdown-content">
                  <Link to="/ArmDetails">7 Arm Cultivator</Link>
                  <Link to="/ArmsDetails">5 Arm Cultivator</Link>
                  <Link to="/MinivatorDetails">Minivator</Link>
                  <Link to="/RidgerDetails">Ridger</Link>
                </div>
              </div>
              <div className="sub-dropdown">
                <a href="#" className="dropbtn">Post Harvesting</a>
                <div className="sub-dropdown-content">
                  <Link to="/BalerDetails">Baler</Link>
                </div>
              </div>
              <div className="sub-dropdown">
                <a href="#" className="dropbtn">Materials Handling</a>
                <div className="sub-dropdown-content">
                  <Link to="/TrollyDetails">Trolly</Link>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/Order">BOOKING</Link></li>
          <li><Link to="/paymentuser">PAYMENT</Link></li>
          <li><button onClick={onLogout} className='btn btn-danger'>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};



  
  const HeroSection = () => (
    <section className="hero"><br/>
      <h2>Welcome to SPS EARTHMOVERS</h2>
      <p>Farming Meets the Future</p>
    </section>
  );

  const AboutUs = () => (
    <section id="about">
      <h3>Our Story</h3>
      <div className='abt'>
        <p>
        Welcome to <b>SPS EARTHMOVERS</b> We specialize in providing top-quality agricultural vehicles and 
        implements, tailored to meet your farming needs. From powerful tractors and versatile trolleys 
        to efficient balers and cultivators, our fleet is designed to boost productivity and ensure a 
        seamless farming experience. Book the right equipment with us today and take the first step towards 
        a more successful harvest. Easy booking, reliable service, and a commitment to excellence await you. 
        Let's cultivate success together!
        </p>
      </div>
      <hr />
    </section>
  );

  const FeaturedMenu = () => (
    <section id="men">
      <br/>
      
      <h3 className='section-heading'>The Future of Farming is Here!</h3>
      <br/>
      <br/>
      <div className='img-v'>
        <Link to="/Tractor2">
          <img src={t2} alt='Minivator' className='product-image' />
        </Link>
        <Link to="/Tractor3">
          <img src={t3} alt='Minivator' className='product-image' />
        </Link>
        <Link to="/Tractor1">
          <img src={t1} alt='Minivator' className='product-image' />
        </Link>
        <Link to="/Tractor4">
          <img src={t4} alt='Minivator' className='product-image' />
        </Link>
        <Link to="/Jcb">
          <img src={jcb} alt='baler' className='product-image' />
        </Link>
        <Link to="/Lorry">
          <img src={t5} alt='baler' className='product-image' />
        </Link>
       
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 className='section-heading'>Our Equipments</h3>
      <br/>
      
      <div className='img-container'>
        <Link to="/BalerDetails">
          <img src={baler} alt='baler' className='product-image' />
        </Link>
        <Link to="/MinivatorDetails">
          <img src={Minivator} alt='Minivator' className='product-image' />
        </Link>
        <Link to="/ArmDetails">
          <img src={cultivator} alt='cultivator' className='product-image' />
        </Link>
        <Link to="/ArmsDetails">
          <img src={cultivator2} alt='cultivator2' className='product-image' />
        </Link>
        <Link to="/RidgerDetails">
          <img src={cultivator3} alt='cultivator 3' className='product-image' />
        </Link>
       
        
      </div> 
      <hr/>
    </section>
  );

  const Footer = () => (
    <footer>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          {/* <li><a href="/about">About Us</a></li> */}
          <li><Link to="/Order">BOOKING</Link></li>
        </ul>
      </nav>
      <div>
        <p>Follow us on: <a href="https://www.instagram.com/_sabari_3333_?igsh=eTk0YnBlZTFyZXEy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></p>
        <p>ERODE | 9698272260 | spsearthmovers@gmail.com</p>
      </div>
    </footer>
  );

  export default Home;
  