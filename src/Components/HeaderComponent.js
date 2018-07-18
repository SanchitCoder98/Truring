import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink,
         Modal, ModalHeader, Form, FormGroup, Label, ModalBody,
         Button, Collapse, Input} from 'reactstrap';

import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isModalOpen: false,
          isOpen: false    
        };
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
  
      toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
      }

    render(){
        return (
            <div>
              <Navbar fixed={`top`} className="test" light expand="md">
                <NavbarBrand>
                <a href="#">
                  <img className="h" src="https://farm2.staticflickr.com/1783/42769265234_e893570941_m.jpg" alt="Header Logo" height='50px'/>
                </a>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav pills className="ml-auto">
                    <NavItem className="h">
                      <NavLink className="navitem" onClick={this.toggleModal}><span className="fa fa-sign-in"></span>Login</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                          <Label htmlFor="username">Username</Label>
                          <Input type="text" id="username" name="username"
                              innerRef={(input) => this.username = input} />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input type="password" id="password" name="password"
                              innerRef={(input) => this.password = input}  />
                      </FormGroup>
                      <Link className="cool" to="/stream"><Button className="al2" color="info">Login</Button></Link>
                    </Form>
                  </ModalBody>
              </Modal>
            </div>
        )
    }
}

export default Header;