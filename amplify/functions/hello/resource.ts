import {defineFunction } from '@aws-amplify/backend'

export const REGION = 'us-east-1'
export const TABLE_NAME = 'products'

export const sayHello = defineFunction({
  name: 'sayHello',
  entry: './handler.ts',
  bundling: {
    minify: false
  },
  environment: {
    REGION,
    TABLE_NAME
  }
})