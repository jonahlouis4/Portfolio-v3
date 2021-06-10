import React from 'react'
import Resume from '../files/Jonah_Louis_Resume.pdf'
import Menu from 'antd/lib/menu'
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
            <Menu mode="horizontal" >
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
                {/* Section 2 */}
                <Menu.Item key="2" style={{float:'right'}} className="section-link">
                    <a  href={'#'+sectionLink.section2}>{ sectionName.section2 }</a>
                    </Menu.Item>
                {/* Section 1 */}
                <Menu.Item key="3" style={{float:'right'}} className="section-link">
                    <a href={'#'+sectionLink.section1}>{ sectionName.section1 }</a>
                </Menu.Item>
                {/* Section 0 */}
                <Menu.Item key="4" style={{float:'right'}} className="section-link">
                    <a href={'#'+sectionLink.section0}>{ sectionName.section0 }</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default MyHeader
