import React from 'react'
import WelcomePage from './components/WelcomePage'
import QuestionPage from './components/QuestionPage'
import { AppContext } from './context/AppContext'
const App = () => {
    const { componentsToggele } = React.useContext(AppContext)
  return (
    <>
    {!componentsToggele? <WelcomePage />: <QuestionPage />}
    </>

  )
}

export default App