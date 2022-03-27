import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

const Home: NextPageWithLayout = () => {
  return (
    <Animation>
      <div>text</div>
    </Animation>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
