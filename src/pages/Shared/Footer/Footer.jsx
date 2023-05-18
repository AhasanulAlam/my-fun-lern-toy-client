import { FaBattleNet, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <p className="flex items-center">
                    <span><FaBattleNet className="text-3xl text-orange-500"></FaBattleNet> </span>
                    <span> <span className="text-orange-400 text-3xl">F</span>un<span className="text-orange-400 text-3xl">L</span>earn<span className="text-orange-400 text-3xl">T</span>oy</span>
                </p>
                <p>Fun Learn Toy<br />Providing educational toy since 1992</p>
                <p>Copyright © 2023 - All right reserved by Fun Learn Toy</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaGoogle className="text-yellow-300 text-xl"></FaGoogle></Link>
                    <Link><FaYoutube className="text-red-600 text-xl"></FaYoutube></Link>
                    <Link><FaFacebook className="text-blue-500 text-xl"></FaFacebook></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;