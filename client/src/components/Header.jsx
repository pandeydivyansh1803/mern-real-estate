import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Profile from './../pages/Profile';

export default function Header() {
  const {currentUser} = useSelector((state)=>state.user)

  const navigate = useNavigate();
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer' onClick={()=>{
          navigate('/')
        }}>
          <span className='text-slate-500'>Indian</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'>
          </input>
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4 '>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer' onClick={()=>{
            navigate('/');
          }}>Home</li>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer' onClick={()=>{
            navigate('/about')
          }}>About</li>
          {currentUser ? (
            <img onClick={()=>{
              navigate('/profile')
            }} className='rounded-full h-7 w-7 object-cover cursor-pointer' src = {currentUser.avatar} alt= "profile" ></img>
          ) : (<li className='sm:inline text-slate-700 hover:underline cursor-pointer' onClick={()=>{
            navigate('/sign-in')
          }}>SignIn</li> )}
          
        </ul>

      </div> 

    </header>
  )
}
