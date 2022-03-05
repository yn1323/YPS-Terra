---
name: 'organisms'
root: './apps/web/components/organisms'
output: []
ignore: [./apps/web/components]
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

# `{{ inputs.component | pascal }}/index.spec.tsx`

```tsx
{{ 'templates/components/test.tsx' | read }}

```