import React from 'react'
import { AppContext } from '../context/AppContext'
import handleComponentsToggele from '../context/AppContext'


const WelcomePage = () => {
    const { handleComponentsToggele } = React.useContext(AppContext)
    const handleStart = () => {
        console.log('clicked')
        handleComponentsToggele()
    }
  return (
  <div className='welcomeTitle d-flex flex-column'>
<div className='purple'>
    Welcome To
</div>

<div className='purple welcomeTitle2'>
    ZorroQuest
</div>
<button  onClick={handleStart} className='startBtn rounded-pill p-1 w-50  align-self-center'>Start</button>
  </div>
  )
}

export default WelcomePage