export const env = {
  apiKey:
    process.env.NEXT_PUBLIC_API_KEY ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_AUTH_DOMAIN ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEY,
  projectId:
    process.env.NEXT_PUBLIC_PROJECT_ID ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEY,
  storageBucket:
    process.env.NEXT_PUBLIC_STORAGE_BUCKET ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEY,
  messagingSenderId:
    process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEY,
  appId:
    process.env.NEXT_PUBLIC_APP_I || process.env.STORYBOOK_NEXT_PUBLIC_API_KEYD,
  endpoint:
    process.env.NEXT_PUBLIC_ENDPOINT_DOMAIN ||
    process.env.STORYBOOK_NEXT_PUBLIC_API_KEYD,
}

export const isProduction = !env.projectId?.includes('development')
