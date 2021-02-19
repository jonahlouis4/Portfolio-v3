import React from 'react'
import './Header.css'

import { motion } from "framer-motion"
import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import logo from '../images/logo_home.jpg'

// Styles
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
    marginTop: '2px'
}

const sections = {
    fontSize: '16px',
    fontWeight: '100',
    marginTop: '20px',
}

const sectionBtn = {
    marginTop: '20px',
}

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

const menuVariant = {
    visible: { 
        opacity: 1, scale: [1,1.5,1.5,1,1], rotate: [0,0,270,270,0],
        transition: { duration: 2 },    
    },
    hidden: { opacity: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
}

/**
 * Header component for the website
 * @param {boolean} isOpen - State of side navigation. Either true or false.
 * @param {function} sideNavControl - Closes the side navigation
 * @param {string} sectionName - Contains the section's name
 * @param {string} sectionLink - Contains the section's link
 */
const Header = ({isOpen, sideNavControl, sectionName, sectionLink}) => {
    /** Sets isOpen useState to true */
    const navControl = () => {
        var open = isOpen;
        open = true;
        sideNavControl(open);

        document.body.style.overflow = "hidden";
    }

    return (
        <motion.div 
        style={navContainer}
        initial="hidden"
        animate="visible"
        variants={contVariant}
        >
            <div 
            className="nav"
            >
                <motion.a href="/" style={homeLink} variants={sectionVariant}><img src={logo} width='70' alt=""/></motion.a>
                <div
                style={sectionContainer}
                >
                    <motion.a
                    href={'#'+sectionLink.section1} 
                    style={sections} 
                    className="section-sections sLink"
                    variants={sectionVariant} 
                    >
                        {sectionName.section1}
                    </motion.a>
                    <motion.a 
                    href={'#'+sectionLink.section2} 
                    style={sections} 
                    className="section-sections sLink" 
                    variants={sectionVariant} 
                    >
                        {sectionName.section2}
                    </motion.a>
                    <motion.div
                    variants={sectionVariant} 
                    style={{display: 'inline-block'}}
                    >
                        <Button style={sectionBtn} className="section-sections sLink" >{sectionName.section3}</Button>
                    </motion.div>
                    <motion.div
                    variants={menuVariant} 
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    >
                        <MenuOutlined style={menuIcon} className="section-menu" onClick={navControl}/>
                    </motion.div>             
                </div>
            </div>
        </motion.div>
    )
}

export default Header
