import React from 'react'
import './SideNav.css'

import Typography from 'antd/lib/typography'
import Button from 'antd/lib/button'
import CloseOutlined from '@ant-design/icons/CloseOutlined'

const { Text } = Typography;

const sideNavStyle = {
    height: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    right: '0',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    whiteSpace: 'nowrap'
}

const closeBtn = {
    position: 'absolute',
    padding: '5px',
    top: '0',
    left: '0',
    color: '#818181'
}

/**
 * Side navigation for smaller and mobile view
 * Reference: https://www.w3schools.com/howto/howto_js_sidenav.asp
 * @param {boolean} isOpen - State of side navigation. Either true or false.
 * @param {function} sideNavControl - Closes the side navigation
 * @param {object} sectionName - Contains all section names
 */
const SideNav = ({isOpen, sideNavControl, sectionName, sectionLink}) => {
    /** Holds the classname for when the navigation is OPEN */
    const navOpenClass = "sideNav-open";
    /** Holds the classname for when the navigation is CLOSED */
    const navCloseClass = "sideNav-close";
    
    /** Closes the side navigation */
    const navControl = () => {
        var open = isOpen;
        open = false;
        sideNavControl(open);

        document.body.style.overflow = "auto";
    }

    return (
        <div style={sideNavStyle} className={isOpen ? navOpenClass : navCloseClass}>
            <a><CloseOutlined style={closeBtn} onClick={navControl} className="options"/></a>
            <a href={'#'+sectionLink.section1}><Text type="secondary" className="options">{sectionName.section1}</Text></a>
            <a href={'#'+sectionLink.section2}><Text type="secondary" className="options">{sectionName.section2}</Text></a>
            <Button id="option-btn" size="large">{sectionName.section3}</Button>
        </div>
    )
}

export default SideNav
