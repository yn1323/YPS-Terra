import type { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

const Home: NextPageWithLayout = () => {
  return (
    <Animation>
      <Link href="/link">
        <a>link</a>
      </Link>
    </Animation>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
