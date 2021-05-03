import * as React from 'react'
import classNames from 'classnames'
import sizes from './Col.Sizes.module.scss'
import modifiers from './Col.Modifiers.module.scss'
import colStyle from './Col.module.scss'

/* eslint-disable react/require-default-props */
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  xl?: boolean | number
  lg?: boolean | number
  md?: boolean | number
  sm?: boolean | number
  xs?: boolean | number
  xlOffset?: boolean | number
  lgOffset?: boolean | number
  mdOffset?: boolean | number
  smOffset?: boolean | number
  xsOffset?: boolean | number
  firstXl?: boolean
  firstLg?: boolean
  firstMd?: boolean
  firstSm?: boolean
  firstXs?: boolean
  lastXl?: boolean
  lastLg?: boolean
  lastMd?: boolean
  lastSm?: boolean
  lastXs?: boolean
  topXl?: boolean
  topLg?: boolean
  topMd?: boolean
  topSm?: boolean
  topXs?: boolean
  middleXl?: boolean
  middleLg?: boolean
  middleMd?: boolean
  middleSm?: boolean
  middleXs?: boolean
  bottomXl?: boolean
  bottomLg?: boolean
  bottomMd?: boolean
  bottomSm?: boolean
  bottomXs?: boolean
  isStatic?: boolean
}

const Col = React.forwardRef<HTMLDivElement, IProps>((props: IProps, ref) => {
  const {
    children,
    xl,
    lg,
    md,
    sm,
    xs = true,
    xlOffset,
    lgOffset,
    mdOffset,
    smOffset,
    xsOffset,
    firstXl,
    firstLg,
    firstMd,
    firstSm,
    firstXs,
    lastXl,
    lastLg,
    lastMd,
    lastSm,
    lastXs,
    topXl,
    topLg,
    topMd,
    topSm,
    topXs,
    middleXl,
    middleLg,
    middleMd,
    middleSm,
    middleXs,
    bottomXl,
    bottomLg,
    bottomMd,
    bottomSm,
    bottomXs,
    isStatic,
    ...rest
  } = props

  const xlClass = xl === true ? sizes.xl : sizes[`col-xl-${xl}`]
  const lgClass = lg === true ? sizes.lg : sizes[`col-lg-${lg}`]
  const mdClass = md === true ? sizes.md : sizes[`col-md-${md}`]
  const smClass = sm === true ? sizes.sm : sizes[`col-sm-${sm}`]
  const xsClass = xs === true ? sizes.xs : sizes[`col-xs-${xs}`]
  const xlOffsetClass = sizes[`col-xl-offset-${xlOffset}`]
  const lgOffsetClass = sizes[`col-lg-offset-${lgOffset}`]
  const mdOffsetClass = sizes[`col-md-offset-${mdOffset}`]
  const smOffsetClass = sizes[`col-sm-offset-${smOffset}`]
  const xsOffsetClass = sizes[`col-xs-offset-${xsOffset}`]

  const cx = classNames({
    [colStyle.root]: true,
    [colStyle.static]: !!isStatic,
    [xlClass]: !!xlClass,
    [lgClass]: !!lgClass,
    [mdClass]: !!mdClass,
    [smClass]: !!smClass,
    [xsClass]: !!xsClass,
    [xlOffsetClass]: !!xlOffsetClass,
    [lgOffsetClass]: !!lgOffsetClass,
    [mdOffsetClass]: !!mdOffsetClass,
    [smOffsetClass]: !!smOffsetClass,
    [xsOffsetClass]: !!xsOffsetClass,
    [modifiers['first-xl']]: firstXl,
    [modifiers['first-lg']]: firstLg,
    [modifiers['first-md']]: firstMd,
    [modifiers['first-sm']]: firstSm,
    [modifiers['first-xs']]: firstXs,
    [modifiers['last-xl']]: lastXl,
    [modifiers['last-lg']]: lastLg,
    [modifiers['last-md']]: lastMd,
    [modifiers['last-sm']]: lastSm,
    [modifiers['last-xs']]: lastXs,
    [modifiers['top-xl']]: topXl,
    [modifiers['top-lg']]: topLg,
    [modifiers['top-md']]: topMd,
    [modifiers['top-sm']]: topSm,
    [modifiers['top-xs']]: topXs,
    [modifiers['middle-xl']]: middleXl,
    [modifiers['middle-lg']]: middleLg,
    [modifiers['middle-md']]: middleMd,
    [modifiers['middle-sm']]: middleSm,
    [modifiers['middle-xs']]: middleXs,
    [modifiers['bottom-xl']]: bottomXl,
    [modifiers['bottom-lg']]: bottomLg,
    [modifiers['bottom-md']]: bottomMd,
    [modifiers['bottom-sm']]: bottomSm,
    [modifiers['bottom-xs']]: bottomXs,
  })

  return (
    <div className={cx} ref={ref} {...rest}>
      {children}
    </div>
  )
})

export { Col }
