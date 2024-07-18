import React from 'react'
import { useAuth } from '../Contexts/authContext'

const Home = () => {
    const { user } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    )
}

export default Home