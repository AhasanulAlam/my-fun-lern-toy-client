import { Link, NavLink } from "react-router-dom";
import { FaBattleNet } from 'react-icons/fa';


const NavBar = () => {
    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
        <li><NavLink to="/alltoys" className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toys</NavLink></li>
        <li><NavLink to="/mytoys" className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toys</NavLink></li>
        <li><NavLink to="/addToy" className={({ isActive }) => (isActive ? 'active' : 'default')}>Add A Toys</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <p className="flex items-center">
                        <span><FaBattleNet className="text-3xl text-orange-500"></FaBattleNet> </span>
                        <span> <span className="text-orange-400 text-3xl">F</span>un<span className="text-orange-400 text-3xl">L</span>earn<span className="text-orange-400 text-3xl">T</span>oy</span>
                    </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to='/login'><button className="btn btn-outline btn-info">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;