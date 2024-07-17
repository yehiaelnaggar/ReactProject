import React from 'react'
import { useAuth } from '../Contexts/authContext'

const Home = () => {
    const { user } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello {user.displayName ? user.displayName : user.email}, you are now logged in.</div>
    )
}

export default Home