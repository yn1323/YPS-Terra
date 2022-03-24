import type { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Layout } from '@/templates/Layout'

const Home: NextPageWithLayout = () => {
  return (
    <p>
      <Link href="/link">
        <a>link</a>
      </Link>
    </p>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
