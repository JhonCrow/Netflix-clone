import React, { useEffect } from 'react';
import './App.css'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path='profile' element={<ProfileScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;
