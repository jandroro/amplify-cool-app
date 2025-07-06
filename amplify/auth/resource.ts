import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from './presignup/resource'

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // Add additional attributes for sign-up
  userAttributes: {
    nickname: {
      mutable: true,
      required: true
    }
  },
  // Add our custom lambda validation email function
  triggers: {
    preSignUp: preSignUp
  }
});
