import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";

export const EditCityPageTable = ({ cityToEdit }) => {
 
    const [name, setName]       = useState(cityToEdit.name);
    const [dateAdded, setdateAdded]         = useState(cityToEdit.dateAdded);
    const [priorityLevel, setpriorityLevel] = useState(cityToEdit.priorityLevel);
    
    const redirect = useNavigate();

    const editCity = async () => {
        const response = await fetch(`/cities/${cityToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                dateAdded: dateAdded, 
                priorityLevel: priorityLevel
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Changes Successfully Made!`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to make changes, please check information being edited ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a city</h2>
            <p>Paragraph about this page.</p>
            <table id="cities">
                <caption>Edit City Info</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date Added</th>
                        <th>Priority Level</th>
                        <th><BiSolidEdit /></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">City Name</label>
                        <input
                            type="text"
                            placeholder="Name of the city"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="dateAdded">Date Added</label>
                        <input
                            type="date"
                            value={dateAdded}
                            placeholder="Date city was added"
                            onChange={e => setdateAdded(e.target.value)} 
                            id="dateAdded" />
                    </td>

                    <td><label for="priorityLevel">Priority Level</label>
                        <input
                            type="number"
                            placeholder="Priority level of visiting"
                            value={priorityLevel}
                            onChange={e => setpriorityLevel(e.target.value)} 
                            id="priorityLevel" />
                    </td>

                    <td>
                    <label for="submit">Finish</label>
                        <button
                            type="submit"
                            onClick={editCity}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditCityPageTable;