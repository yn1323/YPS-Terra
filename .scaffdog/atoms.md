---
name: 'atoms'
root: './web/components/atoms'
output: []
ignore: [./web/components]
questions:
  type: What type of Component?(pascal case, i.e. Button, Text, Form ...etc)"
  component: 'What is Component name??(pacal case)'
---

# `{{ inputs.type | pascal }}/{{ inputs.component | pascal }}/index.stories.tsx`

```tsx
{{ 'templates/components/storybook.tsx' | read }}
```

# `{{ inputs.type | pascal }}/{{ inputs.component | pascal }}/index.tsx`

```tsx
{{ 'templates/components/component.tsx' | read }}
```

# `{{ inputs.type | pascal }}/{{ inputs.component | pascal }}/index.spec.tsx`

```tsx
{{ 'templates/components/test.tsx' | read }}

```
