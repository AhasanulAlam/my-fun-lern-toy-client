import { Link, NavLink } from "react-router-dom";
import { FaBattleNet } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Log Out successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
        <li><NavLink to="/alltoys" className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toys</NavLink></li>
        {
            user?.email && <>
                <li><NavLink to="/mytoys" className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toys</NavLink></li>
                <li><NavLink to="/addToy" className={({ isActive }) => (isActive ? 'active' : 'default')}>Add A Toys</NavLink></li>
            </>
        }
        <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4 shadow-2xl rounded-2xl">
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
                {
                    user?.email ?
                        <>
                            <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <img className="w-12 rounded-full" src={user.photoURL} alt='Profile' title={user.displayName} />
                            </div>
                            <button onClick={handleLogOut} className="ml-4 btn btn-outline btn-info">Logout</button>
                        </>

                        : <Link to='/login'><button className="btn btn-outline btn-info">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;