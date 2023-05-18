import Lottie from "lottie-react";
import loginPic from '../../assets/loginPic.json';

const Login = () => {
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        

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
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;