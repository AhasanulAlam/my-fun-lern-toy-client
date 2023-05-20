import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FunLearnLab = () => {
    return (
        <>
            <div className="mb-32">
                <h2 className="text-3xl text-center font-bold text-orange-500 mb-8">Fun Learn Lab</h2>
                <div className="flex flex-col justify-between md:flex-row gap-4">
                    <div data-aos="fade-down-right" className="card w-96 bg-green-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Math Fun Lab</h2>
                            <p>Develop logical and mathematical fun session by NLP trainer.</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-secondary">View Details</button>
                            </div>
                        </div>

                    </div>
                    <div data-aos="flip-left" className="card w-96 bg-yellow-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/7750703/pexels-photo-7750703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Science Fun Lab</h2>
                            <p>Kid-led discovery that builds confidence & scientific imagination.</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-secondary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className="card w-96 bg-blue-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Language Fun Lab</h2>
                            <p>Develop effective communication fun session by NLP trainer.</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-secondary">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FunLearnLab;