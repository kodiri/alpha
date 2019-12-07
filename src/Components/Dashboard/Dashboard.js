import React from 'react';
import './Dashboard.css';
import contact from './icons/contact.png';
import faq from './icons/FAQ.png';
import info from './icons/info.png';
import location from './icons/location.png';
import ticket from './icons/ticket.png';

let dashboardItems = [
    {
        id: 'location',
        link: '',
        title: 'Location',
        icon: location,
    }, {
        id: 'info',
        link: '',
        title: 'Basic Info',
        icon: info,
    },
    {
        id: 'contact',
        link: '',
        title: 'Contact',
        icon: contact,
    },
    {
        id: 'FAQ',
        link: '',
        title: 'FAQ\'s',
        icon: faq,
    },
    {
        id: 'ticket',
        link: '',
        title: 'Tickets',
        icon: ticket,
    },
];

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    dashboardComponents = () => {
        return dashboardItems.map(({ id, link, title, icon }) => {
            return (
                <div className='itemDash' key={icon}>
                    <a href={link} className='aDashboard'>
                        <img src={icon} alt={id} className='dashboardIcon' />
                        {title}
                    </a>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <main className='dashboardPage'>

                    <h1>Welcome UserName</h1>

                    <div className='dashboardContainer'>
                        <div className='buttonContainer'>
                            {this.dashboardComponents()}
                        </div>
                        <a href='/PreviewSite' className='aDashboard'>
                            <button className='previewDash'>Preview my site
                            </button>
                        </a>
                    </div>
                </main>
            </>
        );
    }
}

export default Dashboard;