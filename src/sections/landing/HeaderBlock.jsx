import { Link } from 'react-router-dom';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import branding from 'branding.json';
import { APP_DEFAULT_PATH } from 'config';

// third-party
import { motion } from 'framer-motion';

// assets
import MainHeaderImg from 'assets/images/landing/img-header-main.jpg';
import ImgWave from 'assets/images/landing/img-wave.svg';

// ==============================|| LANDING - HEADER BLOCK ||============================== //

export default function HeaderBlock() {
  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <motion.h1 className="text-white mb-4" {...fadeInUp(0.2)}>
              Explore One of the <strong className="hero-text-gradient">Featured Dashboard</strong> Template in CodedThemes
            </motion.h1>
            <motion.div {...fadeInUp(0.3)}>
              <Row className="justify-content-center">
                <Col md={8}>
                  <p className="text-white text-opacity-75 f-16 mb-0">
                    {branding.brandName} is one of the featured admin dashboard templates on Envato Marketplace, used by over 2.5K+
                    customers worldwide.
                  </p>
                </Col>
              </Row>
            </motion.div>
            <motion.div className="my-4 my-sm-5" {...fadeInUp(0.4)}>
              <Link
                to="/basic/alert"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light me-2"
                aria-label="Explore components in a new tab"
              >
                Explore Components
              </Link>
              <Link
                to={APP_DEFAULT_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
                aria-label="Open live preview in a new tab"
              >
                Live Preview
              </Link>
            </motion.div>
            <motion.div className="mt-4 mt-sm-5" {...fadeInUp(0.6)}>
              <Image src={MainHeaderImg} alt="Dashboard preview hero" className="img-fluid img-header" loading="eager" />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Image src={ImgWave} alt="" role="presentation" aria-hidden className="img-wave" />
    </>
  );
}
