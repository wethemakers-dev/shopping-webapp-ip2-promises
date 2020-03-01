import React, { Component } from "react";
import {
  Table,
  Modal,
  Button,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";
import "./Shoppinglist.css";
import axios from "axios";
import { NavigationBar } from "../../Component/NavigationBar/NavigationBar";
import NavBar from "../../Component/Nav/NavBar";

const user = localStorage.getItem("userID");

class Shoppinglist extends Component {
  state = {
    title: "",
    price: "",
    catgegory: "",
    shoppingList: [],
    show: false
  };

  componentDidMount() {
    this.getlist();
  }

  getlist = () => {
    axios.get("http://localhost:3001/users/giveshoppingItem").then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ shoppingList: data });
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handleSubmitButton = e => {
    e.preventDefault();
    const { title, price, catgegory } = this.state;
    this.setState(prevState => ({
      shoppingList: [...prevState.shoppingList, { title, price, catgegory }],
      show: false
    }));
    axios
      .post("http://localhost:3001/users/addShoppingList", {
        title: this.state.title,
        price: this.state.price,
        catgegory: this.state.catgegory,
        user_id: user
      })
      .then(res => {
        this.setState({
          title: "",
          price: "",
          catgegory: ""
        });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeItem(index, _id) {
    this.setState(prevState => ({
      shoppingList: prevState.shoppingList.filter((_, i) => i !== index)
    }));
    axios
      .post("http://localhost:3001/users/deleteItem", {
        _id
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const { title, price, catgegory } = this.state;

    const isEnabled =
      title.length > 0 && price.length > 0 && catgegory.length > 0;

    return (
      <div className="main-container">
        <NavigationBar />
        <NavBar />
        <h5>My Shopping List</h5>
        <div className="add_btn">
          <Button variant="dark" onClick={this.handleShow}>
            Add Item
          </Button>
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Your Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  placeholder="Enter Item Name"
                  type="text"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title}
                />
              </Form.Group>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Enter Price"
                  type="number"
                  min="0"
                  onChange={this.handleChange}
                  name="price"
                  value={this.state.price}
                  aria-label="Amount (to the nearest dollar)"
                />
              </InputGroup>

              <Form.Group>
                <Form.Label>catgegory</Form.Label>
                <Form.Control
                  as="select"
                  name="catgegory"
                  value={this.state.catgegory}
                  onChange={this.handleChange}
                >
                  <option value="">Select catgegory</option>
                  <option value="Home Fureniture">Home Furniture</option>
                  <option value="Home Decoration">Home Decoration</option>
                  <option value="Garden Fureniture">Garden Furniture</option>
                  <option value="Kitchen appliances">Kitchen appliances</option>
                  <option value="Bath">Bath</option>
                  <option value="Home & More">Home & More</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>

            <Button
              variant="success"
              disabled={!isEnabled}
              onClick={this.handleSubmitButton}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="Table">
          <Table striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>catgegory</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.shoppingList.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td> {item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.catgegory}</td>
                    <td>
                      <FiCheckSquare
                        className="done"
                        onClick={() => this.removeItem(index, item._id)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default Shoppinglist;
