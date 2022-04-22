import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'

const Home: NextPageWithLayout = () => {
  return (
    <Animation>
      <div>text</div>
    </Animation>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <SidebarLayout>{page}</SidebarLayout>
}

export default Home
