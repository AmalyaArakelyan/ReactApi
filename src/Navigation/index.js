import React from 'react';
import * as ROUTES from '../constants/routes';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

const Navigation = () => (
    <div>
        <MDBNavbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">React App</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler/>
            <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav left>
            <MDBNavItem active>
            <MDBNavLink to={ROUTES.HOME}>Home</MDBNavLink>
        </MDBNavItem>

        </MDBNavbarNav>

        </MDBCollapse>
        </MDBNavbar>
    </div>
);

export default Navigation;