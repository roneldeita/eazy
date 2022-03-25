import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import RoutesTree from './components/RoutesTree';

const App = () => {
  
  useEffect(()=>{
    let deferredPrompt:any;
    const buttonInstall:any = document.querySelector('.btn');
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      buttonInstall.style.display = 'block';
      //showInstallPromotion();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
    
    buttonInstall.addEventListener('click', async () => {
      // Hide the app provided install promotion
     // hideInstallPromotion();
     buttonInstall.style.display = 'none';
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;


      // Optionally, send analytics event with outcome of user choice
      console.log(`User response to the install prompt: ${outcome}`);
   
      // We've used the prompt, and can't use it again, throw it away
      deferredPrompt = null;
    });

    window.addEventListener('appinstalled', () => {
      // Hide the app-provided install promotion
      //hideInstallPromotion();
      buttonInstall.style.display = 'none';
      // Clear the deferredPrompt so it can be garbage collected
      deferredPrompt = null;
      // Optionally, send analytics event to indicate successful install
      console.log('PWA was installed');
    });
  })
  return (
    <Layout>
      <RoutesTree/>
      <button className='btn' style={{display:'none'}}>Install Eazy</button>
    </Layout>
  );
}

export default App;
