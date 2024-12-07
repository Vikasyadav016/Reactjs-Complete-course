import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, DeleteUser, UpdateUser } from "./Actions";

const CrudOperationsUsingReduxInReact = () => {
  const [userDetails, setUserDetails] = useState({
    userId: "",
    userName: "",
    email: "",
    contactNo: "",
  });
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const data = useSelector((state) => state.user);
  console.log("data", data);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddNewUser = () => {
    if (
      userDetails.userId &&
      userDetails.userName &&
      userDetails.email &&
      userDetails.contactNo
    ) {
      dispatch(AddUser(userDetails));
      setUserDetails({
        userId: "",
        userName: "",
        email: "",
        contactNo: "",
      });
      console.log("Add user action dispatched");
    } else {
      if (!userDetails.contactNo) {
        setMessage("Please enter contact no.");
      }
      if (!userDetails.email) {
        setMessage("Please enter email.");
      }
      if (!userDetails.userName) {
        setMessage("Please enter User name.");
      }
      if (!userDetails.userId) {
        setMessage("Pleae Enter User Id.");
      }
    }
  };

  const hanldeUpdateUserDetails = (e, data) => {
    e.preventDefault();
    try {
      setIsUpdate(true);
      setUserDetails({
        userId: data?.userId || "",
        userName: data?.userName || "",
        email: data?.email || "",
        contactNo: data?.contactNo || "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleUpdateUser = () => {
    if (isUpdate) {
      dispatch(UpdateUser(userDetails));
      setUserDetails({
        userId: "",
        userName: "",
        email: "",
        contactNo: "",
      });
      setIsUpdate(false);
    }
  };

  useEffect(() => {
    if (isUpdate) {
    }
  });
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  }, [message]);
  

  return (
    <div>
      Crud Operations Using Redux In React
      <Container>
        <section style={{ marginBottom: "1rem" }}>
          <Card>
            <Card.Header>Add new user here</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col sm={6}>
                    <FormGroup>
                      <FormLabel>User ID</FormLabel>
                      <FormControl
                        type="text"
                        value={userDetails.userId}
                        name="userId"
                        onChange={handleOnChange}
                      ></FormControl>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>User Name</FormLabel>
                      <FormControl
                        type="text"
                        value={userDetails.userName}
                        name="userName"
                        onChange={handleOnChange}
                      ></FormControl>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        type="text"
                        value={userDetails.email}
                        name="email"
                        onChange={handleOnChange}
                      ></FormControl>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl
                        type="text"
                        value={userDetails.contactNo}
                        name="contactNo"
                        onChange={handleOnChange}
                      ></FormControl>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer>
              {message ? <h3>{message}</h3> : null}
              {isUpdate ? (
                <Button onClick={handleUpdateUser}>Update</Button>
              ) : (
                <Button onClick={handleAddNewUser}>Add User</Button>
              )}
            </Card.Footer>
          </Card>
        </section>
        <section>
          <Card>
            <Card.Header>All existing User</Card.Header>
            <Card.Body>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.userId}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.contactNo}</td>
                        <td>
                          <Button
                            style={{ marginRight: "5px" }}
                            onClick={(e) => hanldeUpdateUserDetails(e, user)}
                          >
                            Update
                          </Button>
                          <Button
                            onClick={() => dispatch(DeleteUser(user.userId))}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
};

export default CrudOperationsUsingReduxInReact;
