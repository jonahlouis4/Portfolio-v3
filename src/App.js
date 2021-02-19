import { useState } from 'react'
import './App.less'

import { BackTop, Button, Popover } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

const backTopBtnStyle = {
  backgroundColor: '#434343',
  color: 'white'
}

function App() {
  /** Contains the section names for the navigation */
  const [sectionName] = useState({section1: "Projects", section2: "Skills", section3: "Resume"})
  /** Contains the sections links for the navigation */
  const [sectionLink] = useState({section1: "project-section", section2: "skill-section"})
  /** Determines wether the side navigation is opened (isOpen = true), or closed (isOpen = false) */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Sets the useState "isOpen"
   * @param {boolean} isOpen - Either true for open or false for close
   */
  const sideNavControl = (isOpen) => {
    var content = document.getElementsByClassName("body-content");

    setIsOpen(isOpen);

    if (isOpen) { content[0].style.filter = "blur(5px)"; }
    else { content[0].style.filter = "blur(0px)"; } 
  }

  return (
    <>
      <SideNav isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} sectionLink={sectionLink}/>
      <div
      className="body-content"
      >
        <Header isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} sectionLink={sectionLink}/>
        {/* Section - Introduction */}
        <div className="container">
          <Introduction />
        </div>
        {/* Section - Projects */}
        <div className="container-bg-1" id={sectionLink.section1}>
          <div className="container">
            <Projects />
          </div>
        </div>
        {/* Section - Technologies */}
        <div className="container" id={sectionLink.section2}>
          <Technologies />
        </div>
        {/* Footer */}
        <div className="container-bg-2">
          <div className="container">
            <Footer />
          </div>
        </div>
        {/* Back to top button */}
        <BackTop>
          <Popover 
          content="Return to the top!"
          trigger="hover"
          >
            <Button icon={<ArrowUpOutlined />} shape="circle" style={backTopBtnStyle} />
          </Popover>
        </BackTop>
      </div>

    </>
  );
}

export default App;
