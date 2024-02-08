// import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Skills from './Components/Skiils/Skills';
// import WorkExperience from './Components/WorkExperience/WorkExperience';
// import ContactMe from './Components/ContactMe/ContactMe';
// import Footer from './Components/Footer/Footer';

// const App = () => {

  // return (
    // <div>
      // <Navbar />
      // <div className='container'>
        // <Hero />
       //  <Skills />
      //  <WorkExperience />
      //  <ContactMe />
     // </div>
    //  <Footer />
   // </div>
 // )
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import { Client, LocalAuth } from 'whatsapp-web.js';
import settings from './settings';
import cfonts from 'cfonts';
import styled from 'styled-components';
import { QRCode } from 'react-qr-svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const QRContainer = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const App = () => {
  const [qrCode, setQRCode] = useState('');

  useEffect(() => {
    const client = new Client({
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions'],
      },
      auth: new LocalAuth({
        phoneNumber: settings.phoneNumber,
        clientID: settings.clientID,
        clientToken: settings.clientToken,
        encKey: settings.encKey,
        macKey: settings.macKey,
      }),
    });

    client.on('qr', qr => {
      setQRCode(qr);
    });

    client.on('authenticated', async session => {
      // Add your authentication logic here
    });

    client.on('disconnected', reason => {
      // Add your disconnected logic here
    });

    client.on('auth_failure', () => {
      // Add your auth failure logic here
    });

    client.on('session_error', () => {
      // Add your session error logic here
    });

    client.initialize();

    return () => {
      client.removeAllListeners();
    };
  }, []);

  return (
    <Container>
      <h1>WhatsApp Bot Demo</h1>
      <QRContainer>
        {qrCode && <QRCode value={qrCode} />}
      </QRContainer>
      <Text>Scan the QR code to authenticate</Text>
      {/* Add any additional UI elements here if needed */}
    </Container>
  );
}

export default App;
  
