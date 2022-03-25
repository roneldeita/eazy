import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import RoutesTree from './components/RoutesTree';

const App = () => {
  
  useEffect(()=>{
    let defferedPrompt:any;
    const addbtn:any = document.querySelector('.btn');
    
    window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault();
        defferedPrompt = event
        addbtn.style.display = 'block';
    });
    
    addbtn.addEventListener('click', (event:any) => {
        defferedPrompt.prompt();
    
        defferedPrompt.userChoice.then((choice:any) => {
            if(choice.outcome === 'accepted'){
                console.log('user accepted the prompt')
            }
            defferedPrompt = null;
        })
    })  
  })
  return (
    <Layout>
      <RoutesTree/>
      <button className='btn' style={{display:'none'}}>Install Eazy</button>
    </Layout>
  );
}

export default App;
