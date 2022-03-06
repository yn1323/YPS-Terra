---
name: 'component-page(SSR)'
root: './web/pages'
output: []
ignore: []
questions:
  path: 'What is path??(i.e. event, post/[pid])'
  pageName: 'What is Page Name??(pascal case)'
---

# `{{ inputs.path }}/index.tsx`

```tsx
import type { GetServerSideProps, NextPage } from 'next'

type PropTypes = {}

export const {{ inputs.pageName | pascal }}: NextPage<PropTypes> = ({}) => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await client.query<Recipe>({
    query: Recipes,
  })
  return {
    props: {},
  }
}

export default {{ inputs.pageName | pascal }}

```
