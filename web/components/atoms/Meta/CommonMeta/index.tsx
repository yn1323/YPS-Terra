import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Titles = [
  {
    path: '/',
    title: 'YPS',
  },
  { path: '/login', title: 'ログイン' },
  { path: '/login/register', title: 'メールアドレス登録' },
]

export const CommonMeta: FC = () => {
  const router = useRouter()
  const currentPath = router?.pathname
  const title = Titles.find(({ path }) => path === currentPath)?.title ?? ''
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
