import Lottie from "lottie-react";
import loginPic from '../../assets/loginPic.json';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Google User Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={loginPic} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="my-4 tex-center">New to FunLearnToy? <Link className="text-orange-600 font-semibold" to="/signup" >Sign Up</Link> </p>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-center items-center my-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"> <span><FaGoogle className="text-green-400 text-3xl mr-4"> </FaGoogle></span> Google Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;