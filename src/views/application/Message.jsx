// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';
import ChatContent from 'sections/application/message/ChatContent';

// ==============================|| APPLICATION - MESSAGE ||============================== //

export default function MessagePage() {
  return (
    <Row>
      <Col md={12}>
        <MainCard title={false} bodyClassName="p-0">
          <ChatContent />
        </MainCard>
      </Col>
    </Row>
  );
}
