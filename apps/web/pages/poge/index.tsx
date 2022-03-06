import { gql } from '@apollo/client'
import type { GetServerSideProps, NextPage } from 'next'
import client from '@/config/apollo-client'

export const Poge: NextPage = ({}) => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('poge')
  const { data } = await client.query({
    query: gql`
      query GetRecipe {
        recipe(id: "1") {
          id
          name
        }
      }
    `,
  })
  console.log(data)
  return {
    props: {},
  }
}

export default Poge
