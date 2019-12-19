import React from 'react';

export default function Location() {

    function handlePostcodeChange(e) {
        localStorage.setItem("postcode", e.target.value)
    }

    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }

    return (
        <div className='locationFormPage'>
            <label>Add full event location: </label>
            <input type="text" onChange={handlePostcodeChange} placeholder='Address Line 1' />
            <input type="text" onChange={handlePostcodeChange}
                placeholder='Address Line 2' />
            <input type="text" onChange={handlePostcodeChange} placeholder='Address Line 3' />
            <label>Add details about getting to your venue: <br /></label>
            <textarea type="text" onChange={accessDetails} placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc" />
            <div className="containerLocation">
                <a href='/dashboard/123' className="item">Save and return to dashboard</a>
                <a href='/faqForm' className="item">Save and continue</a>
            </div>
        </div>
    )
}