import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, radio, Button } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
  } from "reactstrap"

import user from "../../assets/images/users/User.png"
import Product from "../../assets/images/users/product-img.png";
import Mi from "../../assets/images/users/mi.png";
import Sale from "../../assets/images/users/sale.png"
import Unbox from "../../assets/images/users/unboxed.png"
import BackBg from "../../assets/images/users/back-bg.png"
import RightBg from "../../assets/images/users/right-bg.png"
import LeftBg from "../../assets/images/users/left-bg.png"
import Back from "../../assets/images/users/back.png"
import Left from "../../assets/images/users/left.png"
import Right from "../../assets/images/users/right.png"

import classnames from "classnames"
import { isEmpty } from "lodash"
  


const LatestTransaction = props => {

  // const { products } = React.useSelector(state => ({
  //   products: state.ecommerce.products,
  // }))
  // const {
  //   product,
  //   match: { params },
  //   onGetProductDetail,
  // } = props
  
  // const [activeTab, setActiveTab] = React.useState("1")
  // const [activeDescriptionTab, setDescriptionActiveTab] = React.useState("specifications")

  // React.useEffect(() => {
  //   if (params && params.id) {
  //     onGetProductDetail(params.id)
  //   } else {
  //     onGetProductDetail(1)
  //   }
  // }, [onGetProductDetail, params])

  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab)
  //   }
  // }

  // const toggledescription = tab => {
  //   if (activeDescriptionTab !== tab) {
  //     setDescriptionActiveTab(tab)
  //   }
  // }

  // const imageShow = (img, id) => {
  //   const expandImg = document.getElementById("expandedImg" + id)
  //   expandImg.src = img
  // }
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                        <CardTitle className="h5 font-size-16 text-red fw-bold mb-0">PRODUCT APPROVAL PENDING TO GO-LIVE  </CardTitle>
                       
                        </div>    
                        <div className="approval">
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        
                                        <th>PRODUCT DETAILS</th>
                                        <th></th>
                                        <th>SPECIFICATIONS</th>
                                        <th>PACKAGING & WEIGHT</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr className="address bg-light-green" style={{borderBottom:"0px !important"}}>
                                      <td style={{width:"21%"}}>
                                        <div className="product-info text-center mb-3">
                                        <a href="#" className="black-btn d-block mb-3 p-2 font-size-13">Drag Display Image here or browse image</a>
                                        <img src={Product} className=" mb-3" style={{width:"85px"}} alt="..." />
                                        <div className="d-flex justify-content-evenly mb-1 align-items-center">
                                          <img src={Mi} style={{width:"15px" ,height:"15px" }} />
                                          <div className="sale unbox">
                                                  <img src={Unbox} />
                                                  <span>Unboxed</span>
                                                  </div>
                                        </div>
                                        <div className="text-start model">
                                        <p className="mb-0 fw-bold text-black">₹ &#8377;  10,990</p>
                                        <p className="mb-0 text-black font-size-18">REDMI Go</p>
                                        <p className="mb-0 text-black font-size-18">(Red, 1GB + 8GB)</p>
                                        </div>
                                      </div>

                                    <div className="d-flex mb-3 justify-content-between">
                                      <div className="product-info text-center gallery-pic">
                                      <img src={Back} className="mb-1" />
                                      <div className="sale back unbox">
                                                  <img src={BackBg}  />
                                                  <span>BACK</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Left} className="mb-1" />
                                      <div className="sale left unbox">
                                                  <img src={LeftBg}  />
                                                  <span>Left</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Right} className="mb-1" />
                                      <div className="sale right unbox ">
                                                  <img src={RightBg}  />
                                                  <span>Right</span>
                                                  </div>
                                      </div>
                                      </div>

                                      <a href="#"><span class="badge yellow-btn live font-size-17 w-100">VIEW IN APP</span></a>
                                       
                                      </td>
                                      
                                        <td style={{width: "33%"}} width="200px" colSpan="-20"> 
                                          
                                            
                                            
                                                    <div className="product-display">
                                                    <div className="d-flex display-name mb-2">
                                            <tr className="fw-bold mb-1 d-block">Product Display Name</tr>
                                        <tr className="value-input w-100">
                                               <input type="text" value="REDMI Go-RED/1GB+8GB" className="text-blue-purple product-input" />
                                           </tr>
                                        </div>
                                      
                                      <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> Model Name / Number </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="REDMI Go" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MRP </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="₹4999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Color Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Red <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Blue <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Storage Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">1GB + 8GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">2GB + 16GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    </div>
                                                  
                                        </td>  
                                                 
                                            
                                 
                                        <td style={{paddingRight:"85px"}}>
                                    
                                        <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Camera</tr>
                                                        <tr className="d-flex align-items-center camera" style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>8MP</option>
                                                            <option>16MP</option>
                                                            <option>32MP</option>
                                                            <option>64MP</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Display Size</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">SIM Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Network Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>4G</option>
                                                            <option>3G</option>
                                                            <option>5G</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        
                                        </td>
                                        <td style={{width:"24%"}}>
                                          <div className="weight">
                                          <div>
                                        <tr className="fw-bold mb-1 d-block weight-line"> MASTER PACKAGE INFORMATION</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MSTR. UNIT</tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MSTR. WEIGHT (KG) </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                    </div>
                                          </div>

                                          <div>
                                        <tr className="fw-bold mb-1 d-block text-uppercase"> Master PACKAGE Dimensions (cm)</tr>
                                        
                                        <div className="d-flex justify-content-between mb-0">
                                        <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> LENGHT</tr>
                                                      </div>
                                                      
                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> BREADTH </tr>
                                                      </div>

                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> HEIGHT </tr>
                                                      </div>
                                                    </div>
                                          </div>
                                          </div>

                                          <div className="weight">
                                          <div>
                                        <tr className="fw-bold mb-1 d-block weight-line"> SINGLE PACKAGE INFORMATION</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> UNIT / MOQ</tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> SNGL. WEIGHT (KG) </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                    </div>
                                          </div>

                                          <div>
                                        <tr className="fw-bold mb-1 d-block text-uppercase"> SINGLE PACKAGE Dimensions (cm)</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> LENGHT</tr>
                                                      </div>
                                                      
                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> BREADTH </tr>
                                                      </div>

                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> HEIGHT </tr>
                                                      </div>
                                                    </div>
                                          </div>
                                          </div>
                                        </td>
                                        
                                        

                                      
                                 </tr>
                                    

                                    
                                </tbody>
                            </Table>
                        </div>

                        <div className="border-line bg-light-green">
                                        <div className="d-flex justify-content-between" style={{width:"70%" , marginTop:"-143px", marginLeft:"330px" ,paddingBottom:"80px" }}>
                                        <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">BRAND</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>RED MI</option>
                                                            <option>VIVO</option>
                                                            <option>OPPO</option>
                                                            <option>ONEPLUS</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2 catergory">
                                                          <tr className="fw-bold mb-1 d-block"> CATEGORY</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative  color mb-2">
                                                          <tr className="fw-bold mb-1 d-block"> PRODUCT TYPE</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>UNBOXED</option>
                                                            <option>BOXED</option>
                                              
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        </div>
                                    </div>


                        <div className="bg-light-green" style={{padding:"20px" , overflow:"hidden"}}>
                        <Row className="mb-2 bg-light-green">
                          <Col md={8}>
                            <Row>
                              <Col md={5}>
                                <div className="d-flex flex-wrap">
                                <a href="#"className="pending-approval me-2 mb-1" >PENDING-SPECIFICATION-APPROVAL</a>
                                <a href="#" className="text-red"><u className="font-size-8 ">DEACTIVE NOW</u></a>
                                <p className="font-size-11 mb-1">Received Request from WH on :  28 May, 2020 2:10 pm</p>
                                </div>
                                <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                ALL INFORMATION CHECKED & VERIFIED
                                                </label>
                                            </div>
                              </Col>

                                      <Col md={7}>
                                            <tr className="fw-bold mb-2 d-block">Live-STOCKS</tr>
                                            <div className="d-flex align-items-center">
                                        <div className="value-input me-2">
                                               <input type="text"  value="1000 Units" className="text-blue-purple"/>
                                           </div>
                                        
                                        <div className="font-size-11">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                            
                                                <div className="font-size-11 mb-0 d-block">DEALSDRAY ONLINE PVT LTD </div>
                                                </div>
                                                </div>
                                              
                                                
                                                
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                     
                       </div>
                       </div>

                       <div className="approval">
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                
                                <tbody>
                                
                                    <tr className="address bg-light-pink" style={{borderBottom:"0px !important"}}>
                                      <td style={{width:"21%"}}>
                                        <div className="product-info text-center mb-3">
                                        <a href="#" className="black-btn d-block mb-3 p-2 font-size-13">Drag Display Image here or browse image</a>
                                        <img src={Product} className=" mb-3" style={{width:"85px"}} alt="..." />
                                        <div className="d-flex justify-content-evenly mb-1 align-items-center">
                                          <img src={Mi} style={{width:"15px" ,height:"15px" }} />
                                          <div className="sale unbox">
                                                  <img src={Unbox} />
                                                  <span>Unboxed</span>
                                                  </div>
                                        </div>
                                        <div className="text-start model">
                                        <p className="mb-0 fw-bold text-black">₹ &#8377;  10,990</p>
                                        <p className="mb-0 text-black font-size-18">REDMI Go</p>
                                        <p className="mb-0 text-black font-size-18">(Red, 1GB + 8GB)</p>
                                        </div>
                                      </div>

                                    <div className="d-flex mb-3 justify-content-between">
                                      <div className="product-info text-center gallery-pic">
                                      <img src={Back} className="mb-1" />
                                      <div className="sale back unbox">
                                                  <img src={BackBg}  />
                                                  <span>BACK</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Left} className="mb-1" />
                                      <div className="sale left unbox">
                                                  <img src={LeftBg}  />
                                                  <span>Left</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Right} className="mb-1" />
                                      <div className="sale right unbox ">
                                                  <img src={RightBg}  />
                                                  <span>Right</span>
                                                  </div>
                                      </div>
                                      </div>

                                      <a href="#"><span class="badge yellow-btn live font-size-17 w-100">VIEW IN APP</span></a>
                                       
                                      </td>
                                      
                                        <td style={{width: "33%"}} width="200px" colSpan="-20"> 
                                          
                                            
                                            
                                                    <div className="product-display">
                                                    <div className="d-flex display-name mb-2">
                                            <tr className="fw-bold mb-1 d-block">Product Display Name</tr>
                                        <tr className="value-input w-100">
                                               <input type="text" value="REDMI Go-RED/1GB+8GB" className="text-blue-purple product-input" />
                                           </tr>
                                        </div>
                                      
                                      <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> Model Name / Number </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="REDMI Go" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MRP </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="₹4999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Color Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Red <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Blue <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Storage Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">1GB + 8GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">2GB + 16GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    </div>
                                                  
                                        </td>  
                                                 
                                            
                                 
                                        <td style={{paddingRight:"85px"}}>
                                    
                                        <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Camera</tr>
                                                        <tr className="d-flex align-items-center camera" style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>8MP</option>
                                                            <option>16MP</option>
                                                            <option>32MP</option>
                                                            <option>64MP</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Display Size</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">SIM Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Network Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>4G</option>
                                                            <option>3G</option>
                                                            <option>5G</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        
                                        </td>
                                        <td style={{width:"24%"}}>
                                          <div className="weight">
                                          <div>
                                        <tr className="fw-bold mb-1 d-block weight-line"> MASTER PACKAGE INFORMATION</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MSTR. UNIT</tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MSTR. WEIGHT (KG) </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                    </div>
                                          </div>

                                          <div>
                                        <tr className="fw-bold mb-1 d-block text-uppercase"> Master PACKAGE Dimensions (cm)</tr>
                                        
                                        <div className="d-flex justify-content-between mb-0">
                                        <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> LENGHT</tr>
                                                      </div>
                                                      
                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> BREADTH </tr>
                                                      </div>

                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> HEIGHT </tr>
                                                      </div>
                                                    </div>
                                          </div>
                                          </div>

                                          <div className="weight">
                                          <div>
                                        <tr className="fw-bold mb-1 d-block weight-line"> SINGLE PACKAGE INFORMATION</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> UNIT / MOQ</tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> SNGL. WEIGHT (KG) </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="999.0" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                    </div>
                                          </div>

                                          <div>
                                        <tr className="fw-bold mb-1 d-block text-uppercase"> SINGLE PACKAGE Dimensions (cm)</tr>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> LENGHT</tr>
                                                      </div>
                                                      
                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> BREADTH </tr>
                                                      </div>

                                                      <div className="">
                                                      <tr className="value-input">
                                                            <input type="text" value="9999" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                        <tr className="fw-bold mb-1 d-block"> HEIGHT </tr>
                                                      </div>
                                                    </div>
                                          </div>
                                          </div>
                                        </td>
                                        
                                        

                                      
                                 </tr>
                                    

                                    
                                </tbody>
                            </Table>
                        </div>

                        <div className="border-line bg-light-pink">
                                        <div className="d-flex justify-content-between" style={{width:"70%" , marginTop:"-143px", marginLeft:"330px" ,paddingBottom:"80px" }}>
                                        <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">BRAND</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>RED MI</option>
                                                            <option>VIVO</option>
                                                            <option>OPPO</option>
                                                            <option>ONEPLUS</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2 catergory">
                                                          <tr className="fw-bold mb-1 d-block"> CATEGORY</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative  color mb-2">
                                                          <tr className="fw-bold mb-1 d-block"> PRODUCT TYPE</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>UNBOXED</option>
                                                            <option>BOXED</option>
                                              
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        </div>
                                    </div>


                        <div className="bg-light-pink" style={{padding:"20px" , overflow:"hidden"}}>
                        <Row className="mb-2 bg-light-pink">
                          <Col md={8}>
                            <Row>
                              <Col md={5}>
                                <div className="d-flex flex-wrap">
                                <a href="#"className="pending-approval me-2 mb-1" >PENDING-SPECIFICATION-APPROVAL</a>
                                <a href="#" className="text-red"><u className="font-size-8 ">DEACTIVE NOW</u></a>
                                <p className="font-size-11 mb-1">Received Request from WH on :  28 May, 2020 2:10 pm</p>
                                </div>
                                <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                ALL INFORMATION CHECKED & VERIFIED
                                                </label>
                                            </div>
                              </Col>

                                      <Col md={7}>
                                            <tr className="fw-bold mb-2 d-block">Live-STOCKS</tr>
                                            <div className="d-flex align-items-center">
                                        <div className="value-input me-2">
                                               <input type="text"  value="1000 Units" className="text-blue-purple"/>
                                           </div>
                                        
                                        <div className="font-size-11">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                            
                                                <div className="font-size-11 mb-0 d-block">DEALSDRAY ONLINE PVT LTD </div>
                                                </div>
                                                </div>
                                              
                                                
                                                
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                     
                       </div>
                       </div>
                    
                       <div className="approval">
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                
                                <tbody>
                                
                                    <tr className="address bg-light-green" style={{borderBottom:"0px !important"}}>
                                      <td style={{width:"21%"}}>
                                        <div className="product-info text-center mb-3">
                                        <a href="#" className="black-btn d-block mb-3 p-2 font-size-13">Drag Display Image here or browse image</a>
                                        <img src={Product} className=" mb-3" style={{width:"85px"}} alt="..." />
                                        <div className="d-flex justify-content-evenly mb-1 align-items-center">
                                          <img src={Mi} style={{width:"15px" ,height:"15px" }} />
                                          <div className="sale unbox">
                                                  <img src={Unbox} />
                                                  <span>Unboxed</span>
                                                  </div>
                                        </div>
                                        <div className="text-start model">
                                        <p className="mb-0 fw-bold text-black">₹ &#8377;  10,990</p>
                                        <p className="mb-0 text-black font-size-18">REDMI Go</p>
                                        <p className="mb-0 text-black font-size-18">(Red, 1GB + 8GB)</p>
                                        </div>
                                      </div>

                                    <div className="d-flex mb-3 justify-content-between">
                                      <div className="product-info text-center gallery-pic">
                                      <img src={Back} className="mb-1" />
                                      <div className="sale back unbox">
                                                  <img src={BackBg}  />
                                                  <span>BACK</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Left} className="mb-1" />
                                      <div className="sale left unbox">
                                                  <img src={LeftBg}  />
                                                  <span>Left</span>
                                                  </div>
                                      </div>

                                      <div className="product-info text-center gallery-pic">
                                      <img src={Right} className="mb-1" />
                                      <div className="sale right unbox ">
                                                  <img src={RightBg}  />
                                                  <span>Right</span>
                                                  </div>
                                      </div>
                                      </div>

                                      <a href="#"><span class="badge yellow-btn live font-size-17 w-100">VIEW IN APP</span></a>
                                       
                                      </td>
                                      
                                        <td style={{width: "33%"}} width="200px" colSpan="-20"> 
                                          
                                            
                                            
                                                    <div className="product-display">
                                                    <div className="d-flex display-name mb-2">
                                            <tr className="fw-bold mb-1 d-block">Product Display Name</tr>
                                        <tr className="value-input w-100">
                                               <input type="text" value="REDMI Go-RED/1GB+8GB" className="text-blue-purple product-input" />
                                           </tr>
                                        </div>
                                      
                                      <div className="d-flex justify-content-between mb-2">
                                        <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> Model Name / Number </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="REDMI Go" className="text-blue-purple product-input model-input" />
                                                        </tr>
                                                      </div>
                                                      <div className="">
                                                          <tr className="fw-bold mb-1 d-block"> MRP </tr>
                                                      <tr className="value-input">
                                                            <input type="text" value="₹4999.0" className="text-blue-purple product-input mrp-input" />
                                                        </tr>
                                                      </div>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Color Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Red <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">Blue <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Storage Variant</tr>
                                                        <tr className="d-flex align-items-center ">
                                                      <tr className="color-bg">
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">1GB + 8GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      <a href="#"><span className="badge bg-purple font-size-11 text-uppercase">2GB + 16GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                                                      </tr>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    </div>
                                                  
                                        </td>  
                                                 
                                            
                                 
                                        <td style={{paddingRight:"85px"}}>
                                    
                                        <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Camera</tr>
                                                        <tr className="d-flex align-items-center camera" style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>8MP</option>
                                                            <option>16MP</option>
                                                            <option>32MP</option>
                                                            <option>64MP</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Display Size</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">SIM Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2" style={{width:"200px"}}>
                                                          <tr className="fw-bold mb-1 d-block">Network Type</tr>
                                                        <tr className="d-flex align-items-center camera " style={{width:"100%"}}>
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>4G</option>
                                                            <option>3G</option>
                                                            <option>5G</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        
                                        </td>
                                       
                                        

                                      
                                 </tr>
                                    

                                    
                                </tbody>
                            </Table>
                        </div>

                        <div className="border-line bg-light-green">
                                        <div className="d-flex justify-content-between" style={{width:"70%" , marginTop:"-143px", marginLeft:"330px" ,paddingBottom:"80px" }}>
                                        <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">BRAND</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>RED MI</option>
                                                            <option>VIVO</option>
                                                            <option>OPPO</option>
                                                            <option>ONEPLUS</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2 catergory">
                                                          <tr className="fw-bold mb-1 d-block"> CATEGORY</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
                                                            <option>Mobiles & Tab » Smartphones » UNBOXED</option>
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative  color mb-2">
                                                          <tr className="fw-bold mb-1 d-block"> PRODUCT TYPE</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>UNBOXED</option>
                                                            <option>BOXED</option>
                                              
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        </div>
                                    </div>


                        <div className="bg-light-green" style={{padding:"20px" , overflow:"hidden"}}>
                        <Row className="mb-2 bg-light-green">
                          <Col md={8}>
                            <Row>
                              <Col md={5}>
                                <div className="d-flex flex-wrap">
                                <a href="#"className="pending-approval me-2 mb-1" >PENDING-SPECIFICATION-APPROVAL</a>
                                <a href="#" className="text-red"><u className="font-size-8 ">DEACTIVE NOW</u></a>
                                <p className="font-size-11 mb-1">Received Request from WH on :  28 May, 2020 2:10 pm</p>
                                </div>
                                <div className="form-check form-switch form-switch-md me-3" style={{paddingLeft:"2.7rem"}}>
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                  
                                                />
                                                <label
                                                  className="form-check-label font-size-10"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                ALL INFORMATION CHECKED & VERIFIED
                                                </label>
                                            </div>
                              </Col>

                                      <Col md={7}>
                                            <tr className="fw-bold mb-2 d-block">Live-STOCKS</tr>
                                            <div className="d-flex align-items-center">
                                        <div className="value-input me-2">
                                               <input type="text"  value="1000 Units" className="text-blue-purple"/>
                                           </div>
                                        
                                        <div className="font-size-11">
                                                Warehouse Details : <span className="text-blue-purple fw-bold">Gurgaon WH, Haryana </span>
                                            
                                                <div className="font-size-11 mb-0 d-block">DEALSDRAY ONLINE PVT LTD </div>
                                                </div>
                                                </div>
                                              
                                                
                                                
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                      
                       </div>
                       </div>

                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;