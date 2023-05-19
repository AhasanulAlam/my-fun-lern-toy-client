import { Link, useLoaderData } from "react-router-dom";


const SingleToy = () => {
    const toy = useLoaderData();
    const { _id,  name, price, picture_url, available_quantity, seller_name, description  } = toy;

    return (
        <div>
            <h2>This is the detail of the toy: {name}</h2>
            <div className="card card-side bg-base-100 shadow-xl">
            <div className="flex p-4 ">
            <figure><img src={picture_url} alt="toy Image" className="rounded-xl w-96" /></figure>
            </div>
            <div className="card-body">
                <div className="text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-orange-600">Price: $ {price}</p>
                    <p className="text-orange-600">In stock: {available_quantity}</p>
                    <p className="text-gray-400">Seller Name: {seller_name}</p>
                    <p className="text-gray-400 mt-2">Details: {description}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SingleToy;