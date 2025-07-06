// Use Amplify resources
import { generateClient } from 'aws-amplify/api'
import { Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>()

async function sayHello() {
  // Invoke the sayHello lambda function
  const result = await client.queries.sayHello({
    name: 'Jano'
  })

  console.log(result)
}

function LambdaComponent() {
  return (
    <>
      <button onClick={sayHello}>Click me</button>
    </>
  )
}

export default LambdaComponent