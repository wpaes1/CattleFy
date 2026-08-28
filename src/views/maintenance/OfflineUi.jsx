import { Link } from 'react-router-dom';

//react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-import
import { APP_DEFAULT_PATH } from 'config';

//assets
import sparcle1 from 'assets/images/pages/sparcle-1.png';
import sparcle2 from 'assets/images/pages/sparcle-2.png';
import ship from 'assets/images/pages/ship.svg';
import sark from 'assets/images/pages/sark.svg';

// =============================|| MAINTENANCE - OFFLINE UI ||============================== //

export default function OfflineUIPage() {
  return (
    <div className="maintenance-block offline">
      <div className="offline-wrapper">
        <Image src={sparcle1} alt="User-Image" className="img-fluid s-img-1" />
        <Image src={sparcle2} alt="User-Image" className="img-fluid s-img-2" />
        <Container className="off-main">
          <Row className="justify-content-center">
            <Col xs={6}>
              <div className="text-center">
                <div className="moon" />
                <Row className="justify-content-center">
                  <Col md={6}>
                    <Image src={ship} alt="image" className="img-fluid boat-img" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="m-0 justify-content-center off-content">
            <Col sm={12} className="p-0">
              <div className="text-center">
                <h1 className="text-white text-uppercase">Offline</h1>
                <h5 className="text-white font-weight-normal m-b-30">The site is temporarily down</h5>
                <Link to={APP_DEFAULT_PATH} className="btn btn-primary mb-4">
                  <i className="ph ph-house me-2" />
                  Go to Home
                </Link>
              </div>
            </Col>
            <div className="sark">
              <Image src={sark} alt="img" className="img-fluid img-sark" />
              <div className="bubble" />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
