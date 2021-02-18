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
    marginTop: '22px'
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
        transition: { duration:0.7, when:"beforeChildren", staggerChildren:0.2 }, 
    },
    hidden: { opacity: 0, y: -100 },
}

const sectionVariant = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
}

const menuVariant = {
    visible: { 
        opacity: 1, scale: [1,1.5,1.5,1,1], rotate: [0,0,270,270,0],
        transition: { duration: 2 },    
    },
    hidden: { opacity: 0 }
}

const Header = ({isOpen, sideNavControl, sectionName, sectionLink}) => {
    /** Sets isOpen useState to true */
    const navControl = () => {
        var open = isOpen;
        open = true;
        sideNavControl(open);
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
                <motion.a href="/" style={homeLink} variants={sectionVariant}><img src={logo} width='70' /></motion.a>
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
                    <motion.a
                    variants={sectionVariant} 
                    >
                        <Button style={sectionBtn} className="section-sections sLink" >{sectionName.section3}</Button>
                    </motion.a>
                    <motion.div
                    variants={menuVariant} 
                    >
                        <MenuOutlined style={menuIcon} className="section-menu" onClick={navControl}/>
                    </motion.div>             
                </div>
            </div>
        </motion.div>
    )
}

export default Header
