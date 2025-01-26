const Footer = () => (
  <footer className="footer bg-[#242a2c] text-[#454e51] py-16 px-0">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="footer__logo text-white text-xl font-bold uppercase mb-6 md:mb-0">
        Logo
      </div>
      <ul className="footer__links flex space-x-6">
        <li>
          <a href="#" className="text-white font-semibold hover:text-[#63c6ae]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:text-[#63c6ae]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:text-[#63c6ae]">
            Services
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
