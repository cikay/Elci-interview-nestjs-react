import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFeedBackContext } from '../context/FeedBackContext';
import CenteredContainer from './CenteredContainer';
export default function FeedBackForm() {
  const [formData, setFormData] = useState({ issue: '', comment: '' });

  const { postFeedBack } = useFeedBackContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postFeedBack(formData);
    } catch (err) {}
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };
  return (
    <CenteredContainer>
      <Form style={{ maxWidth: '430px' }} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Problem Başlığı</Form.Label>
          <Form.Control
            required
            type="text"
            id="issue"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Problemi Tanımlayın</Form.Label>
          <Form.Control
            required
            type="text"
            id="comment"
            as="textarea"
            resizeable={false}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kaydet
        </Button>
      </Form>
    </CenteredContainer>
  );
}
