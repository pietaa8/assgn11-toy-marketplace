import logo from '../../../assets/image/378587.png'

const Footer = () => {
    return (
        
          <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        <img  src={logo} alt="" className="w-28 h-20" />
          <p>ToysStore Industries Ltd.<br/>Providing reliable toys since 2023</p>
        </div> 
        <div>
          <span className="footer-title">Contract Us</span> 
          <a className="link link-hover">Facebook</a> 
          <a className="link link-hover">Twitter</a> 
          <a className="link link-hover">Instagram</a> 
          <a className="link link-hover">Whatsapp</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Toy Kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
        <p className='text-center'>© {new Date().getFullYear()} ToysStore. All rights reserved.</p>
        
      </footer>
     
      
    );
};

export default Footer;