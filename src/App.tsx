import React, { useEffect } from 'react';
import Layout from './components/Layout';
import RoutesTree from './components/RoutesTree';
import { InstallPWA } from './components/install/installPwa';

const App = () =>{
  return (
    <Layout>
      <RoutesTree/>
    </Layout>
  );
}

export default App;
