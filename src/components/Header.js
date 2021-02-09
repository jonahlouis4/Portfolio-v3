import React from 'react'
import './Header.css'

import { MenuOutlined } from '@ant-design/icons'
import logo from '../images/logo_home.jpg'


const navContainer = {
    width: '100%',
    display: 'inline-block',
    margin: '0 auto',
    boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.1), 0 0 12px 0 rgba(0, 0, 0, 0.1)',
    padding: '0',
}

const sectionContainer = {
    float: 'right',
    fontWeight: "500",
}

const homeLink = { 
    float: 'left',
    margin: '0',
    padding: '0',
}

const menuIcon = {
    fontSize: '25px',
    marginTop: '22px'
}

const sections = {
    fontSize: '16px',
    fontWeight: '100',
    marginTop: '22px',
}

const Header = ({isOpen, sideNavControl, sectionName, sectionLink}) => {
    /** Sets isOpen useState to true */
    const navControl = () => {
        var open = isOpen;
        open = true;
        sideNavControl(open);
    }

    return (
        <div 
        style={navContainer}
        >
            <div 
            className="nav"
            >
                <a href="/" style={homeLink}><img src={logo} width='70'/></a>
                <div
                style={sectionContainer}
                >
                    <a href={'#'+sectionLink.section1} style={sections} className="section-sections sLink">{sectionName.section1}</a>
                    <a href={'#'+sectionLink.section2} style={sections} className="section-sections sLink">{sectionName.section2}</a>
                    <a href={'#'+sectionLink.section3} style={sections} className="section-sections sLink">{sectionName.section3}</a>
                    <MenuOutlined style={menuIcon} className="section-menu" onClick={navControl}/>                 
                </div>
            </div>
        </div>
    )
}

export default Header
