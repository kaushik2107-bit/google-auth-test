import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import { useEffect, useState } from "react"
import { gapi } from "gapi-script"

const clientId = "968963508756-vpf1i92tm522sd769r1tju3ij7a6imtn.apps.googleusercontent.com"

function App() {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
      {userName ?
        <LogoutButton 
          setUserName={setUserName}
        />
        :
        <LoginButton 
          setUserName={setUserName}
        />
      }

      {userName && <><p>{userName.name}</p><img src={userName.imageUrl} referrerPolicy="no-referrer" /></>}
    </div>
  );
}

export default App;
