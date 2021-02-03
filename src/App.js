import { useState } from 'react'
import './App.less'

import Header from './components/Header'
import SideNav from './components/SideNav'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

function App() {
  /** Contains the section names for the navigation */
  const [sectionName] = useState({section1: "Projects", section2: "Section 2", section3: "Section 3"})
  /** Determines wether the side navigation is opened (isOpen = true), or closed (isOpen = false) */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Sets the useState "isOpen"
   * @param {boolean} isOpen - Either true for open or false for close
   */
  const sideNavControl = (isOpen) => {
    setIsOpen(isOpen);
  }

  return (
    <>
      <SideNav isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} />
      <Header isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} />
      {/* Section - Introduction */}
      <div 
      className="container"
      >
        <Introduction />
      </div>
      {/* Section - Projects */}
      <div 
      className="container-bg"
      >
        <div 
        className="container container-cnt"
        >
          <Projects />
        </div>
      </div>

    </>
  );
}

export default App;
