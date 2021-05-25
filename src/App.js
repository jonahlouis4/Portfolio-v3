import { useState } from 'react'
import './App.less'

import Layout from 'antd/lib/layout';
import BackTop from 'antd/lib/back-top'
import Button from 'antd/lib/button'
import Popover  from 'antd/lib/popover'
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined'

import MyHeader from './components/MyHeader'
import SideNav from './components/SideNav'
import Introduction from './components/Introduction'
import Contribution from './components/Contribution'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import MyFooter from './components/MyFooter'

const { Header, Footer, Sider, Content } = Layout;

const backTopBtnStyle = {
  backgroundColor: '#434343',
  color: 'white'
}

function App() {
  /** Contains the section names for the navigation */
  const [sectionName] = useState({section0: "Contributions", section1: "Projects", section2: "Skills", section3: "Resume"})
  /** Contains the sections links for the navigation */
  const [sectionLink] = useState({section: "contribution-section", section1: "project-section", section2: "skill-section"})
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
    <Layout>
      <SideNav isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} sectionLink={sectionLink}/>
      <div
      className="body-content"
      >
        <Header>
          <MyHeader isOpen={isOpen} sideNavControl={sideNavControl} sectionName={sectionName} sectionLink={sectionLink}/>
        </Header>
        <Content>
          {/* Section - Introduction */}
          <div className="container-bg-0">
            <div
            className="container"
            >
              <Introduction />
            </div>
          </div>
          {/* Section - Contribution */}
          <div className="container-bg-1" id={sectionLink.section0}>
            <div className="container">
              <Contribution />
            </div>
          </div>
          {/* Section - Projects */}
          <div className="" id={sectionLink.section1}>
            <div className="container">
              <Projects />
            </div>
          </div>
          {/* Section - Technologies */}
          <div className="container" id={sectionLink.section2}>
            <Technologies />
          </div>
        </Content>
        <Footer className="container-bg-2">
          <div className="container">
            <MyFooter />
          </div>
        </Footer>
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
    </Layout>
  );
}

export default App;
