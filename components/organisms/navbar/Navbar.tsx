// Styles
import styles from './Navbar.module.scss'
// Components
import { Wrap, Row, Col } from '@components/grid'

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
