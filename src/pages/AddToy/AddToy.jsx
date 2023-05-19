import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const createdBy = user.email;
        const description = form.description.value;


        console.log(pictureUrl, name, sellerName, sellerEmail, category,price, rating, availableQuantity, createdBy, description );

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
                                        <input type="text" name="sellerName" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name="sellerEmail" placeholder="email" className="input input-bordered" required />
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
                                            <select name='category' className="input input-bordered">
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
                                            <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Rating</span>
                                            </label>
                                            <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="number" name='availableQuantity' placeholder="rating" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Toy Picture</span>
                                            </label>
                                            <input type="text" name='pictureUrl' placeholder="photo URL" className="input input-bordered" required />
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
                                    <input type="email" name='createdBy' defaultValue={user?.email} placeholder="email_User " className="input input-bordered" hidden />
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