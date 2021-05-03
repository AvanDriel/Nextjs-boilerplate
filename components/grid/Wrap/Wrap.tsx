import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

import styles from './Wrap.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  relative?: boolean
  inlineFlex?: boolean
}

const Wrap = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { relative = false, inlineFlex = false, children, ...rest } = props

  const className = cx({
    [styles.root]: true,
    [styles.relative]: relative,
    [styles.inlineFlex]: inlineFlex,
  })

  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  )
})

export { Wrap }
