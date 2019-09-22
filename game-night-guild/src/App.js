import React, {useState} from 'react';
import './App.css';
import Splash from './Components/SplashPage/Splash';
import Sitebar from './Components/Navbar/Sitebar';
import SignIn from './Components/SplashPage/LoginSignup';
import PageOne from './Components/Auth/PageOne';
import Games from './Components/Game Sessions/Games';




function App() {

    const [token, setToken ] = useState(undefined);

    let storeSessionToken = () => {
      setToken(token)
    }

  return (
    <div>
    {/* <Splash/> */}
    {/* <SignIn tokenHandler={ storeSessionToken } /> */}
     <Sitebar/>
  {/* <PageOne/> */}
   {/* <Games/> */}
    </div>
  );
}

export default App;
