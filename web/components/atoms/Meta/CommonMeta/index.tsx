import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Titles = [
  {
    path: '/',
    title: '',
  },
  { path: '/login', title: 'ログイン' },
  { path: '/login/register', title: 'メールアドレス登録' },
  { path: '/register', title: '登録' },
  { path: '/dashboard', title: 'ダッシュボード' },
]

export const CommonMeta: FC = () => {
  const router = useRouter()
  const currentPath = router?.pathname
  const title = (() => {
    const titleName =
      Titles.find(({ path }) => path === currentPath)?.title ?? ''
    return titleName ? `YPS | ${titleName}` : 'YPS'
  })()

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
