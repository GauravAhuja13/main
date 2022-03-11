import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import user from "../../assets/images/users/User.png"
import Commingsoon from "../../assets/images/coming-soon-img.png";


const LatestTransaction = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                        <CardTitle className="h1 mb-0">My Registrations In Queue</CardTitle>
                        <div className="p-0">
                                <div className="search-box chat-search-box">
                                    <div className="d-flex align-items-center">
                                        <span>Search: </span>
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <Row className="justify-content-center mb-2">
                        <img
                          src={Commingsoon}
                          alt=""
                          className="img-fluid d-block w-50"
                        />
                        
                        <p className="text-primary fw-bold text-center font-size-18">
                        Good job! No Registration for verification
                        </p>
                       
          </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;