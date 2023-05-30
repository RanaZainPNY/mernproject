import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Shope() {
  // const my_Card = {
  //   box-shadow: 0 ,0, 5px, 2px, rgba(0, 0, 0, 0.2);
  // }

  return (
    <>
      <Container style={{marginTop: '50px'}}> 
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="watch500*300.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="car690*360.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="car320*180.jpg"
              />
              <Card.Body>
                <Card.Title>The Spirit Of Nemo</Card.Title>
                <Card.Text>
                  1938 Packard 1605 Super Eight. Convertible Engine number
                  A502325. Concours d'Elegance of America
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>

{/* 2nd group */}
<Container style={{marginTop: '50px'}}> 
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="watch500*300.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="car690*360.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="car320*180.jpg"
              />
              <Card.Body>
                <Card.Title>The Spirit Of Nemo</Card.Title>
                <Card.Text>
                  1938 Packard 1605 Super Eight. Convertible Engine number
                  A502325. Concours d'Elegance of America
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>
      {/* 3RD GROUP */}
      <Container style={{marginTop: '50px'}}> 
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="watch500*300.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="car690*360.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: "232px" }}
                src="car320*180.jpg"
              />
              <Card.Body>
                <Card.Title>The Spirit Of Nemo</Card.Title>
                <Card.Text>
                  1938 Packard 1605 Super Eight. Convertible Engine number
                  A502325. Concours d'Elegance of America
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>


    </>
  );
}

export default Shope;
