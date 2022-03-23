import type { NextPage } from 'next'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { countState } from '@/recoil/atom'

const Home: NextPage = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <div>
      <Link href="/link">
        <a>link</a>
      </Link>
      <a href="/link">a tag link</a>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default Home
