import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem,
         Modal, ModalHeader, Form, FormGroup, Label, ModalBody,
         Button, Collapse, Input} from 'reactstrap';

import { NavLink } from 'react-router-dom'

class HeaderTwo extends Component{
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
                      <NavLink className="navitem" to="/home" ><span className="fa fa-sign-in"></span>Logout</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        )
    }
}

export default HeaderTwo;