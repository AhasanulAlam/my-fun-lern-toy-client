
const MyToyRow = ({ myToy }) => {
    const { picture_url, name, price, available_quantity } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyToyRow;