import React, { Component } from 'react';
import './Mumtahin2.css';
export default function Hogsozzle() {
    return (
        <div className='hogsozzle'>
            <h1> Hogsozzle Festival</h1>
            <div className='description'>
                <p>This is where the description of your festival will go.
                    You can write about what visitors can expect,
                    why they should be excited and how to prepare.
                </p>
            </div>

            <div className='venue'>
                <div className='date'></div>
                <div className='place'></div>
                <div className='map-link'></div>
            </div>
            
            <div className='access-info'></div>
            <div className='ticket-info'></div>
            <div className='weather-app'></div>
        </div>
    )
}