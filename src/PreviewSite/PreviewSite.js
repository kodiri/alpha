import React from 'react';
import './PreviewSite.css'
import NavBar from './NavBar/NavBar'
import FestivalInfo from './FestivalInfo/FestivalInfo'
// import hogsozzle1 from '../images/hogsozzle-img.jpg';
// import hogsozzle from '../../images/Logos/hogsozzle.png';
// import FAQ from '../../images/Logos/faq.png';
import Faq from '../images/faq.jpg'
import Tickets from './Tickets/Tickets'
import Location from './Location/Location'
import Connect from './Connect/Connect'


export default class PreviewSite extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {}
    }

    render () {
        return (
        <>
        <div className='hogsozzle'>
           <NavBar/>
           <FestivalInfo/>
           <Tickets/>
           <Location/>
           <Faq/>
           <Connect/>
           </div>
        </>
        );
    }
}
    