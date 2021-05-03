import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

import styles from './Row.module.scss'
import modifiers from './Row.Modifiers.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  relative?: boolean
  startXl?: boolean
  startLg?: boolean
  startMd?: boolean
  startSm?: boolean
  startXs?: boolean
  centerXl?: boolean
  centerLg?: boolean
  centerMd?: boolean
  centerSm?: boolean
  centerXs?: boolean
  endXl?: boolean
  endLg?: boolean
  endMd?: boolean
  endSm?: boolean
  endXs?: boolean
  aroundXl?: boolean
  aroundLg?: boolean
  aroundMd?: boolean
  aroundSm?: boolean
  aroundXs?: boolean
  betweenXl?: boolean
  betweenLg?: boolean
  betweenMd?: boolean
  betweenSm?: boolean
  betweenXs?: boolean
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
  stretchXl?: boolean
  stretchLg?: boolean
  stretchMd?: boolean
  stretchSm?: boolean
  stretchXs?: boolean
  reverseXl?: boolean
  reverseLg?: boolean
  reverseMd?: boolean
  reverseSm?: boolean
  reverseXs?: boolean
}

const Row = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const {
    relative,
    startXl,
    startLg,
    startMd,
    startSm,
    startXs,
    centerXl,
    centerLg,
    centerMd,
    centerSm,
    centerXs,
    endXl,
    endLg,
    endMd,
    endSm,
    endXs,
    aroundXl,
    aroundLg,
    aroundMd,
    aroundSm,
    aroundXs,
    betweenXl,
    betweenLg,
    betweenMd,
    betweenSm,
    betweenXs,
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
    stretchXl,
    stretchLg,
    stretchMd,
    stretchSm,
    stretchXs,
    reverseXl,
    reverseLg,
    reverseMd,
    reverseSm,
    reverseXs,
    children,
    ...rest
  } = props

  const className = cx({
    [styles.root]: true,
    [styles.relative]: !!relative,
    [modifiers['start-xl']]: startXl,
    [modifiers['start-lg']]: startLg,
    [modifiers['start-md']]: startMd,
    [modifiers['start-sm']]: startSm,
    [modifiers['start-xs']]: startXs,
    [modifiers['center-xl']]: centerXl,
    [modifiers['center-lg']]: centerLg,
    [modifiers['center-md']]: centerMd,
    [modifiers['center-sm']]: centerSm,
    [modifiers['center-xs']]: centerXs,
    [modifiers['end-xl']]: endXl,
    [modifiers['end-lg']]: endLg,
    [modifiers['end-md']]: endMd,
    [modifiers['end-sm']]: endSm,
    [modifiers['end-xs']]: endXs,
    [modifiers['around-xl']]: aroundXl,
    [modifiers['around-lg']]: aroundLg,
    [modifiers['around-md']]: aroundMd,
    [modifiers['around-sm']]: aroundSm,
    [modifiers['around-xs']]: aroundXs,
    [modifiers['between-xl']]: betweenXl,
    [modifiers['between-lg']]: betweenLg,
    [modifiers['between-md']]: betweenMd,
    [modifiers['between-sm']]: betweenSm,
    [modifiers['between-xs']]: betweenXs,
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
    [modifiers['stretch-xl']]: stretchXl,
    [modifiers['stretch-lg']]: stretchLg,
    [modifiers['stretch-md']]: stretchMd,
    [modifiers['stretch-sm']]: stretchSm,
    [modifiers['stretch-xs']]: stretchXs,
    [modifiers['reverse-xl']]: reverseXl,
    [modifiers['reverse-lg']]: reverseLg,
    [modifiers['reverse-md']]: reverseMd,
    [modifiers['reverse-sm']]: reverseSm,
    [modifiers['reverse-xs']]: reverseXs,
  })

  return (
    <div className={className} ref={ref} {...rest} data-test-id="row">
      {children}
    </div>
  )
})

export { Row }
