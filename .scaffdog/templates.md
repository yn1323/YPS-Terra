---
name: 'templates'
root: './apps/web/components/templates'
output: []
ignore: [./apps/web/components]
questions:
  component: 'What is Component name??.'
---

# `{{ inputs.component | pascal }}/index.stories.tsx`

```tsx
import { ComponentMeta } from '@storybook/react'
import { {{ inputs.component | pascal }} as component } from '.'

export default {
  title: '{{ document.name }}/{{ inputs.component | pascal }}',
  component: component,
} as ComponentMeta<typeof component>
export const Primary = { args: { primary: true, label: 'ok' } }

```

# `{{ inputs.component | pascal }}/index.tsx`

```tsx
import { css } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {}

export const {{ inputs.component | pascal }}: FC<PropTypes> = () => {
  return <div></div>
}
const style = {}
```
