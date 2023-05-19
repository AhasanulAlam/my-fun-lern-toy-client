import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ToyGalleryCard = ({toys}) => {
    const {picture_url} = toys;
    return (
        <div data-aos="zoom-in" >
            <div className="card card-compact w-96 bg-base-900 shadow-xl">
                <div className="card-body">
                <figure className="rounded-2xl"><img className="h-80" src={picture_url} alt="toy Picture"/></figure>
                 </div>
            </div>

        </div>
    );
};

export default ToyGalleryCard;