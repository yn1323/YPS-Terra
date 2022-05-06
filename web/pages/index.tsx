import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'
import { UnauthHeader } from '@/templates/UnauthLayout'

const Home: NextPageWithLayout = () => {
  return (
    <Animation>
      <div>text</div>
    </Animation>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <UnauthHeader>{page}</UnauthHeader>
}

export default Home
