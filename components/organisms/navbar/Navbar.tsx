// Styles
import styles from './Navbar.module.scss'
// Components
import { Wrap, Row, Col } from '@components/grid'

/*  Navbar.tsx
 *  This is a base setup of what a navigation bar could be
 *  In this case, it simply renders the children it gets passed to be inside a grid wrapper
 */

const Navbar: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.root}>
      <Wrap>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            {children}
          </Col>
        </Row>
      </Wrap>
    </div>
  )
}

export { Navbar }
