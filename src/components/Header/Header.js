import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          className="py-3"
          style={{ color: "#9B1FE9", fontWeight: "bold", fontSize: "25px" }}
          href="#"
        >
          Faucets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <Form.Select
              className="option-btn"
              aria-label="Default select example"
            >
              <option>Ethereum Kovan</option>
              <option value="1">Arbitrum Rinkeby</option>
              <option value="2">Avalanche Fuji</option>
              <option value="3">BNB Chain Testnet</option>
              <option value="4">Ethereum Rinkeby</option>
              <option value="5">Fantom Testnet</option>
            </Form.Select>
            <button className="wallet-btn" onClick={handleShow}>
              Connect Wallet
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <>
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Connect your wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="d-flex mx-4"
            style={{ justifyContent: "space-between" }}
          >
            <div
              style={{
                height: "150px",
                backgroundColor: "#EEF2FE",
                width: "170px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg"
                alt=""
              />
            </div>
            <div
              style={{
                height: "150px",
                backgroundColor: "#EEF2FE",
                width: "170px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
                alt=""
              />
            </div>
          </Modal.Body>
        </Modal>
      </>
    </Navbar>
  );
};

export default Header;
