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
                                           <tr className="value-input">
                                               <input type="text" />
                                           </tr>
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">TOTAL SOLD QTY: 4999</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                          
                                        </td>
                                        
                                        <td>

                                        <tr> 
                                        <td className="me-2 d-block"><a href="#"><span className="badge  green-btn font-size-8 mb-2">__% OFF</span></a> 
                                        <tr className="value-input mb-2 d-block">
                                               <input type="text" value="9999" />
                                           </tr>
                                           <tr className="me-0 d-block">  <a href="#"><span className="badge  red-btn font-size-8 mb-1">APP. PRICE: 1111111</span></a> </tr>
                                           <tr className="me-0 d-block">  <a href="#"><span className="badge  red-btn font-size-8 mb-2">LAST PRICE: 1111111</span></a> </tr>
                                        </td>
                                        
                                        <td>
                                        <div className="">
                                            <tr className="fw-bold mb-2 d-block">DQ</tr>
                                        <tr className="value-input">
                                               <input type="text"  />
                                           </tr>
                                        </div>
                                        </td>
                                     
                                        </tr>

                                        <tr className="d-flex"> 
                                        
                                        
                                        <td className="me-4">
                                        <div className="">
                                            <tr className="fw-bold mb-2 d-block">MOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" />
                                               <div className="d-flex">
                                               <div className="form-check me-2">
                              <input style={{width:"12px" , height:"12px" , marginTop:"6px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-10"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0">
                              <input style={{width:"12px" , height:"12px" , marginTop:"6px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-10"
                                htmlFor="radio4"
                              >
                             SERIES
                              </Label>
                            </div>
                            </div>   
                            <tr className="me-0 d-block">  <a href="#"><span className="badge  red-btn font-size-8 mb-1">MASTER PACK: 10</span></a> </tr>

                                           </tr>
                                        </div>
                                        </td>

                                        <td>
                                        <div className="">
                                            <tr className="fw-bold mb-2 d-block">XOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" />
                                               <div className="d-flex">
                                               <div className="form-check me-2">
                              <input style={{width:"12px" , height:"12px" , marginTop:"6px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-10"
                                htmlFor="radio3"
                              >
                               DAY
                              </Label>
                            </div>

                            <div className="form-check me-0">
                              <input style={{width:"12px" , height:"12px" , marginTop:"6px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-10"
                                htmlFor="radio4"
                              >
                               HOURS
                              </Label>
                            </div>
                            </div>      
                                           </tr>
                                        </div>
                                        </td>

                                        
                                     
                                        </tr>
                                        <td>
                                        <div className="d-flex mb-2">
                                               <div className="form-check me-2">
                              <input style={{width:"15px" , height:"15px" , marginTop:"6px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-12"
                                htmlFor="radio3"
                              >
                              FLASH DEALS
                              </Label>
                            </div>

                            <div className="form-check me-0">
                              <input style={{width:"15px" , height:"15px" , marginTop:"6px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-12"
                                htmlFor="radio4"
                              >
                              EXCLUSIVE DEALS
                              </Label>
                            </div>
                            </div>      
                                        </td>
                                        <tr>
                                        <div className="select-brand">

                                            <label class="main">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>

                                            <label class="main">AUTO-HIDE ON OUT OF STOCK
                                                    <input type="checkbox" />
                                                    <span class="w3docs"></span>
                                            </label>

                                            <label class="main">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs"></span>
                                            </label>

                                            <label class="main">NOTIFY-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs"></span>
                                            </label>

                                            <label class="main">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs"></span>
                                            </label>
                                            </div>
                                        </tr>

                                           
                                        <tr><a href="#"><span className="badge  bg-blue font-size-12">LIVE THIS ON DEALSDRAY APP</span></a> </tr>
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