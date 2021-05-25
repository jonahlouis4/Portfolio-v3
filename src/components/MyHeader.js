import React from 'react'
import Resume from '../files/Jonah_Louis_Resume.pdf'

import { motion } from "framer-motion"
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
            <motion.a href="/" className="home-icon" variants={sectionVariant}><img src={logo} width='40' alt="Jonah's logo"/></motion.a>
            <div
            className="section-container"
            >
                {/* Hamburger */}
                <motion.div
                
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                >
                    <MenuOutlined className="section-menu menu-icon" onClick={navControl}/>
                </motion.div>   
                {/* Section 1 */}
                <motion.a
                href={'#'+sectionLink.section1} 
                className="section-link section"
                variants={sectionVariant} 
                >
                    {sectionName.section1}
                </motion.a>
                {/* Section 2 */}
                <motion.a 
                href={'#'+sectionLink.section2} 
                className="section-link section" 
                variants={sectionVariant} 
                >
                    {sectionName.section2}
                </motion.a>
                {/* Resume btn */}
                <motion.div
                variants={sectionVariant} 
                style={{display: 'inline-block'}}
                >
                    <a href={Resume} target="_blank" rel='noopener noreferrer'>
                        <Button id="resume-btn-nav" className="section-link" type="primary">{sectionName.section3}</Button>
                    </a>
                    
                </motion.div>          
            </div>
        </motion.div>
    )
}

export default MyHeader
