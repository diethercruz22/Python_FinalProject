import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";
import "../styles/App.css";
import { Navbar, Container, Nav, Button, Card, Row, Col, Sidebar, ListGroup } from "react-bootstrap";

function MainPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Logout function to show an alert and navigate to the login page
  const handleLogout = () => {
    // Show an alert notification
    alert("Logging Out");

    // After the alert is closed, navigate to the login page
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          height: "100vh",
          backgroundColor: "#343a40",
          color: "white",
          padding: "20px 10px",
        }}
      >
        <h4 style={{ color: "white" }}>File Manager</h4>
        <ListGroup variant="flush">
          <ListGroup.Item action href="#all-files" style={{ color: "black" }}>
            All Files
          </ListGroup.Item>
          <ListGroup.Item action href="#shared-files" style={{ color: "black" }}>
            Shared Files
          </ListGroup.Item>
          <ListGroup.Item action href="#recent-files" style={{ color: "black" }}>
            Recent Files
          </ListGroup.Item>
          <ListGroup.Item action href="#trash" style={{ color: "black" }}>
            Trash
          </ListGroup.Item>
          <ListGroup.Item action href="#upload-files" style={{ color: "black" }}>
            Upload Files
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">Project Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/tasks">Tasks</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Hero Section */}
        <div className="hero-section" style={{ padding: "2px", textAlign: "center", background: "#f8f9fa" }}>
          <h1>Welcome to Project Manager</h1>
          <p>Streamline your workflow and collaborate effectively with your team.</p>
          <div>
            <Button variant="primary" style={{ margin: "50px",marginTop:"-20px" }} href="/new-project">
              Create a New Project
            </Button>
            <Button variant="secondary" style={{ margin: "70px", marginTop:"-2px" }} href="/tasks">
              View Tasks
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <Container style={{ maxWidth:"2000px", padding: "10px", border:"white" }}>
          <h2 className="text-center" style={{color:"black"}}>Key Features</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Manage Tasks</Card.Title>
                  <Card.Text style={{color:"black"}}>Keep track of tasks and deadlines efficiently.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Collaborate with Teams</Card.Title>
                  <Card.Text style={{color:"black"}}>Work with your team in real-time for better results.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Track Progress</Card.Title>
                  <Card.Text style={{color:"black"}}>Monitor the status of your projects at a glance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Projects Overview Section */}
        <div className="projects-overview" style={{ background: "#e9ecef", padding: "10px 10px" }}>
          <Container style={{ maxWidth:"2000px", padding: "10px", border:"white"}}>
            <h2 className="text-center">Ongoing Projects</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Project A</Card.Title>
                    <Card.Text>Deadline: Dec 31, 2024</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Project B</Card.Title>
                    <Card.Text>Deadline: Jan 15, 2025</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Project C</Card.Title>
                    <Card.Text>Deadline: Feb 10, 2025</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Footer */}
        <footer style={{ background: "#343a40", color: "black", padding: "20px 0", textAlign: "center" }}>
          <Nav className="justify-content-center">
            <Nav.Link href="/about" style={{ color: "black" }}>About</Nav.Link>
            <Nav.Link href="/contact" style={{ color: "black" }}>Contact</Nav.Link>
            <Nav.Link href="/privacy" style={{ color: "black" }}>Privacy Policy</Nav.Link>
          </Nav>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
