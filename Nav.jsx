import Nav from 'react-bootstrap/Nav';
import './Nav.css';

export function BarNav() {
  return (
    <Nav  className="inicio" variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
