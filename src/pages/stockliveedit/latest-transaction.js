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
import Dot from "../../assets/images/users/dots.png";




const LatestTransaction = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                        <CardTitle className="h5 font-size-16 text-red fw-bold mb-0">STOCKS LIVE ON DEALSDRAY  </CardTitle>
                       
                        </div>    
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>PRODUCT DETAILS</th>
                                        <th>MODEL NAME</th>
                                        <th>LISTING Information</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom address">
                                    <td className="fw-bold position-relative">
                                      <span className="dot mb-5">1</span>
                                      <img src={Dot} className="dot" />
                                      </td>
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
                                                Warehouse Detailsss : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">PRODUCT LIVE</span></a>
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
                                           
                                            <tr> <a href="#"><span className="badge  green-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr className="d-flex align-items-start mb-2"> 
                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">App Price</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="₹4999.0" /><span className="font-size-8 gst">(18% GST included)</span>
                                           </tr>
                                        <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">__% OFF</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">MRP: ₹5599.0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">LAST Pice: ₹5599.0</a> 


                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">Live-STOCKS</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1000" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <a href="#" className="d-block mb-1 badge  red-sm-btn font-size-8 mb-0 w-85">REORDER AT: 5%</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">Received Orders: 0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">Total Sold Qty: 5599</a> 
                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">MOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             SERIES
                              </Label>
                            </div>
                            </div>   
                            <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">MASTER PACK: 10</a> 

                                        </div>

                                        <div className="w-85 me-2">
                                            <tr className="fw-bold mb-1 d-block">XOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               DAY
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             HOURS
                              </Label>
                            </div>
                            </div>   
                           

                                        </div>

                                        <div className="w-85 me-3">
                                            <tr className="fw-bold mb-1 d-block">DQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             DQ
                              </Label>
                            </div>
                            </div>   
                             </div>

                             <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"15px" , height:"15px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-13"
                                htmlFor="radio4"
                              >
                             FLASH DEALS
                              </Label>
                            </div>
                                        </tr>
                                            
                                         
                                        <tr>
                                        <div className="select-brand d-flex flex-wrap mb-2">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">AUTO-HIDE ON OUT OF STOCK
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                            
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">6 ORDERS</span></a>
                                            
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr className="text-end">
                                        <a href="#" className="text-red font-size-10 me-4"><u>SHOW LOGS</u></a>
                                        <a href="#"><span className="badge green-btn live font-size-12">UPDATE LISTING</span></a>
                                           </tr>
                                    </td>
                                 </tr>
                                    
                                 <tr className="border-bottom address">
                                 <td className="fw-bold position-relative">
                                      <span className="dot mb-5">2</span>
                                      <img src={Dot} className="dot" />
                                      </td>
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
                                                Warehouse Detailsss : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">LOW STOCK</span></a>
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
                                           
                                            <tr> <a href="#"><span className="badge  green-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr className="d-flex align-items-start mb-2"> 
                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">App Price</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="₹4999.0" /><span className="font-size-8 gst">(18% GST included)</span>
                                           </tr>
                                        <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">__% OFF</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">MRP: ₹5599.0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">LAST Pice: ₹5599.0</a> 


                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">Live-STOCKS</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1000" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <a href="#" className="d-block mb-1 badge  red-sm-btn font-size-8 mb-0 w-85">REORDER AT: 5%</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">Received Orders: 0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">Total Sold Qty: 5599</a> 
                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">MOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             SERIES
                              </Label>
                            </div>
                            </div>   
                            <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">MASTER PACK: 10</a> 

                                        </div>

                                        <div className="w-85 me-2">
                                            <tr className="fw-bold mb-1 d-block">XOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               DAY
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             HOURS
                              </Label>
                            </div>
                            </div>   
                           

                                        </div>

                                        <div className="w-85 me-2">
                                            <tr className="fw-bold mb-1 d-block">DQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             DQ
                              </Label>
                            </div>
                            </div>   
                             </div>

                             <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"15px" , height:"15px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-13"
                                htmlFor="radio4"
                              >
                             EXCLUSIVE DEALS
                              </Label>
                            </div>
                                        </tr>
                                            
                                         
                                        <tr>
                                        <div className="select-brand d-flex flex-wrap mb-2">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">AUTO-HIDE ON OUT OF STOCK
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                            
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">6 ORDERS</span></a>
                                            
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr className="text-end">
                                    
                                        <a href="#"><span className="badge green-btn live font-size-12">UPDATE LISTING</span></a>
                                           </tr>
                                    </td>
                                 </tr>

                                 <tr className="border-bottom address">
                                 <td className="fw-bold position-relative">
                                      <span className="dot mb-5">3</span>
                                      <img src={Dot} className="dot" />
                                      </td>
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
                                                Warehouse Detailsss : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                                </tr>
                                                <tr className="font-size-12 mb-2 d-block">DEALSDRAY ONLINE PVT LTD </tr>
                                           <a href="#"><span className="badge green-btn live font-size-12 me-2">OUT OF STOCK</span></a>
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
                                           
                                            <tr> <a href="#"><span className="badge  green-btn font-size-8">FRESH STOCKS</span></a> </tr>
                                        </td>
                                        <td>
                                        <tr className="d-flex align-items-start mb-2"> 
                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">App Price</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="₹4999.0" /><span className="font-size-8 gst">(18% GST included)</span>
                                           </tr>
                                        <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">__% OFF</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">MRP: ₹5599.0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">LAST Pice: ₹5599.0</a> 


                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">Live-STOCKS</tr>
                                        <tr className="value-input position-relative mb-2 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1000" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <a href="#" className="d-block mb-1 badge  red-sm-btn font-size-8 mb-0 w-85">REORDER AT: 5%</a> 
                                        <a href="#" className="d-block mb-1 badge  blue-sm-btn font-size-8 mb-0 w-85">Received Orders: 0</a> 
                                        <a href="#" className="d-block mb-1 badge  black-sm-btn font-size-8 mb-0 w-85">Total Sold Qty: 5599</a> 
                                        </div>

                                        <div className="me-2">
                                            <tr className="fw-bold mb-1 d-block">MOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             SERIES
                              </Label>
                            </div>
                            </div>   
                            <a href="#" className="d-block mb-1 badge  green-sm-btn font-size-8 mb-0 w-85">MASTER PACK: 10</a> 

                                        </div>

                                        <div className="w-85 me-2">
                                            <tr className="fw-bold mb-1 d-block">XOQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               DAY
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             HOURS
                              </Label>
                            </div>
                            </div>   
                           

                                        </div>

                                        <div className="w-85 me-2">
                                            <tr className="fw-bold mb-1 d-block">DQ</tr>
                                        <tr className="value-input position-relative mb-0 d-inline-block">
                                               <input type="text" className="text-blue-purple" value="1" /><span className="font-size-8 gst">Units</span>
                                           </tr>
                                           <div className="d-flex justify-content-between">
                                               <div className="form-check me-2 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio3"
                              >
                               NO LIMIT
                              </Label>
                            </div>

                            <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"10px" , height:"10px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-8"
                                htmlFor="radio4"
                              >
                             DQ
                              </Label>
                            </div>
                            </div>   
                             </div>

                             <div className="form-check me-0 d-flex align-items-center">
                              <input style={{width:"15px" , height:"15px" , marginTop:"0px" , marginRight:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label font-size-13"
                                htmlFor="radio4"
                              >
                             EXCLUSIVE DEALS
                              </Label>
                            </div>
                                        </tr>
                                            
                                         
                                        <tr>
                                        <div className="select-brand d-flex flex-wrap mb-2">
                                            <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                            
                                          <div className="mb-2">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">AUTO-HIDE ON OUT OF STOCK
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                            
                                          </div>

                                          <div className="mb-2">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  red-btn font-size-8">6 ORDERS</span></a>
                                            
                                          </div>

                                           
                                            </div>
                                        </tr>

                                           
                                        <tr className="text-end">
                                    
                                        <a href="#"><span className="badge green-btn live font-size-12">UPDATE LISTING</span></a>
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