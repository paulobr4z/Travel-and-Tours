import React, { useEffect } from 'react';
import { FirstSection } from '../../components/FirstSection';
import { Footer } from '../../components/Footer';

import imgAbout from '../../assets/img/about-001.jpg';
import imgProfile001 from '../../assets/img/profile-001.jpg';
import imgProfile002 from '../../assets/img/profile-002.jpg';
import imgProfile003 from '../../assets/img/profile-003.jpg';
import imgProfile004 from '../../assets/img/profile-004.jpg';
import imgProfile005 from '../../assets/img/profile-005.jpg';
import imgProfile006 from '../../assets/img/profile-006.jpg';

import {
  AboutContainer,
  AboutWrapper,
  TeamContainer,
  TeamWrapper,
  ProfileWrapper,
  Profile,
  AboutTitle,
} from './styles';


const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About | Travel & Tours';
  });
  return (
    <>
      <FirstSection
        title='About'
        srcImage='https://raw.githubusercontent.com/paulobr4z/Travel-and-Tours/master/src/assets/img/about.jpg'
      />

      <AboutContainer>
        <AboutTitle>
          <h1>Welcome to Travel &amp; Tours</h1>
        </AboutTitle>
        <AboutWrapper>
          <div className="imgContainer">
            <img src={imgAbout} alt=""/>
          </div>
          <div className="content">
            <h1>Travel &amp; Tours</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is
              dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown
              typesetter in the 15th century who is thought to have
              scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p>The passage experienced a surge in popularity during
              the 1960s when Letraset used it on their dry-transfer
              sheets, and again during the 90s as desktop publishers
              bundled the text with their software.
            </p>
            <button>Learn More</button>          
          </div>
        </AboutWrapper>
      </AboutContainer>
      <TeamContainer>
        <TeamWrapper>
          <h1>Team</h1>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is
            dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown
            typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <ProfileWrapper>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile001} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>CEO, CO-FOUNDER</p>
              <h2>Klaus Mathea</h2>
            </div>
          </Profile>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile002} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>CTO, CO-FOUNDER</p>
              <h2>Mirella Whitney</h2>
            </div>
          </Profile>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile003} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>CHIEF OPERATING OFFICER</p>
              <h2>Gioacchino Giano</h2>
            </div>
          </Profile>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile004} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>CHIEF OPERATING OFFICER</p>
              <h2>Sango Seward</h2>
            </div>
          </Profile>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile005} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>CHIEF FINANCIAL OFFICER</p>
              <h2>Emma Mariele</h2>
            </div>
          </Profile>
          <Profile>
            <div className="profileImage">
              <img src={imgProfile006} alt="news"/>
            </div>
            <div className="profileTitle">
              <p>MARKETER</p>
              <h2>Christelle Bethânia</h2>
            </div>
          </Profile>
          </ProfileWrapper>
        </TeamWrapper>
      </TeamContainer>


      <Footer />
    </>
  );
};

export default About;
