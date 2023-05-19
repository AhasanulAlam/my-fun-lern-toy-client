import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ToyCard = ({ toy }) => {
    const { _id, name, price, picture_url, available_quantity } = toy;
    return (
        <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture_url} alt="toy Image" className="rounded-xl h-56" />
            </figure>
            <div className="card-body items-center text-center flex flex-row justify-between">
                <div className="text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-orange-600">Price: $ {price}</p>
                    <p className="text-orange-600">In stock: {available_quantity}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;