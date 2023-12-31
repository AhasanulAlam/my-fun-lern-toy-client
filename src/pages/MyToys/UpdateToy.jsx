import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateToy = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/mytoys';

    const toy = useLoaderData();
    const { _id, picture_url, name, seller_name, seller_email, sub_category, price, rating, available_quantity, description } = toy;

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture_url = form.picture_url.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const available_quantity = parseInt(form.available_quantity.value);
        const created_by = user.email;
        const description = form.description.value;

        const updateToy = {
            picture_url,
            name,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            available_quantity,
            created_by,
            description
        }
        // console.log(updateToy);

        fetch(`https://my-fun-lern-toy-server.vercel.app/mytoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    navigate(from, { replace: true });
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy has been updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateToy} >
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Update Toy: {name}</h1>

                                <div className='flex flex-row gap-4'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name="seller_name" defaultValue={seller_name} placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name="seller_email" defaultValue={seller_email} placeholder="email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>

                                    <div className='flex flex-col'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Name</span>
                                            </label>
                                            <input type="text" name='name' defaultValue={name} placeholder="toy name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Category</span>
                                            </label>
                                            <select name='sub_category'  defaultValue={sub_category} className="input input-bordered">
                                                <option>Select Toy Category</option>
                                                <option value="Math Toys">Math Toys</option>
                                                <option value="Science Toys">Science Toys</option>
                                                <option value="Language Toys">Language Toys</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy price</span>
                                            </label>
                                            <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Rating (1 to 5)</span>
                                            </label>
                                            <input type="number" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="number" name='available_quantity' defaultValue={available_quantity} placeholder="quantity" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Picture</span>
                                            </label>
                                            <input type="text" name='picture_url' defaultValue={picture_url} placeholder="photo URL" className="input input-bordered" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Details</span>
                                    </label>
                                    <textarea name="description" defaultValue={description} cols="60" rows="10" className="input input-bordered"></textarea>
                                </div>

                                <div className="form-control">
                                    <input type="email" name='created_by' defaultValue={user?.email} placeholder="email_User " className="input input-bordered" hidden />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Update Toy" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;