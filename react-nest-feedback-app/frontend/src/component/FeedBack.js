import React, { useState } from 'react';
import FeedBackForm from './FeedBackForm';
import { Alert, Button } from 'react-bootstrap';
import { useFeedBackContext } from '../context/FeedBackContext';
import CenteredContainer from './CenteredContainer';
import { useHistory } from 'react-router-dom';
export default function FeedBack() {
  const { isPosted } = useFeedBackContext();

  console.log('isposted', isPosted);
  return <>{isPosted ? <Info /> : <FeedBackForm />}</>;
}

function Info() {
  const { resetIsPosted } = useFeedBackContext();
  const history = useHistory();
  const handleHomePage = () => {
    history.push('/');
  };
  return (
    <CenteredContainer>
      <Alert variant="success">Sorun Başarıyla Bildirildi</Alert>
      <Button onClick={resetIsPosted}>Yeni Sorun Bildirin</Button>
      <Button style={{ marginLeft: '10px' }} onClick={handleHomePage}>
        Ana sayfaya dön
      </Button>
    </CenteredContainer>
  );
}
