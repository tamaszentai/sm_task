import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const UserModal = (props) => {
  const {
    buttonLabel,
    className,
    userName,
    dob,
    gender,
    userNameChangeHandler,
    dobChangeHandler,
    genderChangeHandler,
    addNewUserHandler
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addUserButton = () => {
      addNewUserHandler();
      toggle();
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter name" value={userName} onChange={userNameChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="dob">Date of Birth</Label>
        <Input type="date" name="dob" id="dob" value={dob} onChange={dobChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="gender">Gender</Label>
        <Input type="select" name="gender" id="gender" value={gender} onChange={genderChangeHandler}>
          <option>Female</option>
          <option>Male</option>
          <option>Prefer not to say</option>
        </Input>
      </FormGroup>
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={addUserButton}>Add User</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserModal;