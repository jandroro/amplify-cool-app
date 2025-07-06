import './App.css'
// Initiate Amplify
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

// Import Custom Components
// import AuthComponent from './components/AuthComponent'
import AuthComponent from './components/AuthComponent2'

// Setup Amplify configuration to have access
// to amplify resources from anywhere inside the project
Amplify.configure(outputs)

function App() {
  return (
    <>
      <AuthComponent></AuthComponent>
    </>
  )
}

export default App
