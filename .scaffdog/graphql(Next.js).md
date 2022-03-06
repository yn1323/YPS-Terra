---
name: 'GraphQL(Next.js)'
root: './apps/web/graphql'
output: []
ignore: []
questions:
  query: 'What is GraphQL query name??(pacal case)'
---

# `{{ inputs.query | pascal }}/mutation.ts`

```tsx
{{ 'templates/graphql/mutation.ts' | read }}
```

# `{{ inputs.query | pascal }}/query.ts`

```tsx
{{ 'templates/graphql/query.ts' | read }}
```

