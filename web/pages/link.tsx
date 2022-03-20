import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { countState } from '@/recoil/atom'

const Link: NextPage = () => {
  const [count, setCount] = useRecoilState(countState)

  return (
    <div>
      <p>this is link page</p>
      <button>{count}</button>
    </div>
  )
}

export default Link
