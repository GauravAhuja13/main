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
                                        <th>S.NO</th>
                                        <th>PRODUCT DETAILS</th>
                                        <th>MODEL NAME</th>
                                        <th>STOCK ON HAND</th>
                                        <th>MRP</th>
                                        <th>LISTING PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom address">
                                      <td className="fw-bold">1</td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td className="text-center me-2">
                                                <img src={Product} className=" me-2" style={{width:"40px"}} alt="..." />
                                                <a href="#" className="d-block me-2"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">PENDING TO GO-LIVE</span></a>
                                           <a href="#" className="text-red font-size-10"><u>DEACTIVE NOW</u></a>
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
                                            <tr> <a href="#"><span className="badge  grey-btn font-size-8">VIEWS: 8888/13000</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">SOLD STOCK: 500 units</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> <del>₹99,999</del> <span className="text-green font-size-12">31% OFF</span>
                                           </tr>
                                           <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                           <tr>
                                           <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                 DQ: 10
                                                </label>
                                            </div>
                                            </tr>

                                          <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                MOQ: 2 SERIES
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                XOQ: 1 DAY
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                               FLASH DEAL
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                SHOW-HOME
                                                </label>
                                            </div>
                                           </tr>
                                        </td>
                                        
                                        <td>
                                        <tr>
                                        <div className="select-brand">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr>
                                        <a href="#"><span className="badge  bg-black me-2 font-size-12">VIEW LISTING DETAILS</span></a>
                                          <a href="#"><span className="badge  bg-blue font-size-12">EDIT LISTING</span></a> </tr>
                                    </td>
                                 </tr>
                                    
                                 <tr className="border-bottom address">
                                      <td className="fw-bold">2</td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td className="text-center me-2">
                                                <img src={Product} className=" me-2" style={{width:"40px"}} alt="..." />
                                                <a href="#" className="d-block me-2"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">PENDING TO GO-LIVE</span></a>
                                           <a href="#" className="text-red font-size-10"><u>DEACTIVE NOW</u></a>
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
                                            <tr> <a href="#"><span className="badge  grey-btn font-size-8">VIEWS: 8888/13000</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">SOLD STOCK: 500 units</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> <del>₹99,999</del> <span className="text-green font-size-12">31% OFF</span>
                                           </tr>
                                           <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                           <tr>
                                           <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                 DQ: 10
                                                </label>
                                            </div>
                                            </tr>

                                          <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                MOQ: 2 SERIES
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                XOQ: 1 DAY
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                               FLASH DEAL
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                SHOW-HOME
                                                </label>
                                            </div>
                                           </tr>
                                        </td>
                                        
                                        <td>
                                        <tr>
                                        <div className="select-brand">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr>
                                        <a href="#"><span className="badge  bg-black me-2 font-size-12">VIEW LISTING DETAILS</span></a>
                                          <a href="#"><span className="badge  bg-blue font-size-12">EDIT LISTING</span></a> </tr>
                                    </td>
                                 </tr>

                                 <tr className="border-bottom address">
                                      <td className="fw-bold">3</td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td className="text-center me-2">
                                                <img src={Product} className=" me-2" style={{width:"40px"}} alt="..." />
                                                <a href="#" className="d-block me-2"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">PENDING TO GO-LIVE</span></a>
                                           <a href="#" className="text-red font-size-10"><u>DEACTIVE NOW</u></a>
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
                                            <tr> <a href="#"><span className="badge  grey-btn font-size-8">VIEWS: 8888/13000</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">SOLD STOCK: 500 units</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> <del>₹99,999</del> <span className="text-green font-size-12">31% OFF</span>
                                           </tr>
                                           <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                           <tr>
                                           <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                 DQ: 10
                                                </label>
                                            </div>
                                            </tr>

                                          <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                MOQ: 2 SERIES
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                XOQ: 1 DAY
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                               FLASH DEAL
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                SHOW-HOME
                                                </label>
                                            </div>
                                           </tr>
                                        </td>
                                        
                                        <td>
                                        <tr>
                                        <div className="select-brand">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr>
                                        <a href="#"><span className="badge  bg-black me-2 font-size-12">VIEW LISTING DETAILS</span></a>
                                          <a href="#"><span className="badge  bg-blue font-size-12">EDIT LISTING</span></a> </tr>
                                    </td>
                                 </tr>

                                 <tr className="border-bottom address">
                                      <td className="fw-bold">4</td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                                <td className="text-center me-2">
                                                <img src={Product} className=" me-2" style={{width:"40px"}} alt="..." />
                                                <a href="#" className="d-block me-2"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                                <td>
                                                    <tr className="border-bottom">
                                                    <a href="#"> <span className="fw-bold" style={{marginRight: "10px"}}>REDMI Go-RED/1GB+8GB</span> </a>
                                                    </tr>
                                                    <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">PENDING TO GO-LIVE</span></a>
                                           <a href="#" className="text-red font-size-10"><u>DEACTIVE NOW</u></a>
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
                                            <tr> <a href="#"><span className="badge  grey-btn font-size-8">VIEWS: 8888/13000</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-yellow">1000  (Units)</span></tr>
                                            
                                            <tr> <a href="#"><span className="badge  purple-btn font-size-8">SOLD STOCK: 500 units</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr> <span className="text-red fw-bold">₹5999.0</span></tr>
                                            <tr className="font-size-10 mb-1 d-block"> <del>₹99,999</del> <span className="text-green font-size-12">31% OFF</span>
                                           </tr>
                                           <tr className="font-size-10 mb-1 d-block"> (18% GST included)
                                           </tr>
                                           <tr>
                                           <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                 DQ: 10
                                                </label>
                                            </div>
                                            </tr>

                                          <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                MOQ: 2 SERIES
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                XOQ: 1 DAY
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                               FLASH DEAL
                                                </label>
                                            </div>
                                           </tr>

                                           <tr>
                                            <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  defaultChecked

                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                SHOW-HOME
                                                </label>
                                            </div>
                                           </tr>
                                        </td>
                                        
                                        <td>
                                        <tr>
                                        <div className="select-brand">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr>
                                        <a href="#"><span className="badge  bg-black me-2 font-size-12">VIEW LISTING DETAILS</span></a>
                                          <a href="#"><span className="badge  bg-blue font-size-12">EDIT LISTING</span></a> </tr>
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