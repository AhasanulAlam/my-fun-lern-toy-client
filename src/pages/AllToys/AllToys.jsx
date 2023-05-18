import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('toysData.json')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    return (
        <div>
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