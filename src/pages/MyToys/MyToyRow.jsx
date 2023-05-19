

const MyToyRow = ({ myToy, handleDelete, handleEditToy }) => {
    const { _id, picture_url, name, price, available_quantity } = myToy;

    


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded w-24 h-24">
                        {picture_url && <img src={picture_url} alt="Toy Picture" />}
                    </div>
                </div>
            </td>
            <td> {name} </td>
            <td> ${price} </td>
            <td>{available_quantity}</td>
            <th>
                <button onClick={() => handleEditToy(_id)} className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default MyToyRow;