import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col>
        <h1>Message Board</h1>
      </Col>
      <Col>
        <Link to="/add">
          <Button className="float-end">
            Add Message
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default Header;