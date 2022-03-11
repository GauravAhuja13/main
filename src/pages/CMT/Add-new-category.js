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
import Dot from "../../assets/images/users/dots.png"


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
                    <Breadcrumbs title="Listing" breadcrumbItem="Add New Category" />

                    <div className=" mb-0">
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW CATEGORY </Link>
                                        </h5>
                                        <p className="text-muted mb-0 font-size-13">
                                        Group your products into categories like Mobiles, Laptops, Electronics, etc.
                                        </p>
                                    </div>

                                    <div className="">
                                    <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark mb-1 d-block text-end">CATEGORY TYPE </Link>
                                            </h5>
                                            <div className="d-flex">
                                            {/* <div className="d-flex align-items-center me-3">
                                            <img src={success} className="avatar-xs me-1 " alt="..." />
                                            <h5 className="font-size-12 mb-0">
                                            ROOT CATEGORY
                                            </h5>
                                            </div> */}
                                            <div className="form-check form-switch form-switch-md me-0 type" style={{paddingLeft:"1rem"}}>
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
                                                  ROOT CATEGORY
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>
                                            <div className="form-check form-switch form-switch-md me-0 type" style={{paddingLeft:"1rem"}}>
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
                                                  MAIN CATEGORY
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>

                                            <div className="form-check form-switch form-switch-md me-0 type" style={{paddingLeft:"1rem"}}>
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
                                                  SUB CATEGORY
                                                  {/* <img src={success} className="avatar-xs me-1 img" alt="..." /> */}
                                                  
                                                </label>
                                            </div>
                                            </div>
                                    </div>
                                    
                                </div>

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        CATEGORY TITLE
                                        </h5>
                                        <p className="text-muted mb-0 font-size-13">
                                        Enter a group of product set title. e.g. Smartphones, Feature Phones,  Cameras, Televisions.
                                        </p>
                                </div>

                               
                                    <Row className="select">
                                        <Col md="5">
                                    <div className="url">
                                    <div className=" chat-search-box">
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded fw-bold"
                                            
                                            value="Prexo (Used Devices)"
                                            />
                                        </div>
                                        <p className="text-black fw-bold mb-0 font-size-13">
                                        Unique URL:<span className="text-green fw-bold"> www.dealsddraycom/category1</span>
                                        </p>
                                </div>
                                </Col>

                                <Col md="4">
                                <Input type="select" className="form-select mb-1">
                                  <option>Select Parent Category</option>
                                <option>Mobiles & Tab » Tablets</option>
                                <option>Mobiles & Tab » Featurephones</option>
                                <option>Mobiles & Tab » Smartphones</option>
                              </Input>
                              <p className="mb-2"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Warranty</a> </p>


                              <Input type="select" className="form-select mb-1">
                                <option>Select GST Rates</option>
                                <option>5% GST</option>
                                <option>12% GST</option>
                                <option>28% GST</option>
                                <option>18% GST</option>

                              </Input>
                              <p> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Warranty</a> </p>

                                </Col>
                                        </Row>
                                
                               
                            </div>
                            
                        </Card>
                        </Col>
                        </Row>
                    </div>

                    <Row>
                    <Col md="12" className="d-flex mb-3">
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
                              SHOW  TO ALL BUYERS
                            </label>
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
                              CAT. REG. BUYERS
                            </label>
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
                             GUEST USERS
                            </label>
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
                             ERP
                            </label>
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
                             HIDE ON NO-PRODUCTS
                            </label>
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
                            SHOW ON HOME-SCREEN
                            </label>
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
                             NOTIFY-CAT. LAUNCH ON PRODUCT ADDITION
                            </label>
                        </div>
                        </Col>  
                    </Row>

                    <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                
                                    
                                   

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        CATEGORY ICONS
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={2}>
                                        <div className="drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"45px" , height:"45px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
                                        </div>
                                    </Col>

                                    <Col md={1}>
                                        <div className="drop-small drop">
                                        <img src={successred} className="avatar-xs mb-1 " alt="..." style={{width:"30px" , height:"30px"}} />
                                            <p>Drag image(s) here</p>
                                            <p>Or</p>
                                            <p><a href="#">browse image</a></p>
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
                                        CATEGORY DESCRIPTION
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
                        Highlight this category functionality and features. These will be displayed on the category’s page in the app.
                                        </p>
                                    
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
                                        CATEGORY WARRANTY
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={5} className="mb-1">
                                    <Input type="select" className="form-select warranty">
                                <option>Select  Warranty</option>
                                <option>Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories</option>
                                <option>QC Checked, But No Warranty on products</option>
                                <option>DealsDray Warranty of 6 Months Available</option>
                              </Input>
                                    </Col>
                                   <p> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Warranty</a> </p>
                                    
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                        <Card>
                        <div className="p-3 px-4">
                            <Row>
                      <Col md="6">
                        <div>
                          <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">CATEGORY VARIANTS</h5>
                        </div>
                      </Col>

                      <Col md="6" className="category">
                        <div className="form-inline float-md-end">
                          <label>ADD variant for this category</label>

                          <div className="search-box ml-2">
                          <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                            <div className="position-relative dropdwon">
                              <Input onClick={() => setSinglebtn1(!singlebtn1)}
                                type="text"
                                className="orm-control bg-light border-light rounded"
                                placeholder="search Category variant here"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-close search-icon cross"></i>
                          
                            
                       <div>
                        <DropdownMenu>
                          <DropdownItem> <input type="checkbox" className="me-2"/> Storage</DropdownItem>
                          <DropdownItem> <input type="checkbox" className="me-2"/>Colour</DropdownItem>
                          <DropdownItem> <input type="checkbox" className="me-2"/>NA</DropdownItem>
                        <a href="#"><span className="badge bg-black font-size-13">add this  variant to category </span></a>
                        </DropdownMenu>
                        </div>
                        
                        
                        </div>
                      </Dropdown>
                          </div>
                        </div>
                      </Col>
                      </Row>

                      <Row className="mb-3">
                          <Col md={2}>
                            <label className="text-green d-block">VARIANT</label>
                            <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>STORAGE</label>
                            </div>
                          </Col>
                          <Col md={5}>
                          <label className="text-green d-block">OPTIONS</label>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">1GB + 8GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">2GB +16GB <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>

                      <Row>
                          <Col md={2}>
                          <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>COLOR</label>
                           </div>
                          </Col>
                          <Col md={5}>
                            <div className="option-bg color">
                            <a href="#"><span className="badge bg-purple font-size-11">RED <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">BLACK <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">BLUE <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>
                      </div>
                      </Card>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                        <Card>
                        <div className="p-3 px-4">
                            <Row>
                      <Col md="6">
                        <div>
                          <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">CATEGORY SPECIFICATIONS</h5>
                        </div>
                      </Col>

                      <Col md="6" className="category">
                        <div className="form-inline float-md-end">
                          <label>ADD specification for this category</label>

                          <div className="search-box ml-2">
                          <Dropdown
                        isOpen={singlebtn2}
                        toggle={() => setSinglebtn2(!singlebtn2)}
                        className="mt-4 mt-sm-0"
                      >
                            <div className="position-relative dropdwon">
                              <Input onClick={() => setSinglebtn2(!singlebtn2)}
                                type="text"
                                className="orm-control bg-light border-light rounded"
                                placeholder="search specification variant here"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-close search-icon cross"></i>
                          
                            
                       
                        <DropdownMenu>
                          <DropdownItem><input type="checkbox" className="me-2"/>Main Camera</DropdownItem>
                          <DropdownItem><input type="checkbox" className="me-2"/>Display Size</DropdownItem>
                          <DropdownItem><input type="checkbox" className="me-2"/>SIM Type</DropdownItem>
                        <a href="#"><span className="badge bg-black font-size-13">add this  specification to category </span></a>
                        </DropdownMenu>
                        </div>
                      </Dropdown>
                          </div>
                        </div>
                      
                      </Col>
                      </Row>

                      <Row className="mb-2">
                          <Col md={2}>
                            <label className="text-green d-block">* FIELDS</label>
                          </Col>
                          <Col md={5}>
                          <label className="text-green d-block">* VALUES</label>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Battery Capacity</label>
                           </div>
                           
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">800 mAh <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">900 mAh <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">1000 mAh <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">1700 mAh <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">5000 mAh <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Front Camera</label>
                           </div>
                           
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">2 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">4 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">6 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">8 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">10 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Rear Camera</label>
                           </div>
                         
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">2 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">4 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">6 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">8 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">10 MP <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Operating System</label>
                           </div>
                  
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">Android Oreo 8.1 <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">Android Oreo 8.7 <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">Android Oreo 8.9 <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Display Size</label>
                           </div>
                          
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">12.7 cm (5 inch) <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-3">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>SIM Type</label>
                           </div>
                           
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">Single Sim <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">Dual  Sim <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">Single Sim + eSim <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          </Row>

                          <Row className="mb-5">
                              <Col md={2}>
                              <div className="d-flex align-items-center">
                            <img src={Dot} className="me-3" />
                            <label className="d-block mb-0" style={{marginTop:"15px"}}>Network Type</label>
                           </div>
                         
                              </Col>
                              
                          <Col md={5}>
                            <div className="option-bg">
                            <a href="#"><span className="badge bg-purple font-size-11">3G <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">4G<i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge bg-purple font-size-11">5G <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Remove <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
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
                      create this Category on DealsDray
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