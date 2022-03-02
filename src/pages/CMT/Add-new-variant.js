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
  const [show, showSelect] = useState(false);
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

    // const showSelect = e => {
    //   document.class('show').style.display ='block';
    // };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Listing" breadcrumbItem="Add New Variant" />

                    <div className=" mb-0">
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW VARIANT </Link>
                                        </h5>
                                        
                                    </div>
                                    
                                </div>

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        VARIANTT DISPLAY NAME
                                        </h5>
                                </div>

                               
                                    <Row>
                                        <Col md="12" className="d-flex justify-content-center">
                                        <Col md={4}>
                                            <Col md={12} className="mb-4">
                                        <div className="search-box ml-2 specification">
                          <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                            <div className="position-relative dropdwon">
                              <Input onClick={() => setSinglebtn1(!singlebtn1)}
                                type="text"
                                className="orm-control bg-light border-light rounded text-red fw-bold "
                                value="Manufacturer"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-close search-icon cross"></i>
                          
                            
                       <div>
                        <DropdownMenu>
                          <DropdownItem> <span className="type">Storage </span> <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage storage options</span></DropdownItem>
                          <DropdownItem> <span className="type">Color</span > <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage color options</span></DropdownItem>
                          <DropdownItem className="mb-2"> <span className="type">LED Display Size </span> <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage led-display-size options</span></DropdownItem>
                          <div className="d-flex next justify-content-end align-items-center">
                            <div className="me-2">
                              <p className="text-uppercase mb-0 font-size-13">Manufacturer</p>
                            </div>
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
                          <p className="text-end"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-black"> manage manufacturer options</a> </p>
                                            </Col>


                                           
                                </Col>
                                </Col>
                               
                                    </Row>
                                
                               
                            </div>
                            
                        </Card>
                        </Col>
                        </Row>
                    </div>

              

                    <Row className="mb-5">
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
                              FOR ALL CATEGORY
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
                             SHOW FOR BUYERS
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
                             SHOW FOR GUEST USER
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
                            mandatory field
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
                             FOR ALL BRANDS
                            </label>
                        </div>

                        
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
                      create this Variant on DealsDray
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