import PropTypes from 'prop-types';
// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// assets
import CounterBackground from 'assets/images/landing/img-counter-bg.svg';

const counters = [
  { count: '150+', label: 'Components' },
  { count: '8+', label: 'Application' },
  { count: '100+', label: 'Pages' }
];

// ==============================|| COUNTER ITEM ||============================== //

function CounterItem({ count, label }) {
  return (
    <Col xs={4} className="text-center">
      <span className="counter text-white">{count}</span>
      <h4 className="f-w-400 mb-0 text-white text-opacity-50">{label}</h4>
    </Col>
  );
}

// ==============================|| LANDING - NUMBER BLOCK ||============================== //

export default function NumberBlock() {
  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });

  return (
    <section className="pt-0">
      <Container>
        <motion.div className="bg-dark rounded counter-block mb-0" {...fadeInUp(0.2)}>
          <Card className="bg-dark rounded counter-block mb-0">
            <Image src={CounterBackground} alt="presentation" role="presentation" aria-hidden className="img-fluid img-counter-bg" />
            <Card.Body className="p-4 p-md-5">
              <Row className="align-items-center">
                <Col lg={6} className="my-3">
                  <span className="h3 text-white mb-3 d-block">High-performance, scalability and durability</span>
                  <p className="mb-0 text-white text-opacity-50">
                    Built with high-performance, scalability, and durability in mind, this template is ready to elevate your projects to the
                    next level.
                  </p>
                </Col>
                <Col lg={6} className="my-3">
                  <Row className="g-3 text-center">
                    {counters.map((item) => (
                      <CounterItem key={`${item.label}-${item.count}`} count={item.count} label={item.label} />
                    ))}
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}

CounterItem.propTypes = { count: PropTypes.string, label: PropTypes.string };
