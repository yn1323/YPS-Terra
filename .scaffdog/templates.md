---
name: 'templates'
root: './web/components/templates'
output: []
ignore: [./web/components]
questions:
  component: 'What is Component name??(pacal case)'
---

# `{{ inputs.component | pascal }}/index.stories.tsx`
```tsx
{{ 'templates/components/storybook.tsx' | read }}
```

# `{{ inputs.component | pascal }}/index.tsx`

```tsx
{{ 'templates/components/component.tsx' | read }}
```
