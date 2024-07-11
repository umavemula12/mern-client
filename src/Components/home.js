import { useState } from "react"

export default function Home(){
    const [name, setName] = useState("");
    const [ShowName, SetShowName] = useState("");
    const handleChange=(e)=>{
        setName(e.target.value);
    };
    const handleButton=(e)=>{
        SetShowName(`Welcome, ${name}`);
    };

    return(
        <div>
            <input type="text" placeholder="Enter Name" value={name} onChange={handleChange} />

            <button className="bg-blue border border-3 w-20" onClick={handleButton}>Submit</button>
            <p>{ShowName}</p>
        </div>
    );
}