---
name: 'NestJS-GraphQL'
root: './server'
output: []
ignore: []
questions:
  query: 'What is GraphQL query name??(pascal)'
  any: 'DO NOT forget include module to app.module.ts (enter any character and press enter)'
---

# `models/{{ inputs.query | pascal }}.ts`
```tsx
{{ 'templates/NestJS/graphql/models/todo.ts' | read }}
```

# `modules/{{ inputs.query | pascal }}/index.module.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.module.ts' | read }}
```

# `modules/{{ inputs.query | pascal }}/index.resolver.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.resolver.ts' | read }}
```

<!-- # `{{ inputs.query }}/index.resolver.spec.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.resolver.spec.ts' | read }}
``` -->

# `modules/{{ inputs.query | pascal }}/index.service.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.service.ts' | read }}
```

<!-- # `{{ inputs.query }}/index.service.spec.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.service.spec.ts' | read }}
``` -->
