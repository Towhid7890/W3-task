import React from "react";
import "./request.css";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import History from "../History/History";
import ReCAPTCHA from "react-google-recaptcha";
const Request = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="request-container">
      <div className="ms-4 pt-5">
        <h1 className="request">Request testnet LINK</h1>
        <p className="py-4">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can <br /> create and test your own oracle and
          Chainlinked smart contract
        </p>

        <div className="px-3 bg-white">
          <div className="py-4">
            {["primary"].map((variant) => (
              <Alert key={variant} variant={variant} className="text-black">
                Your wallet is connected to
                <span className="font-weight-bold">Ethereum Rinkeby,</span>so
                you are requesting <span>Ethereum Rinkeby,</span> Link/ETH.
              </Alert>
            ))}
          </div>
          <div className="">
            <Form className="form-container">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ color: "#9B1FE9", fontWeight: "bold" }}>
                  Wallet Address
                </Form.Label>
                <Form.Control type="email" placeholder="Wallet Address..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ color: "#9B1FE9", fontWeight: "bold" }}>
                  Request Type
                </Form.Label>

                <div className="d-flex">
                  <Form.Control
                    style={{ width: "48%", marginRight: "2%" }}
                    type="email"
                    placeholder=""
                    defaultValue="20 Test Link"
                    disabled
                  />
                  <Form.Control
                    type="email"
                    style={{ width: "48%" }}
                    placeholder=""
                    defaultValue="0.5 ETH"
                    disabled
                  />
                </div>
              </Form.Group>
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
              <button
                style={{ backgroundColor: "#9B1FE9" }}
                className="btn text-white mt-3 mb-4"
              >
                Send Request
              </button>
            </Form>
          </div>
          <History></History>
        </div>
      </div>
    </div>
  );
};

export default Request;
