import React from 'react'
import { AppContext } from '../context/AppContext'


const WelcomePage = () => {
    const { handleComponentsToggele,setUsername, username } = React.useContext(AppContext)
    const handleStart = () => {
        console.log('clicked')
        handleComponentsToggele()
        console.log(username)

    }
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
  return (
  <div className='welcomeTitle d-flex flex-column'>
<div className='purple'>
    Welcome To
</div>

<div className='purple welcomeTitle2'>
    ZorroQuest
</div>
<input className="rounded-pill mb-3 w-100 align-self-center p-2 nameInput" value={username} onChange={handleChange} placeholder='Enter your name'></input>
<button  onClick={handleStart} className='startBtn rounded-pill p-1 w-50  align-self-center'>Start</button>
  </div>
  )
}

export default WelcomePage