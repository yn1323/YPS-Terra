---
name: 'GraphQL(NestJS)'
root: './apps/server/src'
output: []
ignore: []
questions:
  query: 'What is GraphQL query name??(camel)'
  any: 'DO NOT forget include module to app.module.ts (press any button)'
---

# `{{ inputs.query }}/models/{{ inputs.query }}.ts`
```tsx
{{ 'templates/NestJS/graphql/models/todo.ts' | read }}
```

# `{{ inputs.query }}/{{ inputs.query }}.module.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.module.ts' | read }}
```

# `{{ inputs.query }}/{{ inputs.query }}.resolver.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.resolver.ts' | read }}
```

<!-- # `{{ inputs.query }}/{{ inputs.query }}.resolver.spec.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.resolver.spec.ts' | read }}
``` -->

# `{{ inputs.query }}/{{ inputs.query }}.service.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.service.ts' | read }}
```

<!-- # `{{ inputs.query }}/{{ inputs.query }}.service.spec.ts`
```tsx
{{ 'templates/NestJS/graphql/todo.service.spec.ts' | read }}
``` -->
