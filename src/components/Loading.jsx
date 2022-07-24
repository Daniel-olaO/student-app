import React from 'react';
import {Container, Row, Card} from 'react-bootstrap';

const Loading = ({data}) => {
  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Loading {data}</Card.Title>
            <Card.Text>Please wait...</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Loading;
