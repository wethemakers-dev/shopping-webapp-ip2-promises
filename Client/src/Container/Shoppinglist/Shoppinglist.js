import React, { Component } from "react";
import {
  Table,
  Modal,
  Button,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";
import "./Shoppinglist.css";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user") || "");

class Shoppinglist extends Component {
  state = {
    title: "",
    price: "",
    category: "",
    shoppingList: [],
    show: false
  };

  componentDidMount() {
    this.getlist();
  }

  getlist = () => {
    axios.get("http://localhost:3001/users/WishList").then(res => {
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
    const { title, price, category } = this.state;
    this.setState(prevState => ({
      shoppingList: [...prevState.shoppingList, { title, price, category }],
      show: false
    }));
    axios
      .post("http://localhost:3001/users/WishList", {
        title: this.state.title,
        price: this.state.price,
        category: this.state.category,
        user_id: user._id
      })
      .then(res => {
        this.setState({
          shoppingList: this.state.shoppingList.concat(res.data),
          title: "",
          price: "",
          category: ""
        });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeItem(index) {
    this.setState(prevState => ({
      shoppingList: prevState.shoppingList.filter((_, i) => i !== index)
    }));
    axios
      .delete("http://localhost:3001/users/WishList", {})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const { title, price, category } = this.state;

    const isEnabled =
      title.length > 0 && price.length > 0 && category.length > 0;

    return (
      <div className="main-container">
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
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value="">Select Category</option>
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
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.shoppingList.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td> {item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <FiCheckSquare
                        className="done"
                        onClick={() => this.removeItem(index)}
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
