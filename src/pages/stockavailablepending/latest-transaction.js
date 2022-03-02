import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, radio, Button } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap"

import user from "../../assets/images/users/User.png"
import Product from "../../assets/images/users/product-img.png";




const LatestTransaction = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                        <CardTitle className="h5 font-size-16 text-red fw-bold mb-0">STOCK AVAILABLE BUT LISTING PENDING ON DEALSDRAY  </CardTitle>
                       
                        </div>    
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        
                                        <th>PRODUCT DETAILS</th>
                                        <th>MODEL NAME</th>
                                        <th>STOCK ON HAND</th>
                                        <th>MRP</th>
                                        <th>LISTING PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom address">
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td>
                                                <img src={Product} className="me-2 " style={{width:"40px"}} alt="..." />
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge  bg-yellow font-size-12">PENDING TO GO-LIVE</span></a>
                                                <tr></tr>
                                                 </td>
                                            </tr>
                                        </td>
                                        <td>
                                    
                                            <tr> <span className="text-green">MIGO-RED-1GB</span></tr>
                                            <tr>  <a href="#"><span className="badge  bg-white font-size-10  me-2">2GB + 16 GB</span></a>
                                           <a href="#"><span className="badge  bg-white font-size-10">RED</span></a>
                                           </tr>
                                           
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            <tr className="font-size-10 mb-1 d-block">  REORDER AT
                                           </tr>
                                           
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                          
                                        </td>
                                        
                                        <td>

                                        <tr> 
                                        <td className="me-2 d-block">
                                        <tr className="value-input mb-2 d-block">
                                               <input type="text" />
                                           </tr>
                                           
                                        </td>
                                        
                                        </tr>

                                    
                                    </td>
                                 </tr>

                                 <tr className="border-bottom address">
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td>
                                                <img src={Product} className="me-2 " style={{width:"40px"}} alt="..." />
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge  bg-yellow font-size-12">PENDING TO GO-LIVE</span></a>
                                                <tr></tr>
                                                 </td>
                                            </tr>
                                        </td>
                                        <td>
                                    
                                            <tr> <span className="text-green">MIGO-RED-1GB</span></tr>
                                            <tr>  <a href="#"><span className="badge  bg-white font-size-10  me-2">2GB + 16 GB</span></a>
                                           <a href="#"><span className="badge  bg-white font-size-10">RED</span></a>
                                           </tr>
                                           
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            <tr className="font-size-10 mb-1 d-block">  REORDER AT
                                           </tr>
                                           
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                          
                                        </td>
                                        
                                        <td>

                                        <tr> 
                                        <td className="me-2 d-block">
                                        <tr className="value-input mb-2 d-block">
                                               <input type="text" />
                                           </tr>
                                           
                                        </td>
                                        
                                        </tr>

                                    
                                    </td>
                                 </tr>

                                 <tr className="border-bottom address">
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td>
                                                <img src={Product} className="me-2 " style={{width:"40px"}} alt="..." />
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge  bg-yellow font-size-12">PENDING TO GO-LIVE</span></a>
                                                <tr></tr>
                                                 </td>
                                            </tr>
                                        </td>
                                        <td>
                                    
                                            <tr> <span className="text-green">MIGO-RED-1GB</span></tr>
                                            <tr>  <a href="#"><span className="badge  bg-white font-size-10  me-2">2GB + 16 GB</span></a>
                                           <a href="#"><span className="badge  bg-white font-size-10">RED</span></a>
                                           </tr>
                                           
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            <tr className="font-size-10 mb-1 d-block">  REORDER AT
                                           </tr>
                                           
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                          
                                        </td>
                                        
                                        <td>

                                        <tr> 
                                        <td className="me-2 d-block">
                                        <tr className="value-input mb-2 d-block">
                                               <input type="text" />
                                           </tr>
                                           
                                        </td>
                                        
                                        </tr>

                                    
                                    </td>
                                 </tr>
                                    
                                    
                                    
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;