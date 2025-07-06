// Import Amplify Auth and default styles
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// Import Custom Components
import LambdaComponent from './LambdaComponent'

function AuthComponent() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <LambdaComponent />
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  )
}

export default AuthComponent