import { Link } from 'react-router-dom';

//react-bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-import
import MainCard from 'components/MainCard';
import { APP_DEFAULT_PATH } from 'config';

//assets
import ComingSoonImg from 'assets/images/pages/maintance.png';

// =============================|| MAINTENANCE - COMING SOON ||============================== //

export default function ComingSoonPage() {
  return (
    <div className="maintenance-block">
      <div className="container">
        <Row className="justify-content-center">
          <Col md={7}>
            <MainCard className="error-card">
              <div className="error-image-block">
                <Image className="img-fluid" src={ComingSoonImg} alt="img" />
              </div>
              <div className="text-center">
                <h1 className="mt-3">
                  <b>Under Maintenance!</b>
                </h1>
                <p className="mt-2 mb-4 text-muted">
                  The page you are looking was Under Maintenance!, <br />
                  Visit after some times
                </p>
                <Link to={APP_DEFAULT_PATH} className="btn btn-primary mb-3">
                  Go to home
                </Link>
              </div>
            </MainCard>
          </Col>
        </Row>
      </div>
    </div>
  );
}
