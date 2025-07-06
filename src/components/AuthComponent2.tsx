// Import React hooks
import { useState, useEffect } from 'react'

// Import Amplify Auth and default styles
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { fetchUserAttributes } from 'aws-amplify/auth'

// Import Custom Components
import LambdaComponent from './LambdaComponent'

function UserDetails() {
  const [nickName, setNickname] = useState<string>()

  useEffect(() => {
    async function getUserData() {
      const userData = await fetchUserAttributes()
      setNickname(userData.nickname)
    }

    getUserData()
  }, [])

  return (
    <div>
      <h1>Hello {nickName}</h1>
    </div>
  )
}

function AuthComponent2() {
  return (
    <div>
      <Authenticator signUpAttributes={[
        'nickname'
      ]}>
        {({ signOut }) => (
          <main>
            <UserDetails />
            <LambdaComponent />
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  )
}

export default AuthComponent2