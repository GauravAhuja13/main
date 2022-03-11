import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
    Card,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    FormGroup,
    Row,
    Label,
    Form,
    UncontrolledDropdown,
    Button
} from "reactstrap";

//SimpleBar
import SimpleBar from "simplebar-react";

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import avatar4 from "../../assets/images/users/avatar-4.jpg";
import success from "../../assets/images/users/success.png"
import iconsuccess from "../../assets/images/users/icon-success.png"
import successred from "../../assets/images/users/success-red.png"


import {
    addMessage,
    getChats,
    getGroups,
    getMessages,
} from "../../store/actions";

const Chat = props => {
    const { chats, groups, messages } = props;
    const [messageBox, setMessageBox] = useState(null);
    const [radioButtonImg , setRadioButtonImg] = useState(iconsuccess);
  const [singlebtn1, setSinglebtn1] = useState(false);
  const [singlebtn2, setSinglebtn2] = useState(false);
  const [singlebtn3, setSinglebtn3] = useState(false);
    // const Chat_Box_Username2 = "Henry Wells"
    const [currentRoomId, setCurrentRoomId] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState({
        name: "Marcus",
        isActive: true,
    });
    const [notification_Menu, setnotification_Menu] = useState(false);
    const [Chat_Box_Username, setChat_Box_Username] = useState("Designer");
    const [curMessage, setcurMessage] = useState("");

    const { onGetChats, onGetGroups, onGetMessages } = props;

    useEffect(() => {
        onGetChats();
        onGetGroups();
        onGetMessages(currentRoomId);
    }, [onGetChats, onGetGroups, onGetMessages, currentRoomId]);

    const scrollToBottom = useCallback(() => {
        if (messageBox) {
            messageBox.scrollTop = messageBox.scrollHeight + 1000;
        }
    }, [messageBox]);

    useEffect(() => {
        if (!isEmpty(messages)) scrollToBottom();
    }, [messages, scrollToBottom]);


    const toggleNotification = () => {
        setnotification_Menu(!notification_Menu);
    };

    //Use For Chat Box
    const userChatOpen = (id, name, status, roomId) => {
        const { onGetMessages } = props;
        setChat_Box_Username(name);
        setCurrentRoomId(roomId);
        onGetMessages(roomId);
    };

    const addMessage = (roomId, sender) => {
        const { onAddMessage } = props;
        const message = {
            id: Math.floor(Math.random() * 100),
            roomId,
            sender,
            message: curMessage,
            createdAt: new Date(),
        };
        setcurMessage("");
        onAddMessage(message);
    };

    const onKeyPress = e => {
        const { key, value } = e;
        if (key === "Enter") {
            setcurMessage(value);
            addMessage(currentRoomId, currentUser.name);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Listing" breadcrumbItem="Add New Product" />

                    
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW PRODUCT </Link>
                                        </h5>
                                      
                                    </div>

                                  
                                </div>

                              
                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold text-uppercase">
                                        Product Identifier
                                        </h5>
                                        <p className="text-muted mb-0 font-size-13">
                                        European Article Number. Enter product’s 14-digit code.
                                        </p>
                                </div>

                               
                                <Row>
                                        <Col md="12" className="d-flex justify-content-center ">
                                        <Col md={4}>
                                            <Col md={12} className="mb-4">
                                        <div className="search-box ml-2 specification">
                          <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                            <div className="position-relative dropdwon search-code">
                              <Input onClick={() => setSinglebtn1(!singlebtn1)}
                                type="text"
                                className="orm-control bg-light border-light rounded"
                                value="search , scan or Add EAN Code"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-barcode search-icon cross barcode"></i>
                          
                            
                       <div>
                        <DropdownMenu>
                          <DropdownItem className="green"> :) new EAN code in system, let's create a new product</DropdownItem>
                          <div className="d-flex next justify-content-end align-items-center">
                            
                            <div>
                        <a href="#"><span className="badge bg-red font-size-13">next </span></a>
                        <a href="#"><span className="badge bg-red bg-grey font-size-13">cancel </span></a>
                            </div>
                          </div>
                        </DropdownMenu>
                        </div>
                        
                        
                        </div>
                      </Dropdown>
                          </div>
                         
                                            </Col>


                                           
                                </Col>
                                </Col>
                               
                                    </Row>
                               
                               <div className="d-flex justify-content-center">
                                 <a href="#" className="fw-bold font-size-14 me-4">CASE1; EAN CODE NOT EXISTS ON DEALSDRAY</a>
                                 <a href="#" className="fw-bold font-size-14 me-4">CASE2; EAN CODE EXISTS ON DEALSDRAY</a>
                                 <a href="#" className="fw-bold font-size-14">CASE3; PRODUCT WITHOUT EAN CODE</a>
                               </div>
                            </div>
                            
                            
                        </Card>
                        </Col>
                        </Row>
               
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW PRODUCT </Link>
                                        </h5>
                                      
                                    </div>

                                  
                                </div>

                              
                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold text-uppercase">
                                        Product Identifier
                                        </h5>
                                        <p className="text-muted mb-0 font-size-13">
                                        European Article Number. Enter product’s 14-digit code.
                                        </p>
                                </div>

                               
                                <Row>
                                        <Col md="12" className="d-flex justify-content-center ">
                                        <Col md={6}>
                                            <Col md={12} className="mb-4">
                                        <div className="search-box ml-2 specification">
                          <Dropdown
                        isOpen={singlebtn3}
                        toggle={() => setSinglebtn3(!singlebtn3)}
                        className="mt-4 mt-sm-0"
                      >
                            <div className="position-relative dropdwon search-code">
                              <Input onClick={() => setSinglebtn3(!singlebtn3)}
                                type="text"
                                className="orm-control bg-light border-light rounded"
                                value="search , scan or Add EAN Code"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-barcode search-icon cross barcode"></i>
                          
                            
                       <div>
                        <DropdownMenu>
                          <DropdownItem className="red"> :( we already have product on this EAN code</DropdownItem>
                          <DropdownItem className="justify-content-between">
                          <span className="type"><u>REDMI GO 1-16 GB, RED, BLUE, BLACK GREEN</u> </span> <span className="option"><a href="#" className="red-sm-btn font-size-11 me-2"><i class="fa fa-fw fa-plus font-size-11 me-1"></i>add variant </a>
                          <a href="#" className="green-sm-btn font-size-11">fresh devices </a>
                          </span>
                          </DropdownItem>
                          <DropdownItem className="justify-content-between">
                          <span className="type"><u>REDMI GO 1-16 GB, RED, BLUE, BLACK GREEN</u> </span> <span className="option"><a href="#" className="red-sm-btn font-size-11 me-2"><i class="fa fa-fw fa-plus font-size-11 me-1"></i>add variant </a>
                          <a href="#" className="light-blue-sm-btn font-size-11">activated devices </a>
                          </span>
                          </DropdownItem>
                          <DropdownItem className="justify-content-between">
                          <span className="type"><u>REDMI GO 1-16 GB, RED, BLUE, BLACK GREEN</u> </span> <span className="option"><a href="#" className="red-sm-btn font-size-11 me-2"><i class="fa fa-fw fa-plus font-size-11 me-1"></i>add variant </a>
                          <a href="#" className="yellow-sm-btn font-size-11">refurbished devices </a>
                          </span>
                          </DropdownItem>
                          <DropdownItem className="justify-content-between mb-3">
                          <span className="type"><u>REDMI GO 1-16 GB, RED, BLUE, BLACK GREEN</u> </span> <span className="option"><a href="#" className="red-sm-btn font-size-11 me-2"><i class="fa fa-fw fa-plus font-size-11 me-1"></i>add variant </a>
                          <a href="#" className="yellow-sm-btn font-size-11">prexo devices </a>
                          </span>
                          </DropdownItem>
                          <div className="d-flex next justify-content-end align-items-center">
                            
                            <div>
                        <a href="#"><span className="badge bg-red font-size-13">CONTINUE WITH NEW PRODUCT CREATION  </span></a>
                        <a href="#"><span className="badge bg-red bg-grey font-size-13">cancel </span></a>
                            </div>
                          </div>
                        </DropdownMenu>
                        </div>
                        
                        
                        </div>
                      </Dropdown>
                          </div>
                         
                                            </Col>


                                           
                                </Col>
                                </Col>
                               
                                    </Row>
                               
                               <div className="d-flex justify-content-center">
                                 <a href="#" className="fw-bold font-size-14 me-4">CASE1; EAN CODE NOT EXISTS ON DEALSDRAY</a>
                                 <a href="#" className="fw-bold font-size-14 me-4">CASE2; EAN CODE EXISTS ON DEALSDRAY</a>
                                 <a href="#" className="fw-bold font-size-14">CASE3; PRODUCT WITHOUT EAN CODE</a>
                               </div>
                            </div>
                            
                            
                        </Card>
                        </Col>
                        </Row>

                    <Row>
                    <Col md={12}>
                      <Card>
                        <div className="p-3 px-4">
                      <div className="">
                                    <h5 className="font-size-16 mt-0 mb-3">
                                            <Link to="#" className="font-size-16 mt-0 mb-1 text-red fw-bold text-uppercase mb-2 d-block">PRODUCT TYPE </Link>
                                            </h5>
                                            <div className="d-flex">
                                            {/* <div className="d-flex align-items-center me-3">
                                            <img src={success} className="avatar-xs me-1 " alt="..." />
                                            <h5 className="font-size-12 mb-0">
                                            ROOT CATEGORY
                                            </h5>
                                            </div> */}
                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img onClick={()=>{setRadioButtonImg(success)}} src={radioButtonImg} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  FRESH DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>
                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type" style={{paddingLeft:"1rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  ACTIVATED DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>

                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type " style={{paddingLeft:"1rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  UNBOXED DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>

                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type" style={{paddingLeft:"1rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  BRAND REFURBISHED DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>

                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type" style={{paddingLeft:"1rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  DD REFURBISHED DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>

                                            <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type" style={{paddingLeft:"1rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  PREXO (USED) DEVICES
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>
                                            </div>
                                            </div>
                                    </div>
                                    
                      </Card>
                    </Col>
                    </Row>


                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        BRANDS AND CATEGORY
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={4} className="mb-1">
                                      <div>
                                    <Input type="select" className="form-select warranty mb-1">
                                <option>Select or Add Category</option>
                                <option>Mobiles & Tab » Smartphones » All Smartphones</option>
                                <option>Mobiles & Tab » Smartphones » PREXO Smartphones</option>
                                <option>Mobiles & Tab » Smartphones » UNBOXED Smartphones</option>
                              </Input>
                              
                                   <p className="mb-0"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Categories</a> </p>
                                </div>
                                </Col>

                                   <Col md={4} className="mb-1">
                                     <div>
                                    <Input type="select" className="form-select warranty mb-1">
                                <option>Select or Add Brands</option>
                                <option>REDMI</option>
                                <option>REALME</option>
                                <option>MOTOROLA</option>
                              </Input>
                                   <p className="mb-0"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Brand</a> </p>
                                    </div>
                                    </Col>

                                    <Col md={4} className="mb-1">
                                     <div>
                                    <Input type="select" className="form-select warranty mb-1">
                                <option>Select or Add Modul Name / Number</option>
                                <option>Note 7</option>
                                <option>Note 7 Pro</option>
                                <option>Galaxy Note 8</option>
                              </Input>
                                   <p className="mb-0"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green">  Manage Model Name / Number</a> </p>
                                    </div>
                                    </Col>
                                </Row>
                               
                            </div>
                            <p className="text-muted mb-0 font-size-13">
                                        European Article Number. Enter product’s 14-digit code.
                                        </p>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT DISPLAY NAME
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={12} className="mb-1">
                                      <div className="display">
                                    <span>REDMI Note 7</span>
                              <i className="mdi mdi-close search-icon cross"></i>
                                            
                              
                                </div>
                                </Col>

                                  
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        SERIAL NUMBER TRACKING FOR THIS PRODUCT
                                        </h5>
                                </div>

                              <div className="d-flex">
                                <div className="form-check form-switch form-switch-md me-4  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img onClick={()=>{setRadioButtonImg(success)}} src={radioButtonImg} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  SERIAL KEY AVAILABLE ON THIS PRODUCT
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>

                                <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img  src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12 text-uppercase"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  Serial key series to be created at dealsdray end
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>
                               </div>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT VISIBLITY
                                        </h5>
                                </div>

                              <div className="d-flex">
                                <div className="form-check form-switch form-switch-md me-4  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img onClick={()=>{setRadioButtonImg(success)}} src={radioButtonImg} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  SHOW TO ALL VENDOR
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>

                                <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img  src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12 text-uppercase"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  SHOW TO SELECTED VENDOR
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>
                               </div>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>


                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT VARIANT AVAILABLITY?
                                        </h5>
                                </div>

                              <div className="d-flex">
                                <div className="form-check form-switch form-switch-md me-4  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img onClick={()=>{setRadioButtonImg(success)}} src={radioButtonImg} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  MULTIPLE VARIANT AVIALBLE FOR THIS PRODUCT
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>

                                <div className="form-check form-switch form-switch-md me-0  d-flex align-items-center product-type mb-3" style={{paddingLeft:"0rem"}}>
                                                <input
                                                  type="radio"
                                                  className="form-check-input"
                                                  id="customSwitchsizemd"
                                                />
                                                  <img  src={iconsuccess} className="avatar-xs me-1 " alt="..." />
                                              
                                                <label
                                                  className="form-check-label font-size-12 text-uppercase"
                                                  htmlFor="customSwitchsizemd"
                                                >
                                                  VARIANT NOT AVIALBLE FOR THIS PRODUCT
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                </div>
                               </div>
                               <Row className="multiple">
                               <Row className="mb-3">
                          <Col md={2}>
                            <label className="text-green d-block">VARIANT</label>
                            <label className="d-block">STORAGE</label>
                          </Col>
                          <Col md={5}>
                          <label className="text-green d-block">OPTIONS</label>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">1GB + 8GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">2GB +16GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>

                      <Row className="mb-4">
                          <Col md={2}>
                            <label className=" d-block">COLORS</label>
                           
                          </Col>
                          <Col md={5}>
                            <div className="option-bg color">
                            <a href="#"><span className="badge bg-purple font-size-11">RED <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">BLACK <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">BLUE <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>
                      </Row>

                      <Row className="product-table">
                       <div className="product-name-head mb-3">
                                <h2 className="mb-0 product">PRODUCT NAME</h2>
                                <div className="">
                                <h2 className="mb-0 sku">SKU</h2>
                                <span className="text-green d-block generate">Generate SKU</span>
                                <span className="text-red">Clear</span>
                                </div>
                                <div className="">
                                <h2 className="mb-0 mrp">MRP</h2>
                                <span className="text-green d-block generate">Generate SKU</span>
                                <span className="text-red">Clear</span>
                                </div>
                                <h2 className="remove"></h2>
                       </div>

                       <div className="d-flex justify-content-around align-items-center mb-3">
                       <div className="option-bg color product">
                            <span>REDMI Go-RED/1GB+8GB</span>
                        </div>
                        <div className="option-bg color sku">
                            <span>MIGO-RED-1GB</span>
                        </div>
                        <div className="option-bg color mrp">
                            <span>5999</span>
                        </div>
                        <div>
                            <a href="#"><span className="badge bg-red font-size-11 remove">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                       </div>

                       <div className="d-flex justify-content-around align-items-center mb-3">
                       <div className="option-bg color product">
                            <span>REDMI Go-RED/1GB+8GB</span>
                        </div>
                        <div className="option-bg color sku">
                            <span>MIGO-RED-1GB</span>
                        </div>
                        <div className="option-bg color mrp">
                            <span>5999</span>
                        </div>
                        <div>
                            <a href="#"><span className="badge bg-red font-size-11 remove">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                       </div>

                       <div className="d-flex justify-content-around align-items-center mb-3">
                       <div className="option-bg color product">
                            <span>REDMI Go-RED/1GB+8GB</span>
                        </div>
                        <div className="option-bg color sku">
                            <span>MIGO-RED-1GB</span>
                        </div>
                        <div className="option-bg color mrp">
                            <span>5999</span>
                        </div>
                        <div>
                            <a href="#"><span className="badge bg-red font-size-11 remove">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                       </div>

                       <div className="d-flex justify-content-around align-items-center mb-5">
                       <div className="option-bg color product">
                            <span>REDMI Go-RED/1GB+8GB</span>
                        </div>
                        <div className="option-bg color sku">
                            <span>MIGO-RED-1GB</span>
                        </div>
                        <div className="option-bg color mrp">
                            <span>5999</span>
                        </div>
                        <div>
                            <a href="#"><span className="badge bg-red font-size-11 remove">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                       </div>
                       <div className="d-flex variant mb-4">
                         <div className="variant-btn">
                       <a href="#"><span className="badge black-sm-btn font-size-13 save">SAVE VARIANTS </span></a>
                       <a href="#"><span className="badge grey-sm-btn  font-size-13 save">Cancel </span></a>
                      </div>
                       </div>
                         
                         <Row>
                           <Col md={4}>
                       <Input type="select" className="form-select warranty">
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Yellow</option>
                               
                              </Input>
                              </Col>
                              </Row>
                       
                      </Row>
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT VARIANT AVAILABLITY
                                        </h5>
                                        <p className="text-muted mb-0 font-size-13">
                                        European Article Number. Enter product’s 14-digit code.
                                        </p>
                                </div>

                                <Row className="align-items-end">
                                  <Col md={12} className="d-flex align-items-center mb-2">
                                  <span className="camera">Main Camera </span>
                                    <Col md={4} className="">
                                    <Input type="select" className="form-select warranty">
                                <option>Select or Add Main Camera</option>
                                <option>12 MP</option>
                                <option>16 MP</option>
                                <option>18 MP</option>
                              </Input>
                                    </Col>
                                    </Col>

                                    <Col md={12} className="d-flex align-items-center mb-2">
                                  <span className="camera">Display SIze </span>
                                    <Col md={4} className="">
                                    <Input type="select" className="form-select warranty">
                                    <option>5.5 Inch</option>
                                <option>5 Inch</option>
                                <option>5.7 Inch</option>
                              </Input>
                                    </Col>
                                    </Col>

                                    <Col md={12} className="d-flex align-items-center mb-2">
                                  <span className="camera">Sim Type </span>
                                    <Col md={4} className="">
                                    <Input type="select" className="form-select warranty">
                                <option>Select or Add SIM Type</option>
                                <option>Single Sim</option>
                                <option>Dual Sim</option>
                                <option>SIngle Sim + e-SIM</option>
                              </Input>
                                    </Col>
                                    </Col>
                                  
                                    <Col md={12} className="d-flex align-items-center mb-4">
                                  <span className="camera">Network Type </span>
                                    <Col md={4} className="">
                                    <Input type="select" className="form-select warranty">
                                <option>Select or Add Network Type</option>
                                <option>3G</option>
                                <option>4G</option>
                                <option>5G</option>
                              </Input>
                                    </Col>
                                    </Col>
                                  
                                  <Col md={5}>
                                    <div className="d-flex align-items-end justify-content-end mb-4">
                         <div className="">
                       <a href="#"><span className="badge black-sm-btn font-size-13 save me-3">SAVE SPECIFICATIONS </span></a>
                       <a href="#"><span className="badge grey-sm-btn  font-size-13 save">Cancel </span></a>
                      </div> 
                      </div>
                      </Col>
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row> 

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT NAME
                                        </h5>
                                </div>
                                
                                <Row className="align-items-end">
                                  <Col md={12} className="d-flex align-items-center mb-4">
                                    <Input type="select" className="form-select warranty">
                                <option>REDMI NOTE 7</option>
                                <option>12 MP</option>
                                <option>16 MP</option>
                                <option>18 MP</option>
                              </Input>
                                    </Col>
                                    </Row>
                              
                                <Row className="align-items-end">
                                    <Col md={2} className="text-center">
                                        <div className="drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"45px" , height:"45px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
                                        </div>
                                        <p className="fw-bold">Product Feature Image</p>
                                    </Col>

                                    <Col md={1} className="text-center">
                                    <p className="mb-2 fw-bold">Product Back-Image</p>

                                        <div className="drop-small drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"30px" , height:"30px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
                                        </div>
                                    </Col>

                                    <Col md={1} className="text-center">
                                    <p className="mb-2 fw-bold">Product Side1-Image</p>

                                        <div className="drop-small drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"30px" , height:"30px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
                                        </div>
                                    </Col>

                                    <Col md={1} className="text-center">
                                    <p className="mb-2 fw-bold">Product Side2-Image</p>

                                        <div className="drop-small drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"30px" , height:"30px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                  <Col md={2}></Col>
                                  <Col md={5}>
                                    <p>Drag to recorder images. The first image would be the product's featured image.</p>
                                  </Col>
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-2">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        PRODUCT DESCRIPTION
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={5}>
                                    <div className="mb-1">
                        <Input style={{resize:"none"}}
                          name="textarea"
                          placeholder=""
                          type="textarea"
                          rows="5"
                        //   onChange={validationType.handleChange}
                        //   onBlur={validationType.handleBlur}
                        //   value={validationType.values.textarea || ""}
                        //   invalid={
                        //     validationType.touched.textarea && validationType.errors.textarea ? true : false
                        //   }
                        />
                        {/* {validationType.touched.textarea && validationType.errors.textarea ? (
                          <FormFeedback type="invalid">{validationType.errors.textarea}</FormFeedback>
                        ) : null} */}
                        
                    </div>
                                    </Col>
                                    <p className="text-muted mb-0 font-size-13">
                        Highlight this product functionality and features. These will be displayed on the product's page in the app.
                                        </p>
                                    
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                   

                 
                    <Row className="d-flex  align-items-start submit buyer-details">
                      <Col md="6">
                        <FormGroup className="mb-3 d-flex align-items-center">
                          <Label htmlFor="validationCustom01" className="me-3">Enter Your Remarks</Label>
                          <div className="">
                            <Input
                              name="firstname"
                              placeholder=""
                              value=""
                              type="text"
                              size="57"
                              className="form-control"
                              id="validationCustom01"
                              // onChange={validation.handleChange}
                              // onBlur={validation.handleBlur}
                              // value={validation.values.firstname || ""}
                              // invalid={
                              //   validation.touched.firstname && validation.errors.firstname ? true : false
                              // }

                            />
                            <span className="font-size-10">for internal use only</span>

                          </div>
                          
                        </FormGroup>
                      </Col>

                      <Col md="4" className="text-center">
                      <Button  type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light text-uppercase fw-bold">
                      create this Product on DealsDray
                      </Button>
                      </Col>      
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

Chat.propTypes = {
    chats: PropTypes.array,
    groups: PropTypes.array,
    messages: PropTypes.array,
    onGetChats: PropTypes.func,
    onGetGroups: PropTypes.func,
    onGetMessages: PropTypes.func,
    onAddMessage: PropTypes.func,
};

const mapStateToProps = ({ chat }) => ({
    chats: chat.chats,
    groups: chat.groups,
    messages: chat.messages,
});

const mapDispatchToProps = dispatch => ({
    onGetChats: () => dispatch(getChats()),
    onGetGroups: () => dispatch(getGroups()),
    onGetMessages: roomId => dispatch(getMessages(roomId)),
    onAddMessage: roomId => dispatch(addMessage(roomId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);