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
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import "./Wishlist.css";

class Wishlist extends Component {
  state = {
    title: "",
    price: "",
    category: "",

    wishList: [
      { title: "test", price: "55", category: "accessories" },
      { title: "test2", price: "100", category: "accessories" },
      { title: "test3", price: "200", category: "accessories" }
    ],
    show: false
  };

  componentDidMount = () => {
    this.getlist();
  };

  getlist = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const data = res.data;
        this.setState({ wishList: data });
        console.log("Data recived");
      })
      .catch(() => {
        console.log("err");
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
    const { title, price, category, wishList } = this.state;
    this.setState(prevState => ({
      wishList: [...prevState.wishList, { title, price, category }],
      show: false
    }));
    axios({
      url: "",
      method: "POST",
      data: wishList
    })
      .then(() => {
        console.log("Data sent to server");
        this.handleChange();
        this.getlist();
      })
      .catch(() => {});
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeItem(index) {
    this.setState(prevState => ({
      wishList: prevState.wishList.filter((_, i) => i !== index)
    }));
  }

  render() {
    const { title, price, category } = this.state;

    const isEnabled =
      title.length > 0 && price.length > 0 && category.length > 0;

    return (
      <div className="main-container">
        <h5>My Wish List</h5>
        <br />
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
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
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

        <div>
          <Table className="Table" striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.wishList.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td> {item.title}</td>
                    <td>{item.price}$</td>
                    <td>{item.category}</td>
                    <td>
                      <MdDelete
                        className="delete"
                        onClick={() => this.removeItem(index)}
                      />
                      <GiShoppingCart className="add_shop" />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
        <div>
          <br />
          <Button
            className="add_btn"
            variant="outline-dark"
            onClick={this.handleShow}
          >
            Add Item
          </Button>
        </div>
      </div>
    );
  }
}

export default Wishlist;
