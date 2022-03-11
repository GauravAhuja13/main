import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, radio, Button } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  } from "reactstrap"

import user from "../../assets/images/users/User.png"
import Product from "../../assets/images/users/product-img.png";

// import img1 from "../../assets/images/users/img-1.jpg"
// import img2 from "../../assets/images/users/img-2.jpg"
// import img3 from "../../assets/images/users/img-3.jpg"
import Slidewithfade from "../Ui/CarouselTypes/slidewithfade";
import Sale from "../../assets/images/users/sale.png"
import Dot from "../../assets/images/users/dots.png"

// const items = [
//   {
//     src: img1,
//     altText: "Slide 1",
//     caption: "Slide 1",
//   },
//   {
//     src: img2,
//     altText: "Slide 2",
//     caption: "Slide 2",
//   },
//   {
//     src: img3,
//     altText: "Slide 3",
//     caption: "Slide 3",
//   },
// ]




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
                                        <th>SPECIFICATIONS</th>
                                        <th>PACKAGING & WEIGHT</th>
                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product-line address ">
                                      <td className="fw-bold position-relative">
                                        <span className="dot mb-5">1</span>
                                      <img src={Dot} className="dot" />
                                      </td>
                                        <td style={{width: "33%"}} className="position-relative"> 
                                            <tr className="d-block d-flex justify-content-center position-relative products-img"> 
                  

                                                <td className="text-center me-5">
                                                <Slidewithfade />
                                                <a href="#" className="d-block edit-product"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                               
                                            </tr>
                                            <tr className="activated">
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                               </tr>
                                               <tr className="sale-offer">
                                                 <div className="sale">
                                                  <img src={Sale} />
                                                  <span>Flash Sale</span>
                                                  </div>
                                                  <div className="sale top">
                                                  <img src={Sale} />
                                                  <span>#2 Top Selling</span>
                                                  </div>
                                               </tr>
                                        </td>
                                        <td>
                                                  <tr className="product-detail">
                                                    <div className="d-flex justify-content-between">
                                                    <tr>
                                                      <i className="mdi mdi-apple"></i>
                                                    <a href="#" className="text-black"> Apple <i className="mdi mdi-chevron-right"></i> </a>
                                                    </tr>
                                    
                                                    <tr><a href="#" style={{color:"#000"}}> <i className="mdi mdi-share-variant"></i></a> </tr>
                                                    </div>
                                                    <tr className="font-size-12">
                                                    Apple iPhone X (64GB) - Space Grey
                                                </tr>
                                                <tr><span className="text-blue-purple fw-bold me-2">₹68,999</span> <del className="font-size-10 me-3">₹99,999</del> <span className="text-green font-size-12">31% OFF</span></tr>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Color
                                                    <div className="d-flex color">
                                                  <label class="main mb-0">
                                                    <span class="w3docs rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs grey rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs red rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    </div>
                                                  </td>

                                                  <td className="font-size-12 fw-bold">Storage
                                                    <div className="d-flex color">
                                                  <a href="#" className="storage-red-btn me-1">1GB + 16GB</a>
                                                  <a href="#" className="storage-red-btn storage-black-btn">2GB + 16GB</a>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Product Specifications</td>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Display</span>
                                                      <span>5.8-inch Super Retina HD display with HDR</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 even">
                                                      <span>Camera</span>
                                                      <span>64GB, 256GB</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Sim Type</span>
                                                     <span>Dual Sim</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 even">
                                                      <span>Network Type</span>
                                                      <span>5G</span>
                                                    </li>
                                                  </ul>
                                                </tr>

                                                <tr className="product-detail">
                                                  <div className="d-flex justify-content-between">
                                                  <td className="font-size-12 fw-bold"> CATEGORY</td>
                                                  <td className="font-size-12 fw-bold"> GST</td>
                                                  </div>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8">
                                                      <span>Mobiles & Tab » Smartphones » UNBOXED</span>
                                                      <span>18%</span>
                                                    </li>
                                                    
                                                  </ul>
                                                </tr>
                                                 </td>
                                        <td>
                                    
                                          
                                            <tr className="d-block"> <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on price change - 99</span></a>
                                            <a href="#"><span className="badge  pack-black-btn font-size-8 me-2 mb-2">bulk quotation REQUESTS- 9</span></a> 
                                            <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on STOCKS - 99</span></a>
                                             </tr>
                                            
                                            <tr>
                                            <td className="d-flex justify-content-between mb-2 product-line">
                                              <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Live-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">VIEWS: 8888/13000</span></a> </tr>

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Sold-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input yellow-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">RECEIVED ORDER 1</span></a> </tr>

                                           </tr>
                                        </div> 
                                        </div>

                                        <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">DQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="blue-input"/>
                                               
        

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center toggle me-2">
                                            <tr className="fw-bold mb-2 d-block font-size-12">MOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="purple-input"/>
                                               
                                                <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                SERIES
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 

                                        <div className="text-center toggle me-0">
                                            <tr className="fw-bold mb-2 d-block font-size-12">XOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="red-input"/>
                                               
                                               <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                PER DAY
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 
                                        </div>
                                        </td>
                                        
                                            </tr>
                                            <tr>
                                        <div className="select-brand d-flex product-checkbox product-line mb-2">
                                        <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
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
                                            <label class="main mb-0">SHOW-ON-HOME
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">6 ORDERS</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red notified"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                            <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold me-2">Gurgaon WH, Haryana </span> <span>DEALSDRAY ONLINE PVT LTD </span>
                                                </tr>
                                                <tr className="font-size-12 mb-3 d-block">
                                                Listing Created by : <span className="text-blue-purple fw-bold me-2">Listings Kumar </span> Remarks of listing team <span className="text-blue-purple fw-bold">Listings Kumar </span>
                                                </tr>
                                        </tr>

                                        <tr className="d-flex align-items-baseline">
                                          <td className="text-center me-5">
                                          <a href="#" className="font-size-13 live-btn  mb-1 d-block">LIVE ON APP</a> 
                                          <a href="#" className="text-red d-block font-size-8"><u className="font-size-10">DEACTIVATED NOW</u></a>
                                          </td>
                                          
                                          
                                        <td>
                                          <a href="#" className="font-size-13 increase-btn me-2">INCREASE PRICE</a>
                                          <a href="#" className="font-size-13 decrease-btn me-2">DECREASE PRICE</a>
                                          <a href="#" className="font-size-13 blue-btn">EDIT LISTING</a>
                                          </td>
                                        </tr>
                                        </td>
                                        
                                       
                                        
                                 </tr>

                                 <tr className="product-line address ">
                                      <td className="fw-bold position-relative">
                                        
                                        <span className="dot mb-5">2</span>
                                      <img src={Dot} className="dot" />
                                      </td>
                                        <td style={{width: "33%"}} className="position-relative"> 
                                            <tr className="d-block d-flex justify-content-center position-relative products-img"> 
                  

                                                <td className="text-center me-5">
                                                <Slidewithfade />
                                                <a href="#" className="d-block edit-product"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                               
                                            </tr>
                                            <tr className="activated">
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                               </tr>
                                               <tr className="sale-offer">
                                                 <div className="sale">
                                                  <img src={Sale} />
                                                  <span>Flash Sale</span>
                                                  </div>
                                                  <div className="sale top">
                                                  <img src={Sale} />
                                                  <span>#2 Top Selling</span>
                                                  </div>
                                               </tr>
                                        </td>
                                        <td>
                                                  <tr className="product-detail">
                                                    <div className="d-flex justify-content-between">
                                                    <tr>
                                                      <i className="mdi mdi-apple"></i>
                                                    <a href="#" className="text-black"> Apple <i className="mdi mdi-chevron-right"></i> </a>
                                                    </tr>
                                    
                                                    <tr><a href="#" style={{color:"#000"}}> <i className="mdi mdi-share-variant"></i></a> </tr>
                                                    </div>
                                                    <tr className="font-size-12">
                                                    Apple iPhone X (64GB) - Space Grey
                                                </tr>
                                                <tr><span className="text-blue-purple fw-bold me-2">₹68,999</span> <del className="font-size-10 me-3">₹99,999</del> <span className="text-green font-size-12">31% OFF</span></tr>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Color
                                                    <div className="d-flex color">
                                                  <label class="main mb-0">
                                                    <span class="w3docs rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs grey rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs red rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    </div>
                                                  </td>

                                                  <td className="font-size-12 fw-bold">Storage
                                                    <div className="d-flex color">
                                                  <a href="#" className="storage-red-btn me-1">1GB + 16GB</a>
                                                  <a href="#" className="storage-red-btn storage-black-btn">2GB + 16GB</a>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Product Specifications</td>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Display</span>
                                                      <span>5.8-inch Super Retina HD display with HDR</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 even">
                                                      <span>Camera</span>
                                                      <span>64GB, 256GB</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Sim Type</span>
                                                     <span>Dual Sim</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 even">
                                                      <span>Network Type</span>
                                                      <span>5G</span>
                                                    </li>
                                                  </ul>
                                                </tr>

                                                <tr className="product-detail">
                                                  <div className="d-flex justify-content-between">
                                                  <td className="font-size-12 fw-bold"> CATEGORY</td>
                                                  <td className="font-size-12 fw-bold"> GST</td>
                                                  </div>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8">
                                                      <span>Mobiles & Tab » Smartphones » UNBOXED</span>
                                                      <span>18%</span>
                                                    </li>
                                                    
                                                  </ul>
                                                </tr>
                                                 </td>
                                        <td>
                                    
                                          
                                            <tr className=" d-block"> <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on price change - 99</span></a>
                                            <a href="#"><span className="badge  pack-black-btn font-size-8 me-2 mb-2">bulk quotation REQUESTS- 9</span></a> 
                                            <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on STOCKS - 99</span></a>
                                             </tr>
                                            
                                            <tr>
                                            <td className="d-flex justify-content-between mb-2 product-line">
                                              <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Live-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">VIEWS: 8888/13000</span></a> </tr>

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Sold-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input yellow-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">RECEIVED ORDER 1</span></a> </tr>

                                           </tr>
                                        </div> 
                                        </div>

                                        <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">DQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="blue-input"/>
                                               
        

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center toggle me-2">
                                            <tr className="fw-bold mb-2 d-block font-size-12">MOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="purple-input"/>
                                               
                                                <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                SERIES
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 

                                        <div className="text-center toggle me-0">
                                            <tr className="fw-bold mb-2 d-block font-size-12">XOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="red-input"/>
                                               
                                               <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                PER DAY
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 
                                        </div>
                                        </td>
                                        
                                            </tr>
                                            <tr>
                                        <div className="select-brand d-flex product-checkbox product-line mb-2">
                                        <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
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
                                            <label class="main mb-0">SHOW-ON-HOME
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">6 ORDERS</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red notified"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                            <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold me-2">Gurgaon WH, Haryana </span> <span>DEALSDRAY ONLINE PVT LTD </span>
                                                </tr>
                                                <tr className="font-size-12 mb-3 d-block">
                                                Listing Created by : <span className="text-blue-purple fw-bold me-2">Listings Kumar </span> Remarks of listing team <span className="text-blue-purple fw-bold">Listings Kumar </span>
                                                </tr>
                                        </tr>

                                        <tr className="d-flex align-items-baseline">
                                          <td className="text-center me-5">
                                          <a href="#" className="font-size-13 live-btn  mb-1 d-block">LIVE ON APP</a> 
                                          <a href="#" className="text-red d-block font-size-8"><u className="font-size-10">DEACTIVE NOW</u></a>
                                          </td>
                                          
                                          
                                        <td>
                                          <a href="#" className="font-size-13 increase-btn me-2">INCREASE PRICE</a>
                                          <a href="#" className="font-size-13 decrease-btn me-2">DECREASE PRICE</a>
                                          <a href="#" className="font-size-13 blue-btn">EDIT LISTING</a>
                                          </td>
                                        </tr>
                                        </td>
                                        
                                       
                                        
                                 </tr>


                                 <tr className="product-line address ">
                                      <td className="fw-bold position-relative">
                                      <span className="dot mb-5">3</span>
                                      <img src={Dot} className="dot"/>
                                      </td>
                                        <td style={{width: "33%"}} className="position-relative"> 
                                            <tr className=" d-block d-flex justify-content-center position-relative products-img"> 
                  

                                                <td className="text-center me-5">
                                                <Slidewithfade />
                                                <a href="#" className="d-block edit-product"><span className="badge  purple-btn font-size-8 text-uppercase">EDIT PRoducT</span></a>
                                                </td>
                                               
                                            </tr>
                                            <tr className="activated">
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                                    <span>Activated</span>
                                               </tr>
                                               <tr className="sale-offer">
                                                 <div className="sale">
                                                  <img src={Sale} />
                                                  <span>Flash Sale</span>
                                                  </div>
                                                  <div className="sale top">
                                                  <img src={Sale} />
                                                  <span>#2 Top Selling</span>
                                                  </div>
                                               </tr>
                                        </td>
                                        <td>
                                                  <tr className="product-detail">
                                                    <div className="d-flex justify-content-between">
                                                    <tr>
                                                      <i className="mdi mdi-apple"></i>
                                                    <a href="#" className="text-black"> Apple <i className="mdi mdi-chevron-right"></i> </a>
                                                    </tr>
                                    
                                                    <tr><a href="#" style={{color:"#000"}}> <i className="mdi mdi-share-variant"></i></a> </tr>
                                                    </div>
                                                    <tr className="font-size-12">
                                                    Apple iPhone X (64GB) - Space Grey
                                                </tr>
                                                <tr><span className="text-blue-purple fw-bold me-2">₹68,999</span> <del className="font-size-10 me-3">₹99,999</del> <span className="text-green font-size-12">31% OFF</span></tr>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Color
                                                    <div className="d-flex color">
                                                  <label class="main mb-0">
                                                    <span class="w3docs rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs grey rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    <label class="main mb-0">
                                                    <span class="w3docs red rounded-circle" aria-checked="true"></span>
                                                    </label>
                                                    </div>
                                                  </td>

                                                  <td className="font-size-12 fw-bold">Storage
                                                    <div className="d-flex color">
                                                  <a href="#" className="storage-red-btn me-1">1GB + 16GB</a>
                                                  <a href="#" className="storage-red-btn storage-black-btn">2GB + 16GB</a>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr className="product-detail">
                                                  <td className="font-size-12 fw-bold">Product Specifications</td>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Display</span>
                                                      <span>5.8-inch Super Retina HD display with HDR</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 even">
                                                      <span>Camera</span>
                                                      <span>64GB, 256GB</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 mb-1 odd">
                                                      <span>Sim Type</span>
                                                     <span>Dual Sim</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between font-size-8 even">
                                                      <span>Network Type</span>
                                                      <span>5G</span>
                                                    </li>
                                                  </ul>
                                                </tr>

                                                <tr className="product-detail">
                                                  <div className="d-flex justify-content-between">
                                                  <td className="font-size-12 fw-bold"> CATEGORY</td>
                                                  <td className="font-size-12 fw-bold"> GST</td>
                                                  </div>
                                                  <ul className="p-0 mb-0">
                                                    <li className="d-flex justify-content-between font-size-8">
                                                      <span>Mobiles & Tab » Smartphones » UNBOXED</span>
                                                      <span>18%</span>
                                                    </li>
                                                    
                                                  </ul>
                                                </tr>
                                                 </td>
                                        <td>
                                    
                                          
                                            <tr className="d-block"> <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on price change - 99</span></a>
                                            <a href="#"><span className="badge  pack-black-btn font-size-8 me-2 mb-2">bulk quotation REQUESTS- 9</span></a> 
                                            <a href="#"><span className="badge  pack-red-btn font-size-8 me-2 mb-2">notify on STOCKS - 99</span></a>
                                             </tr>
                                            
                                            <tr>
                                            <td className="d-flex justify-content-between mb-2 product-line">
                                              <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Live-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">VIEWS: 8888/13000</span></a> </tr>

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">Sold-STOCKS</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1000 Units" className="green-input yellow-input"/>
                                               
                                                <tr className="me-0 d-block">  <a href="#"><span className="badge  grey-btn font-size-8 mb-1">RECEIVED ORDER 1</span></a> </tr>

                                           </tr>
                                        </div> 
                                        </div>

                                        <div className="d-flex">
                                        <div className="me-2 text-center">
                                            <tr className="fw-bold mb-2 d-block font-size-12">DQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="blue-input"/>
                                               
        

                                           </tr>
                                        </div> 

                                       
                                        <div className="text-center toggle me-2">
                                            <tr className="fw-bold mb-2 d-block font-size-12">MOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="purple-input"/>
                                               
                                                <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                SERIES
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 

                                        <div className="text-center toggle me-0">
                                            <tr className="fw-bold mb-2 d-block font-size-12">XOQ</tr>
                                        <tr className="value-input">
                                               <input type="text" value="1 Units" className="red-input"/>
                                               
                                               <tr className="me-0 d-block">  <div className="form-check form-switch form-switch-md" style={{paddingLeft:"0"}}>
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
                                                PER DAY
                                                </label>
                                            </div>
                                             </tr>

                                           </tr>
                                        </div> 
                                        </div>
                                        </td>
                                        
                                            </tr>
                                            <tr>
                                        <div className="select-brand d-flex product-checkbox product-line mb-2">
                                        <div className="mb-2">
                                            <label class="main mb-0">LIVE FOR ALL STATES
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
                                            <label class="main mb-0">SHOW-ON-HOME
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">VALID TILL STOCK OUT
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">LIVE ON:- 2 May, 2020 12:00 PM</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">ALLOW COUPON
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">6 ORDERS</span></a>
                                          </div>
                                          <div className="mb-0">
                                            <label class="main mb-0">NOTIFIED-BUYERS
                                                    <input type="checkbox" />
                                                    <span class="w3docs" aria-checked="true"></span>
                                            </label>
                                            <a href="#" className="check-btn me-2"><span className="badge  purple-btn font-size-8">2000/14000</span></a>
                                            <a href="#" className="text-red notified"><u>PUSH NOTIFICATION</u></a>
                                          </div>

                                           
                                            </div>
                                            <tr className="font-size-12">
                                                Warehouse Details : <span className="text-blue-purple fw-bold me-2">Gurgaon WH, Haryana </span> <span>DEALSDRAY ONLINE PVT LTD </span>
                                                </tr>
                                                <tr className="font-size-12 mb-3 d-block">
                                                Listing Created by : <span className="text-blue-purple fw-bold me-2">Listings Kumar </span> Remarks of listing team <span className="text-blue-purple fw-bold">Listings Kumar </span>
                                                </tr>
                                        </tr>

                                        <tr className="d-flex align-items-baseline">
                                          <td className="text-center me-5">
                                          <a href="#" className="font-size-13 live-btn  mb-1 d-block">LIVE ON APP</a> 
                                          <a href="#" className="text-red d-block font-size-8"><u className="font-size-10">DEACTIVE NOW</u></a>
                                          </td>
                                          
                                          
                                        <td>
                                          <a href="#" className="font-size-13 increase-btn me-2">INCREASE PRICE</a>
                                          <a href="#" className="font-size-13 decrease-btn me-2">DECREASE PRICE</a>
                                          <a href="#" className="font-size-13 blue-btn">EDIT LISTING</a>
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