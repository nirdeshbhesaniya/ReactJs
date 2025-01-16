import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import UserContextProvider from './Context/useContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>
          Hello Bhesaniya Nirdesh, how are you? Are you fine?
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
