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
                        <CardTitle className="h5 font-size-16 text-red fw-bold mb-0">STOCK AVAILABLE BUT LISTING PENDING ON DEALSDRAY  </CardTitle>
                       
                        </div>    
                        <div className="table-responsive mb-4">
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
                                    <tr className="address" style={{borderBottom:"0px !important"}}>
                                      <td>
                                        <a href="#" className="black-btn d-block">Drag Display Image here or browse image</a>

                                        {/* <div className="product-detail">
                          <Row>
                            <Col xs="3">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1")
                                    }}
                                  >
                                    <img
                                      src={product.image}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.image,
                                          1
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[0]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[0],
                                          2
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[1]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[1],
                                          3
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "4",
                                    })}
                                    onClick={() => {
                                      toggleTab("4")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[2]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[2],
                                          4
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col xs="9">
                              <TabContent activeTab={activeTab} className="position-relative">
                                <div className="product-wishlist">
                                  <Link to="#">
                                    <i className="mdi mdi-heart-outline"></i>
                                  </Link>
                                </div>
                                <TabPane tabId="1">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <Row className="text-center mt-2">
                                <div className="col-sm-6 d-grid">
                                  <Button
                                    type="button"
                                    color="primary"
                                    className="btn-block waves-effect waves-light mt-2 me-1"
                                  >
                                    <i className="uil uil-shopping-cart-alt me-2"></i> Add to cart
                                </Button>
                                </div>
                                <div className="col-sm-6 d-grid">
                                  <Button
                                    type="button"
                                    color="light"
                                    className="btn-block waves-effect  mt-2 waves-light"
                                  >
                                    <i className="uil uil-shopping-basket me-2"></i>Buy now
                                </Button>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </div> */}
                                      </td>
                                        <td style={{width: "33%"}}> 
                                          
                                                {/* <td>
                                                <div className="product-detail">
                          <Row>
                            <Col xs="3">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1")
                                    }}
                                  >
                                    <img
                                      src={product.image}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.image,
                                          1
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[0]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[0],
                                          2
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[1]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[1],
                                          3
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "4",
                                    })}
                                    onClick={() => {
                                      toggleTab("4")
                                    }}
                                  >
                                    <img
                                      src={product.extraimgs[2]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.extraimgs[2],
                                          4
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block tab-img rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col xs="9">
                              <TabContent activeTab={activeTab} className="position-relative">
                                <div className="product-wishlist">
                                  <Link to="#">
                                    <i className="mdi mdi-heart-outline"></i>
                                  </Link>
                                </div>
                                <TabPane tabId="1">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div className="product-img">
                                    <img
                                      src={product.image}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <Row className="text-center mt-2">
                                <div className="col-sm-6 d-grid">
                                  <Button
                                    type="button"
                                    color="primary"
                                    className="btn-block waves-effect waves-light mt-2 me-1"
                                  >
                                    <i className="uil uil-shopping-cart-alt me-2"></i> Add to cart
                                </Button>
                                </div>
                                <div className="col-sm-6 d-grid">
                                  <Button
                                    type="button"
                                    color="light"
                                    className="btn-block waves-effect  mt-2 waves-light"
                                  >
                                    <i className="uil uil-shopping-basket me-2"></i>Buy now
                                </Button>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                                                </div>
                                                </td> */}
                                            
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
                                    
                                        <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Camera</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>8MP</option>
                                                            <option>16MP</option>
                                                            <option>32MP</option>
                                                            <option>64MP</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Display Size</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">SIM Type</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>5.7 inch</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>

                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block">Network Type</tr>
                                                        <tr className="d-flex align-items-center camera ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>4G</option>
                                                            <option>3G</option>
                                                            <option>5G</option>
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                        
                                        </td>
                                        <td>
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
                                    
                                <tr className=" border-line" >
                                  <td></td>
                                  <td className="d-flex justify-content-between" style={{width:"200%"}}> 
                                  <tr>
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

                                                   

                                                    
                                                    </tr>

                                                    <tr> <div className="position-relative display-name color mb-2">
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
                                                    </tr>

                                                    <tr>
                                                    <div className="position-relative display-name color mb-2">
                                                          <tr className="fw-bold mb-1 d-block"> PRODUCT TYPE</tr>
                                                        <tr className="d-flex align-items-center camera catergory ">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>UNBOXED</option>
                                                            <option>BOXED</option>
                                              
    
                                            

                                            </Input>
                                                      <tr className="fw-bold mb-0 d-block manage"><i class="fa fa-fw fa-cog font-size-14"></i><a href="#" className="text-green font-size-13"> Manage</a></tr>
                                                    </tr>
                                                    </div>
                                                    </tr>
                                  </td>
                                  
                                </tr>    
                                    
                                </tbody>
                            </Table>
                        </div>

                        <Row className="mb-2">
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

                        <Row className="align-items-end">
                          <Col md={3}>
                        <div className=" display-name color mb-0">
                                                          <tr className="fw-bold mb-1 d-block font-size-13">PRODUCT DEACTIVATION REASON</tr>
                                                        <tr className="d-flex align-items-center camera product-reason">
                                                        <Input type="select" className="form-select mb-0">
                                                            <option>SELECT PRODUCT DEACTIVATION REASON</option>
                                                            <option>5.9 inch</option>
                                                            <option>6.3 inch</option>
                                                            <option>6.5 inch</option>
                                            

                                            </Input>
                                                      </tr>
                                                    </div>
                           </Col>
                           <Col md={3}>
                           <tr className="fw-bold mb-1 d-block">Enter Your Remarks</tr>
                                  <input type="type" className="w-100" />
                           </Col>

                           <Col md={3}>
                           <a href="#" className="font-size-13 decrease-btn me-2">Deactive This Product</a>
                           <a href="#" className="font-size-13 cancel-btn me-0">Cancel</a>
                           </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;