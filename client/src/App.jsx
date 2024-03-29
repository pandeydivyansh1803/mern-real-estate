import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivaterRoute from './components/PrivaterRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path={"/"}  element={<Home></Home>}></Route>
      <Route path={"/sign-in"}  element={<SignIn></SignIn>}></Route>
      <Route path={"/sign-up"}  element={<SignUp></SignUp>}></Route>
      <Route path={"/about"}  element={<About />}></Route>

      <Route element={<PrivaterRoute></PrivaterRoute>}>
        <Route path={"/profile"}  element={<Profile />}></Route>
        <Route path={"/create-listing"}  element={<CreateListing />}></Route>
        <Route path={"/update-listing/:listingId"} element={<UpdateListing/>}></Route>
      </Route>
      
      <Route path="/listing/:listingId" element={<Listing></Listing>}></Route>
      <Route path="/search" element = {<Search></Search>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
