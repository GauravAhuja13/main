import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import user from "../../assets/images/users/User.png"

const LatestTransaction = () => {
    return (
        <Row>
            <Col xl="12">
                <Card className="reg-status">
                        
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>#SN</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Legal Entity Name</th>
                                        <th>City</th>
                                        <th>Status</th>
                                        <th>FOS</th>
                                        <th>Registration Date</th>
                                        <th>BOT Checker Remarks</th>
                                        <th>TC Last Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>1</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-green text-uppercase">Approved </span></tr>
                                            <tr> <span className="d-block">-- </span></tr>
                                            <tr> <span className="d-block text-red fw-bold text-uppercase">Deactive </span></tr>
                                        </td>
                                        <td>
                                            <tr>
                                           1st Registration on Duplicate Device
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <tr className="">Gurgaon</tr>    
                                        </td>

                                        <td>
                                            <tr className="">Haryana</tr>    
                                        </td>

                                        <td>
                                        <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Deactive </span></tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr></tr>
                                        </td>

                                        <td className="">
                                            <tr></tr>
                                        </td>
                                        
                                    </tr>
                                 
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>2</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-blue text-uppercase fw-bold">Pending </span></tr>
                                            
                                        </td>
                                        <td>
                                            <tr>
                                           2nd Registration on Duplicate Device
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <tr className="">Gurgaon</tr>    
                                        </td>

                                        <td>
                                            <tr className="">Haryana</tr>    
                                        </td>

                                        <td>
                                        <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Active </span></tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr></tr>
                                        </td>

                                        <td className="">
                                            <tr></tr>
                                        </td>
                                        
                                    </tr>
                                    
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>3</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-green text-uppercase">Approved </span></tr>
                                            
                                        </td>
                                        <td>
                                            <tr>
                                           1st Document Uplaod on Duplicate Device
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <tr className="">Gurgaon</tr>    
                                        </td>

                                        <td>
                                            <tr className="">Haryana</tr>    
                                        </td>

                                        <td>
                                        <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Deactive </span></tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr></tr>
                                        </td>

                                        <td className="">
                                            <tr></tr>
                                        </td>
                                        
                                    </tr>
                                    
                                    <tr className="border-bottom">
                                        <td style={{width: "33%"}}> 
                                            <tr>4</tr>
                                        </td>
                                        <td className="">
                                            <tr> <span className="d-block text-green text-uppercase">Approved </span></tr>
                                            
                                        </td>
                                        <td>
                                            <tr>
                                           1st Document Uplaod on Duplicate Device
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="blue">Demo Zero</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <tr className="">Gurgaon</tr>    
                                        </td>

                                        <td>
                                            <tr className="">Haryana</tr>    
                                        </td>

                                        <td>
                                        <tr> <span className="d-block  text-uppercase">Direct Registration </span></tr>
                                            <tr> <span className="d-block  text-uppercase">--Deactive </span></tr>    
                                        </td>
                                        
                                        <td>
                                            <tr>19-01-2021 17:28</tr>
                                        </td>
                                        <td className="">
                                            <tr></tr>
                                        </td>

                                        <td className="">
                                            <tr></tr>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                  
                        <div className="bg-reg d-flex align-items-center">
                            <label className="mb-0 me-4">Confirm already registered device : </label>
                            <div className="d-flex">
                            <div className="form-check me-4">
                              <input style={{width:"17.4px" , height:"17.4px" , marginTop:"1px" , marginRight:"5px"}}
                                type="radio"
                                id="radio11"
                                name="toastType"
                                className="form-check-input"
                                value="success"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio11"
                              >
                                  Already registered device — APPROVED
                              </Label>
                            </div>
  
                            <div className="form-check me-4">
                              <input style={{width:"17.4px" , height:"17.4px" , marginTop:"1px" , marginRight:"5px"}}
                                type="radio"
                                id="radio22"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio22"
                              >
                                Already registered device — NOT APPROVED
                              </Label>
                            </div>
  
  
                      
                            </div>
                        </div>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;