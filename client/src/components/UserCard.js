import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const UserCard = (props) => {
    const splitDate = props.dob.split('T');
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.gender}</CardSubtitle>
          <CardText>{splitDate[0]}</CardText>
          <Button color="danger">Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;