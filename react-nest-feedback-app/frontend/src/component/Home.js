import React from 'react';
import FeedBackTable from './FeedBackTable';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useFeedBackContext } from '../context/FeedBackContext';
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};
export default function Home() {
  const { resetIsPosted } = useFeedBackContext();
  const handleClick = () => {
    openInNewTab('http://localhost:3000/feedback');
    resetIsPosted();
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={2}></Col>
          <Col xs={12} md={8} style={{ margin: '10px 0 0 0 ' }}>
            <FeedBackTable />
          </Col>
          <Col sx={12} md={2}>
            <Button
              variant="primary"
              onClick={handleClick}
              style={{ margin: '10px 0 0 0' }}
            >
              Sorun Bildirin
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
