import { useEffect, useState } from "react";
import ToyGalleryCard from "./ToyGalleryCard";

const ToyGallery = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-orange-500 mb-8">Toys Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28">
                {
                    allToys.map(toys => <ToyGalleryCard
                    key={toys._id}
                    toys={toys}
                    ></ToyGalleryCard>)
                }
            </div>
        </div>
    );
};

export default ToyGallery;