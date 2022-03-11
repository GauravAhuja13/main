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
  const [checkBox, showCheckboxes] = useState(false);

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

 

// function showCheckboxes() {
//   var checkboxes = document.getElementById("checkboxes");
//   if (!expanded) {
//     checkboxes.style.display = "block";
//     checkbox = true;
//   } else {
//     checkboxes.style.display = "none";
//     checkbox = false;
//   }
// };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Listing" breadcrumbItem="Add New Brand" />

                    <div className=" mb-0">
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW BRAND </Link>
                                        </h5>
                                        
                                    </div>
                                    
                                </div>

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        BRAND DISPLAY NAME
                                        </h5>
                                       
                                </div>

                               
                                    <Row className="select">
                                        <Col md="5">
                                    <div className="url">
                                    <div className=" chat-search-box">
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded fw-bold"
                                            
                                            value="DYLECT"
                                            />
                                        </div>
                                        <p className="text-black fw-bold mb-0 font-size-13">
                                        Unique URL:<span className="text-green fw-bold">www.dealsddraycom/dylect</span>
                                        </p>
                                </div>
                                </Col>

                                <Col md="4">
                                <Input type="select" className="form-select mb-1">
                                  <option>search category(s) of this brand here</option>
                                <option><input type="checkbox"/> Mobiles & Tab » Smartphones » All Smartphones</option>
                                <option>Mobiles & Tab » Smartphones » PREXO Smartphones</option>
                                <option>Mobiles & Tab » Smartphones » UNBOXED Smartphones</option>
                              </Input>
                              <p className="mb-2"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> manage categories</a> </p>
{/* 
                              <div class="multiselect">
    <div class="selectBox" onclick={() => showCheckboxes(checkbox)}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label for="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label for="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label for="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
  </div> */}

                              <div className="select-brand">

                                <label class="main">Mobiles & Tab » Smartphones » All Smartphones
                                        <input type="checkbox" />
                                        <span class="w3docs" aria-checked="true"></span>
                                </label>

                                <label class="main">Mobiles & Tab » Smartphones » PREXD Smartphones
                                        <input type="checkbox" />
                                        <span class="w3docs"></span>
                                </label>

                                <label class="main">Mobiles & Tab » Smartphones » UNBOXED Smartphones
                                        <input type="checkbox" />
                                        <span class="w3docs"></span>
                                </label>
                              </div>
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
                                        BRAND DESCRIPTION
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
                                    Highlight this BRAND functionality and features. These will be displayed on the category’s page in the app.
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
                                        BRAND WARRANTY
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={5} className="mb-1">
                                      <div>
                                    <Input type="select" className="form-select warranty mb-1">
                                <option>Select Or Add Warranty</option>
                                <option>Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories</option>
                                <option>QC Checked, But No Warranty on products</option>
                                <option>DealsDray Warranty of 6 Months Available</option>
                              </Input>
                              
                                   <p className="mb-0"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Warranty</a> </p>
                                </div>
                                </Col>

                                   <Col md={5} className="mb-1">
                                     <div>
                                    <Input type="select" className="form-select warranty mb-1">
                                <option>Select Or Add BRAND Manufacturer</option>
                                <option>JAINA MARKETING PVT LTD</option>
                                <option>UTL PVT LTD.</option>
                                <option>DealsDray Online Pvt Ltd.</option>
                              </Input>
                                   <p className="mb-0"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-green"> Manage Warranty</a> </p>
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
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold text-uppercase">
                                        brand warranty terms & conditions 
                                        </h5>
                                </div>

                                <Row className="align-items-end">
                                    <Col md={12}>
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
                                    
                                </Row>
                               
                            </div>
                            
                        </Card>
                        </Col>
                    </Row>
                    
                    <Row className="mb-5">
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    
                                    
                              

                                <div className="me-5">
                                        <h5 className="font-size-16 mt-0 mb-0 text-red fw-bold">
                                        BRAND SERVICE CENTER URL
                                        </h5>
                                       
                                </div>

                                <div>
                              <p className="mb-2"> * list of centers can be managed at DealsDray end or we can put direct link which is provided by brand</p>
                              <p className="mb-2"> - bases buyer pin code we can show list priority nearest service center, district, state, other states</p>


                                </div>
                                </div>
                               
                                    <Row className="select">
                                        <Col md="5">
                                    <div className="url">
                                    <div className=" chat-search-box">
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded fw-bold"
                                            
                                            value="www.dylect.in/service-centers"
                                            />
                                        </div>
                                        
                                </div>
                                </Col>

                                <Col md="4">
                                
{/* 
                              <div class="multiselect">
    <div class="selectBox" onclick={() => showCheckboxes(checkbox)}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label for="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label for="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label for="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
  </div> */}

                             
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
                      create this brand on DealsDray
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