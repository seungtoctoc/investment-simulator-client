import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary mb-4'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='src/assets/chartIcon.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          {' Investment Simulator'}
        </Navbar.Brand>
        {/* <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
