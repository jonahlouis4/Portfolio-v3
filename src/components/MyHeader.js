import React from 'react'
import Resume from '../files/Jonah_Louis_Resume.pdf'
import Button from 'antd/lib/button'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
import logo from '../images/_Logo.svg'

/**
 * Header component for the website
 * @param {boolean} isOpen - State of side navigation. Either true or false.
 * @param {function} sideNavControl - Closes the side navigation
 * @param {string} sectionName - Contains the section's name
 * @param {string} sectionLink - Contains the section's link
 */
const MyHeader = ({isOpen, sideNavControl, sectionName, sectionLink}) => {
    /** Sets isOpen useState to true */
    const navControl = () => {
        var open = isOpen;
        open = true;
        sideNavControl(open);

        document.body.style.overflow = "hidden";
    }

    return (
        <div 
        className="container nav-container"
        >
            {/* logo */}
            <a href="/" className="home-icon">
                <img src={logo} width='40' alt="Jonah's logo"/>
            </a>
            {/* Hamburger */}
            <MenuOutlined style={{float:'right'}} className="section-menu menu-icon" onClick={navControl}/>
            {/* Resume btn */}
            <a style={{float:'right'}} className="section-link" href={Resume} target="_blank" rel='noopener noreferrer'>
                <Button type="primary">{ sectionName.section3 }</Button>
            </a>
            {/* Sections */}
            <div style={{float:'right'}}>
                {/* Section 2 */}
                <a href={'#'+sectionLink.section2} className="section-link header-sections">
                    { sectionName.section2 }
                </a>
                {/* Section 1 */}
                <a href={'#'+sectionLink.section1} className="section-link header-sections">
                    { sectionName.section1 }
                </a>
                {/* Section 0 */}
                <a href={'#'+sectionLink.section0} className="section-link header-sections">
                    { sectionName.section0 }
                </a>
            </div>
        </div>
    )
}

export default MyHeader
