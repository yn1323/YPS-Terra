---
name: 'page(SSR)'
root: './web/pages'
output: []
ignore: []
questions:
  path: 'What is path??(i.e. event, post/[pid])'
  pageName: 'What is Page Name??(pascal case)'
---

# `{{ inputs.path }}/index.tsx`

```tsx
import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'
import { authPageRedirectTo } from '@/services/ssrProps/authPageRedirectTo'

type PropTypes = {}

export const {{ inputs.pageName | pascal }}: NextPageWithLayout<PropTypes> = ({}) => {
  return <Animation><div></div></Animation>
}

{{ inputs.pageName | pascal }}.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await authPageRedirectTo(context)
  if (redirect) {
    return redirect
  }
  const { data } = await client.query<Recipe>({
    query: Recipes,
  })
  return {
    props: {},
  }
}

export default {{ inputs.pageName | pascal }}

```
