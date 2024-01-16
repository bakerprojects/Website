import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

function City({ city, onEdit, onDelete }) {
    return (
        <tr>
            <td>{city.name}</td>
            <td>{city.dateAdded.slice(0,10)}</td>
            <td>{city.priorityLevel}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin5Line onClick={() => onDelete(city._id)} /></td>
            <td><BiSolidEdit onClick={() => onEdit(city)} /></td>
        </tr>
    );
}

export default City;