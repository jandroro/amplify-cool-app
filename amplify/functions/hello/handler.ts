import type { Schema } from '../../data/resource'

// Use the env variables from the .amplify folder.
// We need to deploy the app or create a sandbox to update the values each time we define a new env values
import { env } from '$amplify/env/sayHello'

type handlerType = Schema['sayHello']['functionHandler']

export const handler: handlerType = async(event, context) => {
  // Access to our custom env variables
  const region = env.REGION
  const tableName = env.TABLE_NAME

  // Access to AWS env variables
  // const regionAws = env.AWS_REGION
  
  const { name } = event.arguments
  return `Hello, ${name}, table name: ${tableName}, region: ${region}`
}