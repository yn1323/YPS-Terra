import { Recipe } from 'graphql/generated'
import type { GetServerSideProps, NextPage } from 'next'
import client from '@/config/apollo-client'
import { useRecipesQuery } from '@/graphql/generated'
import { Recipes } from '@/graphql/recipe/query'

export const Poge: NextPage = ({}) => {
  const all = useRecipesQuery({ endpoint: 'http://localhost:3000/graphql' })

  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<Recipe>({
    query: Recipes,
  })

  return {
    props: {},
  }
}

export default Poge
