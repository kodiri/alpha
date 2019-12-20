import React, { useState } from 'react';
import './location.css';

export default function Location() {
    let [postcode, setPostcode] = useState("");
    function handlePostcodeChange(e) {
        setPostcode(e.target.value);
        localStorage.setItem("postcode", e.target.value)
    }
    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }


    return (
        <div className='post-code'>
            <div className='inner-loc'>
                <label>Add postcode of your event: </label>
                <input className='loc' type="text" onChange={handlePostcodeChange} />
                <label>Add details about getting to your venue: </label>
                <input className='loc' type="text" onChange={accessDetails} />
                <textarea className='loc' placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc"></textarea>
            </div>
        </div>
    )
}