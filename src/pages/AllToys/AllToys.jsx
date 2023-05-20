import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    const handleSearch = () => {
        //client search handle 
        fetch(`http://localhost:5000/searchToysByName?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            });
    }

    return (
        <div className="mb-12">
            <div className="text-center text-3xl mb-12">
                <div>
                    <input type="text" onChange={(event) => setSearchText(event.target.value)} placeholder="search by name.." className="input input-bordered input-warning w-full max-w-xs" />
                    {/* <input type="submit" value="search" className="btn btn-outline btn-warning ml-4" /> */}
                    <button onClick={handleSearch} className="btn btn-outline btn-warning ml-4">Search</button>
                </div>
            </div>
            <h2 className="text-3xl text-center font-bold text-orange-500">All Available Toys: {allToys.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allToys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;