import React from 'react'
import './FestivalInfo.css'

export default class FestivalInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            festivalName: 'Hogsozzle Festival'
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.festivalName}</h1>
                <div>
                    <p>Performing arts and music festival<br /> Bulgaria <br />
                        June 4-7 2020
                </p>
                </div>
            </>
        )
    };
}