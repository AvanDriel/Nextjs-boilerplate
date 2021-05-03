import cls from 'classnames'
// Styles
import styles from './Button.module.scss'

type ButtonVariations = 'primary' | 'secondary'

type ButtonTypes = 'button' | 'submit'

interface IProps {
  variation?: ButtonVariations
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void
  type?: ButtonTypes
  href?: string
  newTab?: boolean
}

const Button: React.FunctionComponent<IProps> = ({
  children,
  variation = 'primary',
  type = 'button',
  href,
  onClick,
  newTab = true,
}) => {
  const classes = cls([styles.root], variation && styles[variation])

  if (href) {
    return (
      <a
        className={classes}
        onClick={onClick}
        href={href}
        target={`${newTab ? '_blank' : '_self'}`}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

export { Button }
