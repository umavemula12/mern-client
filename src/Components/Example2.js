import React, { useState } from "react";

export default function Example() {
    const [formData, setFormData] = useState({
        time: "",
        note: ""
    });
    const [tableData, setTableData] = useState([]);

    function handleForm(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit() {
        setTableData([...tableData, formData]);
        setFormData({ time: "", note: "" });
    }

    function deleteNote(index) {
        const updatedData = [...tableData];
        updatedData.splice(index, 1);
        setTableData(updatedData);
    }

    function Action({ index }) {
        return (
            <button onClick={() => deleteNote(index)}>
                Delete
            </button>
        );
    }

    return (
        <div>
            <div className="form">
                <input
                    name="note"
                    type="text"
                    placeholder="Enter Note"
                    value={formData.note}
                    onChange={handleForm}
                />
                
                <button onClick={handleSubmit}>Submit</button>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.note}</td>
                                <td><Action index={index} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
