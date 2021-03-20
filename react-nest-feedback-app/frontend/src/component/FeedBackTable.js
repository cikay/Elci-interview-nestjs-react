import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useFeedBackContext } from '../context/FeedBackContext';
export default function FeedBackTable() {
  const { feedbacks } = useFeedBackContext();

  console.log('feedbacks', feedbacks);
  return (
    <div>
      <ListGroup as="ul" key="feedbacklist">
        {feedbacks.map((feedback) => {
          return (
            <ListGroup.Item as="li" key={feedback.id}>
              <h3>{feedback.issue}</h3>
              <p>{feedback.comment}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
