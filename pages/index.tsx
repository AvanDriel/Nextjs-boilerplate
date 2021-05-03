// Components
import { Wrap, Row, Col } from '@components/grid'
import { Button } from '@atoms/button'

export default function Home() {
  return (
    <div>
      <Wrap>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <h1>NextJs Boilerplate</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lacus sem, efficitur eu eros vel, egestas ultrices lectus. Ut quis
              sodales eros. Donec scelerisque turpis eros, at bibendum arcu
              pharetra vitae. Ut at rutrum erat. Mauris vitae sapien laoreet,
              blandit ipsum in, rutrum metus
            </p>
            <Button>Button</Button>
          </Col>
        </Row>
      </Wrap>
    </div>
  )
}
