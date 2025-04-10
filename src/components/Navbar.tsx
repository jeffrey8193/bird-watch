/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Manoa Bird Watch</Navbar.Brand>
      </Container>
    </Navbar>
  );

export default NavBar;
