import { FC } from 'react'
import { useOnAuthStateChanged } from '@/hooks/useOnAuthStateChanged'
import { useScreenSize } from '@/hooks/useScreenSize'
import { AuthLayoutPC } from '@/templates/AuthLayoutPC'
import { AuthLayoutSP } from '@/templates/AuthLayoutSP'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const AuthLayout: FC<PropTypes> = ({ children }) => {
  const showElement = Array.isArray(children) ? children : [children]
  const { isPC } = useScreenSize()
  useOnAuthStateChanged()

  return isPC ? (
    <AuthLayoutPC>{showElement}</AuthLayoutPC>
  ) : (
    <AuthLayoutSP>{showElement}</AuthLayoutSP>
  )
}
