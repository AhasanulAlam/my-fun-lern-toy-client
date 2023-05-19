import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture_url = form.picture_url.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const created_by = user.email;
        const description = form.description.value;

        const newToy = {
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


        console.log(picture_url, name, seller_name, seller_email, sub_category,price, rating, available_quantity, created_by, description );
        console.log(newToy);

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddToy} >
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Add A New Toy</h1>

                                <div className='flex flex-row gap-4'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name="seller_name" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name="seller_email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>

                                    <div className='flex flex-col'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="toy name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Category</span>
                                            </label>
                                            <select name='sub_category' className="input input-bordered">
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
                                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Rating (1 to 5)</span>
                                            </label>
                                            <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="number" name='available_quantity' placeholder="quantity" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Picture</span>
                                            </label>
                                            <input type="text" name='picture_url' placeholder="photo URL" className="input input-bordered" required />
                                        </div>
                                    </div>
                                </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Toy Details</span>
                                        </label>
                                        <textarea name="description" id="description" cols="60" rows="10" className="input input-bordered"></textarea>
                                    </div>

                                <div className="form-control">
                                    <input type="email" name='created_by' defaultValue={user?.email} placeholder="email_User " className="input input-bordered" hidden />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;