import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {

    const { _id, name, price, picture_url, available_quantity, description, rating } = toy;

    return (
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <div className="flex p-4 ">
                <figure><img src={picture_url} alt="toy Image" className="rounded-xl md:w-96" /></figure>
            </div>
            <div className="card-body">
                <div className="text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-orange-600">Price: $ {price}</p>
                    <p className="text-orange-600">In stock: {available_quantity}</p>
                    <p className="text-orange-600">Rating: {rating}</p>
                    <p className="text-gray-400 mt-2">Toy Details: {description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;