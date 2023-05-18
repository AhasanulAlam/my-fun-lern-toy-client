import { FaBattleNet, FaGg, FaHubspot } from "react-icons/fa";

const HowToBuy = () => {
    return (
        <div className="">
            <h2 className="text-3xl text-center font-bold text-orange-500 mb-8">How to Buy?</h2>
            <div className="flex flex-col justify-between md:flex-row gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaBattleNet className="text-blue-400 text-8xl"></FaBattleNet>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose a Toy</h2>
                        <p>Pick from over 1,000 of the latest must haves.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaHubspot className="text-green-400 text-8xl"></FaHubspot>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Make Play & Learn</h2>
                        <p>Kid-led discovery that builds confidence & sports imagination.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaGg className="text-orange-600 text-8xl"></FaGg>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Swap & Repeat</h2>
                        <p>Return any unloved toy and swap it for something else.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;