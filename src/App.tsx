import React, {useEffect } from 'react';
import Layout from './components/Layout';
import 'materialize-css';
import M from 'materialize-css';
import RoutesTree from './components/RoutesTree';

const App = () =>{

  useEffect(()=>{
    //initialize Modal
    window.addEventListener('DOMContentLoaded', (e) => {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
    });

    let deferredPrompt:any;
    const buttonModal:any = document.getElementById('modal-btn')
    const buttonInstall:any = document.querySelector('.btn-install');
    const Modal:any = document.querySelector('.modal');

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent the mini-infobar from appearing on mobile]
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      buttonInstall.style.display = 'block';
      buttonModal.click();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
    
    buttonInstall.addEventListener('click', async () => {
      // Hide the app provided install promotion
      // hideInstallPromotion();  
      buttonInstall.style.display = 'none';
      Modal.style.display = 'none';
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
      Modal.style.display = 'none';
      // Clear the deferredPrompt so it can be garbage collected
      deferredPrompt = null;
      // Optionally, send analytics event to indicate successful install
      console.log('PWA was installed');
    });
  
  }, [])

  return (
    <Layout>
      <RoutesTree/>
      <a id="modal-btn" style={{display:'none'}} className="waves-effect waves-light btn modal-trigger" href="#modal2">Intall App?</a> 
      
      <div id="modal2" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Intall App?</h4>
          <p>Installing uses almost no storage and provides a quick way to return to this app.</p>
          <button className='btn btn-install' style={{display:'none'}}>Install Eazy</button>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    </Layout>
  );
}

export default App;
