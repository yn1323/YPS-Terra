import { FC, Fragment } from 'react'
import { CommonMeta } from '@/atoms/Meta/CommonMeta'
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

  return (
    <Fragment>
      <CommonMeta />
      {isPC ? (
        <AuthLayoutPC>{showElement}</AuthLayoutPC>
      ) : (
        <AuthLayoutSP>{showElement}</AuthLayoutSP>
      )}
    </Fragment>
  )
}
