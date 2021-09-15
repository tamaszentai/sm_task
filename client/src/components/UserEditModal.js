import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const UserEditModal = (props) => {
  const { buttonLabel, className, id, name, dob, gender, updateUserHandler } = props;

  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDob, setNewDob] = useState(dob);
  const [newGender, setNewGender] = useState(gender);

  const toggle = () => setModal(!modal);

  const updateUserButton = () => {
    const updatedUser = {
        name: newName,
        dob: newDob,
        gender: newGender
    }
    updateUserHandler(id, updatedUser)
    toggle();
  };

  const newNameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const newDobChangeHandler = (event) => {
    setNewDob(event.target.value);
  };

  const newGenderChangeHandler = (event) => {
    setNewGender(event.target.value);
  };

  

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={newName}
                onChange={newNameChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date of Birth</Label>
              <Input type="date" name="dob" id="dob" value={newDob} 
              onChange={newDobChangeHandler}/>
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="select" name="gender" id="gender" value={newGender} onChange={newGenderChangeHandler}>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateUserButton}>
            Edit
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserEditModal;
