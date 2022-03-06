---
name: 'page(SSG)'
root: './apps/web/pages'
output: []
ignore: []
questions:
  path: 'What is path??(i.e. event, post/[pid])'
  pageName: 'What is Page Name??(pascal case)'
---

# `{{ inputs.path }}/index.tsx`

```tsx
import { ParsedUrlQuery } from 'querystring'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type PropTypes = {}

export const {{ inputs.pageName | pascal }}: NextPage<PropTypes> = ({}) => {
  return <div></div>
}

interface Params extends ParsedUrlQuery {
  hoge: string
}

export const getStaticProps: GetStaticProps<PropTypes, Params> = async ({
  params,
}) => {
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
