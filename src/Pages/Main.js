import React from 'react';
import './CSS/Main.css'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';


import Section01 from './MComponent/Section01'
import Section02 from "./MComponent/Section02";
import Section03 from "./MComponent/Section03";
import Section04 from "./MComponent/Section04";
import Section05 from "./MComponent/Section05";
import Section06 from "./MComponent/Section06";
import Section07 from "./MComponent/Section07";
import Footer from './components/footer'



function MainPage() {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',

  }
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections className="MBody">
        <FullpageSection style={SectionStyle}>
          <Section01 />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Section02 />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Section03 />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Section04 />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Section05 />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Section06 />
          <Footer />
        </FullpageSection>

        <Footer />
      </FullPageSections>
    </Fullpage>
  );
};

export default MainPage;