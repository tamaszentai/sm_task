import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import UserEditModal from './UserEditModal';

const UserCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.gender}</CardSubtitle>
          <CardText>{props.dob}</CardText>
          <UserEditModal buttonLabel={"Edit"} id={props.id} name={props.name} dob={props.dob} gender={props.gender} updateUserHandler={props.updateUserHandler}/>
          {" "}
          <Button color="danger" onClick={() => props.deleteUserHandler(props.id)}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;