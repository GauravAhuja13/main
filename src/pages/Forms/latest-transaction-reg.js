import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import user from "../../assets/images/users/User.png"

const LatestTransaction = () => {
    return (
        <Row>
            <Col xl="12">
                <Card>
                        <div className="bg-reg">
                            <label className="mb-0">registration seems duplicate please compare current registration with other(s) registration details</label>
                        </div>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Order Status</th>
                                        <th>Status</th>
                                        <th>Buyer Type</th>
                                        <th>Legal Entity Name</th>
                                        <th>Contact Person</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Registration Date</th>
                                        <th>FOS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>1 Order Buyer, <br/> Multiple Order <br /> Buyer</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-green text-uppercase">Approved </span></tr>
                                            <tr> <span className="d-block">-- </span></tr>
                                            <tr> <span className="d-block text-red fw-bold text-uppercase">Deactive </span></tr>
                                        </td>
                                        <td>
                                            <tr>
                                           Other
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td className="yellow-bg">
                                            <tr className="">NDFN</tr>    
                                        </td>

                                        <td className="yellow-bg">
                                            <tr className="">Sumit.dealsdray@gmail.com</tr>    
                                        </td>

                                        <td className="yellow-bg">
                                            <tr className="">ddfc abed fgrs , gurgaon,<br /> haryana-122016</tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Deactive </span></tr>
                                        </td>
                                        
                                    </tr>
                                 
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>Not Active</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-blue text-uppercase">Pending </span></tr>
                                        </td>
                                        <td>
                                            <tr>
                                           Current
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td className="yellow-bg">
                                            <tr className="">NDFN</tr>    
                                        </td>

                                        <td className="yellow-bg">
                                            <tr className="">Sumit.dealsdray@gmail.com</tr>    
                                        </td>

                                        <td className="yellow-bg">
                                            <tr className="">ddfc abed fgrs , gurgaon,<br /> haryana-122016</tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Deactive </span></tr>
                                        </td>
                                        
                                    </tr>
                                    
                                    
                                </tbody>
                            </Table>
                        </div>
                  
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;