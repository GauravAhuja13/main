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
                    <Breadcrumbs title="Listing" breadcrumbItem="Add New Specification" />

                    <div className=" mb-0">
                        <Row>
                            <Col md={12}>
                        <Card className="">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-center mb-4">
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">ADD NEW SPECIFICATION </Link>
                                        </h5>
                                        
                                    </div>
                                    
                                </div>

                                <div className="flex-grow-1 mb-4">
                                        <h5 className="font-size-16 mt-0 mb-1 text-red fw-bold">
                                        SPECIFICATION DISPLAY NAME
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
                                className="orm-control bg-light border-light rounded text-red fw-bold"
                                value="Battery-capacity"
                              />

                              <i className="mdi mdi-magnify search-icon"></i>
                              <i className="mdi mdi-close search-icon cross"></i>
                          
                            
                       <div>
                        <DropdownMenu>
                          <DropdownItem> <span className="type">Sim Type </span> <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage sim-type-options</span></DropdownItem>
                          <DropdownItem> <span className="type">Network Type </span > <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage network-type options</span></DropdownItem>
                          <DropdownItem className="mb-2"> <span className="type">Camera </span> <span className="option"><i class="fa fa-fw fa-cog font-size-15 me-2"></i>manage camera options</span></DropdownItem>
                          <div className="d-flex next justify-content-end">
                            <div className="me-2">
                              <p className="text-uppercase mb-0 font-size-13">battery-capacity</p>
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
                          <p className="text-end"> <i class="fa fa-fw fa-cog font-size-15"></i><a href="#" className="text-black"> manage battery-capacity options</a> </p>
                                            </Col>


                                            <Col md={12}>
                                            <Input type="select" className="form-select mb-2">
                                <option>Add options for battery-capacity</option>
                                <option>80 mAh</option>
                                <option>800 mAh</option>
                                <option>1800 mAh</option>
                                <option>80 mAh</option>

                              </Input>
                              <div className="d-flex next justify-content-end align-items-center">
                            <div className="me-2">
                              <p className="text-uppercase mb-0 font-size-13 text-blue fw-bold">add 80 mAh battery-capacity</p>
                            </div>
                            <div>
                        <a href="#"><span className="badge bg-red font-size-13">SAVE </span></a>
                        <a href="#"><span className="badge bg-red bg-grey font-size-13">Cancel </span></a>
                            </div>
                          </div>
                                            </Col>
                                </Col>
                                </Col>
                               
                                    </Row>
                                
                               
                            </div>
                            
                        </Card>
                        </Col>
                        </Row>
                    </div>

                    


                    <Row>
                        <Col md={12}>
                        <Card>
                        <div className="p-3 px-4">
                            <Row>
                      <Col md="6">
                        <div>
                          <h5 className="font-size-16 mt-0 mb-3 text-red fw-bold">OPTIONS FOR BATTERY-CAPACITY</h5>
                        </div>
                      </Col>

                      </Row>

                      <Row className="mb-3">
                          
                          <Col md={3} className="d-flex align-items-center">
                         
                            <img src={Dot} className="me-3 mb-2" />
                         
                           
                            <div className="option-bg w-100">
                            <a href="#"><span className="text-grey  font-size-13 fw-bold">800 mAh </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Delete <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge edit font-size-11">Edit <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>

                      <Row className="mb-3">
                          
                      <Col md={3} className="d-flex align-items-center">
                         
                         <img src={Dot} className="me-3 mb-2" />

                            <div className="option-bg w-100">
                            <a href="#"><span className="text-grey  font-size-13 fw-bold">1800 mAh </span></a>
                            </div>
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                          <div>
                            <a href="#"><span className="badge bg-red font-size-11">Delete <i className="mdi mdi-close font-size-10"></i> </span></a>
                            <a href="#"><span className="badge edit font-size-11">Edit <i className="mdi mdi-close font-size-10"></i> </span></a>
                            </div>
                          </Col>
                      </Row>

                      </div>
                      </Card>
                      </Col>
                    </Row>

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
                              className="form-check-label font-size-10 text-uppercase"
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
                      create this Specification on DealsDray
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