import React from 'react'
import Resume from '../files/Jonah_Louis_Resume.pdf'

import { motion } from "framer-motion"
import Menu from 'antd/lib/menu'
import Button from 'antd/lib/button'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
import logo from '../images/_Logo.svg'

// Variants
const contVariant = {
    visible: { 
        opacity: 1, y: 0, 
        transition: { duration:0.5, when:"beforeChildren", staggerChildren:0.2 }, 
    },
    hidden: { opacity: 0, y: -100 },
}

const sectionVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -50 }
}

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
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={contVariant}
        className="container nav-container"
        >
            <Menu mode="horizontal" >
                {/* logo */}
                <motion.a href="/" className="home-icon" variants={sectionVariant}>
                    <img src={logo} width='40' alt="Jonah's logo"/>
                    </motion.a>
                {/* Hamburger */}
                <MenuOutlined style={{float:'right'}} className="section-menu menu-icon" onClick={navControl}/>
                {/* Resume btn */}
                <motion.a style={{float:'right'}} className="section-link" variants={sectionVariant} href={Resume} target="_blank" rel='noopener noreferrer'>
                    <Button>{ sectionName.section3 }</Button>
                </motion.a>
                {/* Section 2 */}
                <Menu.Item key="2" style={{float:'right'}} className="section-link">
                    <motion.a variants={sectionVariant} href={'#'+sectionLink.section2}>{ sectionName.section2 }</motion.a>
                    </Menu.Item>
                {/* Section 1 */}
                <Menu.Item key="3" style={{float:'right'}} className="section-link">
                    <motion.a variants={sectionVariant} href={'#'+sectionLink.section1}>{ sectionName.section1 }</motion.a>
                </Menu.Item>
            </Menu>
        </motion.div>
    )
}

export default MyHeader
