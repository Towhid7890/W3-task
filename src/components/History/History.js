import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
const History = () => {
  return (
    <div>
      <h5>Request History</h5>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <div className="mt-4">
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link className="" eventKey="first">
                  ETH Transaction History
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="" eventKey="second">
                  TestLink Transaction History
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Table style={{ width: "45%" }} bordered size="sm">
                  <thead className="text-center">
                    <tr>
                      <th>Sr</th>
                      <th>Time</th>
                      <th>Amount</th>
                      <th>Hash</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>1</td>
                      <td>12:30 AM</td>
                      <td>487</td>
                      <td>4s8er5s5fe57rjmxnfuewrurks</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>10:30 AM</td>
                      <td>875</td>
                      <td>sf7s7ers4e7r7wser</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11:30 AM</td>
                      <td>997</td>
                      <td>se4s7er7</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table style={{ width: "45%" }} bordered size="sm">
                  <thead className="text-center">
                    <tr>
                      <th>Sr</th>
                      <th>Time</th>
                      <th>Amount</th>
                      <th>Hash</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>1</td>
                      <td>08:30 AM</td>
                      <td>748</td>
                      <td>7s7effkeurusue4</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>10:23 AM</td>
                      <td>974</td>
                      <td>sfe7r7sr4fer</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11:10 AM</td>
                      <td>874</td>
                      <td>s4e7s8er</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default History;
