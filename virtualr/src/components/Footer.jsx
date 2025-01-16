import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-8">
          <div className="flex items-center space-x-3">
            <img
              src={logo} // Replace with your logo path
              alt="Website Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">VirtualR</span>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="text-neutral-300 hover:text-white" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-neutral-300 hover:text-white" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-neutral-300 hover:text-white" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-neutral-300 hover:text-white" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
