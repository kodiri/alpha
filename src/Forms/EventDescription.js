import React from 'react';
import './eventdes.css'

export default function EventDescription() {
    return( 
        <>
        <h1>Tell us some more about your event!</h1>
        <form>
        <label>Event Details: (Don't worry, you can come back to this later!)</label>
        <textarea placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there!"></textarea>
        <label>Start Date:</label><input type="date"/>
        <label>Start Time:</label><input type="time"/>
        <label>End Date:</label><input type="date"/>
        <label>End Time:</label><input type="time"/>
        </form>
        <button className="item">Continue</button>
        </>
    )
}