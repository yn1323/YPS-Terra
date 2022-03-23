import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@/templates/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <p>
        <Link href="/link">
          <a>link</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Home
