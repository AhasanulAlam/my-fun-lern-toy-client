import Lottie from "lottie-react";
import gamingBannerPuzzle from '../../../assets/48441-puzzzle.json';
import bannerPic from '../../../assets/yoga-gestures-3d-illustration.jpg';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row h-[500px] mb-28">
            <div style={{ backgroundImage: `url(${bannerPic})` }} className="carousel mr-4 md:w-1/2 rounded-2xl">
                <Lottie animationData={gamingBannerPuzzle} loop={true} />
            </div>
            <div className="carousel md:w-1/2 rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1663089920014-4ff29cd209f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=888&q=80" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-20 w-3/4 ">
                            <h2 className="text-4xl">The Toy develops your Brain</h2>
                            <p>The toy develops your kids memory and the cognitive power.</p>
                            <div>
                                <button className="btn btn-primary mr-5">Learn More</button>
                                <button className="btn btn-outline btn-primary">Available Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-20 w-3/4 ">
                            <h2 className="text-4xl">The Toy develops your Brain</h2>
                            <p>The toy develops your kids memory and the cognitive power.</p>
                            <div>
                                <button className="btn btn-primary mr-5">Learn More</button>
                                <button className="btn btn-outline btn-primary">Available Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1682124248572-9a66501bb647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-20 w-3/4 ">
                            <h2 className="text-4xl">The Toy develops your Brain</h2>
                            <p>The toy develops your kids memory and the cognitive power.</p>
                            <div>
                                <button className="btn btn-primary mr-5">Learn More</button>
                                <button className="btn btn-outline btn-primary">Available Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1682089686403-969cb8c7da44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-20 w-3/4 ">
                            <h2 className="text-4xl">The Toy develops your Brain</h2>
                            <p>The toy develops your kids memory and the cognitive power.</p>
                            <div>
                                <button className="btn btn-primary mr-5">Learn More</button>
                                <button className="btn btn-outline btn-primary">Available Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;