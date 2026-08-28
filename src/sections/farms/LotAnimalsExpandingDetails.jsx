import PropTypes from 'prop-types';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from 'components/MainCard';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';
import { StatusPill } from 'components/third-party/react-table';

// ==============================|| EXPANDING TABLE - USER DETAILS ||============================== //

export default function ExpandingUserDetail({ data }) { 

  let bg = 'light-primary';
  switch (data.status) {
    case 'A':
      bg = 'light-success';
      break;
    case 'T':
      bg = 'light-warning';
      break;
    case 'D':
      bg = 'light-warning';
      break;
    case 'G':
      bg = 'light-info';
      break;
    case 'V':
    default:
      bg = 'light-primary';
  }
  return (
    <Row className="g-3 custom-padding pt-3">
      <Col xs={12} sm={5} md={4}>
        <MainCard bodyClassName="p-4">
          <div className="position-absolute top-0 end-0 rounded-0">            
            <Badge bg={bg}>{data.status_description}</Badge>
          </div>
          <Col xs={12}>
            <Stack className="align-items-center" gap={4}>
              <Image
                src={getImageUrl(`${data.trademark}`, ImagePath.TRADEMARK, 'public')}
                alt="User Avatar"
                className="rounded-circle avatar avatar-l"
              />
              <Stack className="align-items-center" gap={1}>
                <h5 className="m-0 f-w-600">
                  {data.farm_name}
                </h5>
                <p className="m-0">{data.city} | {data.state_registration} | {data.country}</p>
              </Stack>
            </Stack>
          </Col>
          <hr className="my-4" />
          <Col xs={12}>
            <Stack direction="horizontal" className="justify-content-space-around align-items-center">
              <Stack className="align-items-center" gap={0.5}>
                <h5 className="mb-1 text-dark f-w-600">{data.picket_description}</h5>
                <p className="mb-0">picket</p>
              </Stack>
              <Stack className="align-items-center border-start" gap={0.5}>
                <h5 className="mb-1 text-dark f-w-600">{data.quantity_animals ?? 0}</h5>
                <p className="mb-0">quantity</p>
              </Stack>
              <Stack className="align-items-center border-start" gap={0.5}>
                <h5 className="mb-1 text-dark f-w-600">{data.average_weight ?? 0}</h5>
                <p className="mb-0">average weight</p>
              </Stack>
            </Stack>
          </Col>
          <hr className="my-4" />
          <Col xs={12}>
            <Stack gap={2} className="px-3">
              <Stack direction="horizontal" gap={2} className="justify-content-between">
                <Stack direction="horizontal">
                  <i className="ti ti-user me-2 f-18" />
                  <span className="text-muted">Owner</span>
                </Stack>
                <Stack direction="horizontal" className="d-inline-block text-truncate">
                  <span className="text-muted">{data.owner_name}</span>
                </Stack>
              </Stack>
              <Stack direction="horizontal" className="justify-content-between" gap={2}>
                <Stack direction="horizontal">
                  <i className="ti ti-mail me-2 f-18" />
                  <span className="text-muted">Email</span>
                </Stack>
                <Stack direction="horizontal" className="justify-content-between d-inline-block text-truncate">
                  {data.email}
                </Stack>
              </Stack>
              <Stack direction="horizontal" className="justify-content-between">
                <Stack direction="horizontal">
                  <i className="ti ti-phone me-2 f-18" />
                  <span className="text-muted">Phone</span>
                </Stack>
                <Stack direction="horizontal" className="d-inline-block text-truncate">
                  <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={data.contact} />
                </Stack>
              </Stack>
              <Stack direction="horizontal" className="justify-content-between">
                <Stack direction="horizontal">
                  <i className="ti ti-map-pin me-2 f-18" />
                  <span className="text-muted">Location</span>
                </Stack>
                <Stack direction="horizontal" className="d-inline-block text-truncate">
                  <span className="text-muted">{data.country}</span>
                </Stack>
              </Stack>
              
            </Stack>
          </Col>
        </MainCard>
      </Col>
      <Col xs={12} sm={7} md={8} xl={8.5}>
        <Stack gap={2.5}>
          <MainCard title="Lot Details" className="p-0" bodyClassName="p-3">
            <ListGroup variant="flush">
              <ListGroup.Item className="px-3 py-2">
                <Row className="g-4">
                  <Col md={6} xs={12}>
                    <h6 className="mb-1">Origin</h6>
                    <p className="mb-0">
                      {data.origin} 
                    </p>
                  </Col>
                  <Col md={6} xs={12}>
                    <h6 className="mb-1">Entry date</h6>
                    <p className="mb-0">{data.entry_date}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="px-3 py-2">
                <Row className="g-4">
                  <Col md={6} xs={12}>
                    <h6 className="mb-1">Country</h6>
                    <p className="mb-0">{data.country}</p>
                  </Col>
                  <Col md={6} xs={12}>
                    <h6 className="mb-1">State registration</h6>
                    <p className="mb-0">{data.state_registration}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="px-3 py-2">
                <Col md={6} xs={12}>
                  <h6 className="mb-1">Location</h6>
                  <p className="mb-0">{data.location}</p>
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </MainCard>
          <MainCard title="Last history">
            <p className="mb-0 text-wrap p-3 pb-0">
              {data.owner_name} 
            </p>
          </MainCard>
        </Stack>
      </Col>
    </Row>
  );
}

ExpandingUserDetail.propTypes = { data: PropTypes.any };
