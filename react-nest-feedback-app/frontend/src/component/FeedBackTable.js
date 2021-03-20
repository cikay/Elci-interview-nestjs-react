import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useFeedBackContext } from '../context/FeedBackContext';
export default function FeedBackTable() {
  const { feedbacks } = useFeedBackContext();

  console.log('problems', feedbacks);
  return (
    <div>
      <ListGroup as="ul">
        {feedbacks.map((feedback) => {
          return (
            <ListGroup.Item as="li">
              <h3>{feedback.issue}</h3>
              <p>{feedback.comment}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
