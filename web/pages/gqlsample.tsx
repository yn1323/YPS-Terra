import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Button } from '@/atoms/Button/Button'
import { useShopQuery } from '@/graphql/generated'
import { authPageRedirectTo } from '@/services/ssrProps/authPageRedirectTo'

const Home: NextPage = () => {
  const { loading, error, data } = useShopQuery({
    variables: { shopId: 'QCv5QIAxDue0QuirDyoC' },
  })
  const onClickHandler = () => {
    console.log(data)
  }
  const loginHandler = () => {
    // login()
  }
  const logoutHandler = () => {
    // logout()
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button onClick={onClickHandler}>hoge</Button>
      <Button onClick={loginHandler}>login</Button>
      <Button onClick={logoutHandler}>logount</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await authPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  return {
    props: {},
  }
}

export default Home
