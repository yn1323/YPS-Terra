---
name: 'page(SSG)'
root: './web/pages'
output: []
ignore: []
questions:
  path: 'What is path??(i.e. event, post/[pid])'
  pageName: 'What is Page Name??(pascal case)'
---

# `{{ inputs.path }}/index.tsx`

```tsx
import { ParsedUrlQuery } from 'querystring'
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Layout } from '@/templates/Layout'

type PropTypes = {}

export const {{ inputs.pageName | pascal }}: NextPageWithLayout<PropTypes> = ({}) => {
  return <div></div>
}

{{ inputs.pageName | pascal }}.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

interface Params extends ParsedUrlQuery {
  hoge: string
}

export const getStaticProps: GetStaticProps<PropTypes, Params> = async ({
  params,
}) => {
   const { data } = await client.query<Recipe>({
    query: Recipes,
  })
  return {
    props: {},
    revalidate: 60 * 60,
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export default {{ inputs.pageName | pascal }}

```
