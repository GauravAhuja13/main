import React, { useState } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
   CardTitle,
  Modal,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
  FormFeedback,
  Form,
  ModalHeader,
  ModalBody
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import docOne from "../../assets/images/users/doc-1.png"
import docTwo from "../../assets/images/users/doc-2.png"
import docThree from "../../assets/images/users/doc-3.png"
import docFour from "../../assets/images/users/doc-4.png"
import docFive from "../../assets/images/users/doc-5.png"
import docSix from "../../assets/images/users/doc-6.png"
import edit from "../../assets/images/users/edit.png"
import pan from "../../assets/images/users/pan.png"
import pancard from "../../assets/images/users/pan-card.png"
import person from "../../assets/images/users/Person.png"
import phone from "../../assets/images/users/Phone.png"
import email from "../../assets/images/users/Email.png"
import message from "../../assets/images/users/Message.png"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import LatestTransactionReg from "./latest-transaction-reg";
import RegStatus from "./reg-status";
import RegUser from "./reg-user";


const FormValidations = (props) => {

  // Form validation 
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
      city: Yup.string().required("Please Enter Your City"),
      state: Yup.string().required("Please Enter Your State"),
      zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  // Form validation 
  const validationType = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: '',
      password: '',
      password1: '',
      email: '',
      digits: '',
      number: '',
      alphanumeric: '',
      textarea: ''
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(
        "This value is required"
      ),
      password: Yup.string().required(
        "This value is required"
      ),
      password1: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
      email: Yup.string()
        .email("Must be a valid Email")
        .max(255)
        .required("Email is required"),
      url: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter correct Url"),
      digits: Yup.number().required(
        "Please Enter Your Digits"
      ),
      number: Yup.number().required(
        "Please Enter Your Number"
      ),
      alphanumeric: Yup.string()
        .matches(
          /^[a-z0-9]+$/i,
          "Enter correct Alphanumeric!"
        )
        .required("Please Enter Your Alphanumeric"),
      textarea: Yup.string().required(
        "Please Enter Your Textarea"
      ),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });
  // const regExp = /\b\d{5}\b/;
  // Form validation 
  const rangeValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      min_Length: '',
      max_Length: '',
      min_Value: '',
      max_Value: '',
      range_Value: '',
      regular_Exp: '',
    },
    validationSchema: Yup.object().shape({
      min_Length: Yup.string()
        .min(6, "Must be exactly 6 digits")
        .required("Min 6 chars"),
      max_Length: Yup.string()
        .max(6, "Must be exactly 6 digits")
        .required("Max 6 chars"),
      min_Value: Yup.string().required("Min Value 6").test('val', 'This value should be greater than or equal to 6', val => val >= 6),
      max_Value: Yup.string().required("Max Value 6").matches(/^[0-6]+$/, "This value should be lower than or equal to 6."),
      range_Value: Yup.string().required(
        "range between 5 to 10"
      ).min(5, "This value should be between 5 and 10")
        .max(10, "This value should be between 5 and 10"),
      regular_Exp: Yup.string()
        .matches(
          /^[#0-9]+$/,
          "Only Hex Value"
        )
        .required("Only Hex Value"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value
    document.getElementById("tooltipForm").classList.add("was-validated");

    if (fnm === "") {
      setfnm(false)
    } else {
      setfnm(true)
    }

    if (lnm === "") {
      setlnm(false)
    } else {
      setlnm(true)
    }

    if (unm === "") {
      setunm(false)
    } else {
      setunm(true)
    }

    if (city === "") {
      setcity(false)
    } else {
      setcity(true)
    }

    if (stateV === "") {
      setstateV(false)
    } else {
      setstateV(true)
    }

    var d1 = document.getElementsByName("validate")

    for (var i = 0; i < d1.length; i++) {
      d1[i].style.display = "block"
    }
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "") {
      document.getElementById(eleId).style.display = "none"
    }
    else {
      document.getElementById(eleId).style.display = "block"
    }
  }

//for toggling Modal
function onClose() {
  setIsOpen(false)  
}
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Buyer Onboarding Team - Checker" breadcrumbItem="Dashboard" />

          <Row className="buyer-detail-edit">
            <Col xl="6" className="p-0">
            <div className="img h-100">
              
                
                <img src={edit} className="w-100 h-100" alt="..." />
                  <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row>
                      <Col md="12">
                        <FormGroup className="mb-3">
                          <div className="d-flex  justify-content-between">
                            <Col md="6">
                          <Label htmlFor="validationCustom01">BUSINESS NAME</Label>

                            <div className="d-flex" style={{width:"100%"}}>
                            <Input
                              name="firstname"
                              placeholder="ARIHANT MOBILE POINT"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                                <a href="#"><i class="uil uil-pen  font-size-20"></i></a>
                            </div>
                            </Col>
                            <div className=" font-size-12"> 
                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light green-btn fw-bold d-block">
                                                New Device Registration
                                            </Button>
                            Device info: REDMI Note-7, Android-9 <br /> IP: 192.168.100.** <br /> Device ID: ********98089 
                            </div>
                          </div>
                            
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row style={{marginTop:"-15px"}}>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">TYPE OF OPERATIONS</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="city"
                              placeholder="PROPRIETORSHIP"
                              type="text"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.city || ""}
                              invalid={
                                validation.touched.city && validation.errors.city ? true : false
                              }
                            />
                              <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">GSTN </Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="state"
                              placeholder="Not registered with GST"
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.state || ""}
                              invalid={
                                validation.touched.state && validation.errors.state ? true : false
                              }
                            />
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <Col lg="10">
                        <FormGroup className="mb-3">
                          <div className="d-flex align-items-center">
                            <i class="fa fa-fw fa-map-pin font-size-24 me-2"></i>
                            <div className="w-100">
                              <Label htmlFor="validationCustom04">Registered billing Address </Label>
                              <Input
                                name="state"
                                placeholder="MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004"
                                type="text"
                                className="form-control"
                                id="validationCustom04"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="10">
                        <FormGroup className="mb-3">
                          <div className="d-flex align-items-center">
                            <i class="fa fa-fw fa-map-pin font-size-24 me-2"></i>
                            <div className="w-100">
                              <Label htmlFor="validationCustom05">Registered shipping Address </Label>
                              <Input
                                name="state"
                                placeholder="MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004"
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center mobile">
                          <img src={phone} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Registered mobile </Label>
                              <Input
                                name="state"
                                defaultValue="9166655518"
                                type="text"
                                className="form-control"
                                // id="validationCustom06"
                                // onChange={validation.handleChange}
                                // onBlur={validation.handleBlur}
                                // value={validation.values.state || ""}
                                // invalid={
                                //   validation.touched.state && validation.errors.state ? true : false
                                // }
                              />
                            </div>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center email">
                          <img src={email} className="me-1 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Registered email </Label>
                              <Input
                                name="state"
                                placeholder="AMITSHARMA42429@GMAIL.COM"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-between">
                                <Label htmlFor="validationCustom06" className="font-size-11 text-underline mb-0">REFRESH </Label>
                                <Label htmlFor="validationCustom06" className="font-size-11 textpurple mb-0">RESEND VERIFICATION MAIL</Label>
                              </div>
                            </div>
                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green" style={{marginTop:"14px"}}>
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">PROPRIETOR Name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Contact Person name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center mobile">
                          <img src={phone} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">contact person mobile </Label>
                              <Input
                                name="state"
                                placeholder="9166655518"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="5">
                        <FormGroup className="mb-0 text-green">
                          <div className="d-flex align-items-center">
                          <img src={message} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">WhatsApp fse Status </Label>
                              <Input
                                name="state"
                                defaultValue="9166655518 — Subscribed "
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                // value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-between">
                                <Label htmlFor="validationCustom06" className="font-size-11 text-underline mb-0">REFRESH </Label>
                              </div>
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="7">
                        <FormGroup className="mb-0 text-green mobile">
                          <div className="d-flex align-items-center">
                            <img src={message} className=" me-2" alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">WhatsApp bot confirmation status </Label>
                              <Input
                                name="state"
                                defaultValue="9166655518 — Subscribed "
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                // value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-end">
                                <Label htmlFor="validationCustom06" className="font-size-11 textpurple mb-0">check WhatsApp message  </Label>
                              </div>
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="Doc mb-2">
                      <h4 className="card-title">Document status</h4>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">Pan Card </Label>
                        <div className="doc doc-green">
                          <img src={docOne} className="avatar-xs " alt="..." style={{height:"60px"}} />
                          </div>
                         <label> <span className="font-size-10 text-uppercase text-green">Verifired</span> </label>
                      </Col>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">personal add. front </Label>
                        <div className="doc doc-red">
                          <img src={docTwo} className="avatar-xs " alt="..."style={{height:"60px"}} />
                          </div>
                          <label> <span className="font-size-10 text-uppercase text-red">not verified</span> </label>
                      </Col>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">personal add.back </Label>
                        <div className="doc doc-blue">
                          <img src={docThree} className="avatar-xs " alt="..." />
                          </div>
                          <label> <span className="font-size-10 text-uppercase text-blue">verification pending</span> </label>
                      </Col>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">Shop photo </Label>
                        <div className="doc doc-blue">
                          <img src={docFour} className="avatar-xs " alt="..." />
                          </div>
                         <label> <span className="font-size-10 text-uppercase text-blue">verification pending</span> </label>
                      </Col>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">shop owner photo </Label>
                        <div className="doc doc-blue">
                          <img src={docFive} className="avatar-xs " alt="..." />
                          </div>
                         <label> <span className="font-size-10 text-uppercase text-blue">verification pending</span> </label>
                      </Col>
                      <Col md="2">
                        <Label htmlFor="validationCustom06">business add.  </Label>
                        <div className="doc doc-blue">
                          <img src={docSix} className="avatar-xs " alt="..." />
                          </div>
                         <label> <span className="font-size-10 text-uppercase text-blue">verification pending</span> </label>
                      </Col>
                    </Row>
                    
                    <Row>
                      <div className="d-flex justify-content-between mb-1">
                        <label className="mb-0">👨‍💼 Referral ID : <span className="fw-bold"> 08090807</span></label>
                        <label className="mb-0">FSE-<span className="fw-bold"> Sandeep Nagar (Kota) (B2R)</span></label>
                      </div>
                      <div>
                      <label className="mb-2">🗓 Date of Registration:<span className="fw-bold"> 26 Feb 2021 02:38:05 PM</span></label>
                      </div>
                      <div>
                        <label className="mb-2">Categories : </label>
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Brands</a>
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Electronics</a>
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Unboxed & Refurbished Mobiles</a>
                      </div>

                      <div className="d-flex">
                        <label className="mb-0 me-4">Default Minimum Order Value: <span className="fw-bold"> Rs.7000</span></label>
                        <label className="mb-0">Business Type:
                        <a href="#" className="btn-black font-size-11">Retailer</a>
                        <a href="#" className="btn-black font-size-11">Wholesaler</a>
                        </label>
                      </div>
                    </Row>

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                  <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">ARIHANT MOBILE POINT PROPERTOR NAME</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="AMIT KUMAR SHARMA"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <Label htmlFor="validationCustom06" className="mb-1">PAN CARD VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-blue">
                                <option>Pending</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                    <Row>
                    <Col md="6">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">AMIT KUMAR SHARMA PAN </Label>
                              <Input
                                name="state"
                                placeholder="XXXXX1111X"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-end">
                                <Label htmlFor="validationCustom06" className="font-size-11 textpurple mb-0">DOB MUST BE BEFORE MARCH-2003</Label>
                              </div>
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      

                    </Row>
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">ARIHANT MOBILE POINT PROPERTOR NAME</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="AMIT KUMAR SHARMA"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                              <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <Label htmlFor="validationCustom06" className="mb-1">PAN CARD VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-blue">
                                <option>Pending</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                    <Row>
                    <Col md="7">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">AMIT KUMAR SHARMA PERSONAL ADD. PROOF FRONT </Label>
                              <Input
                                name="state"
                                placeholder="XXXXX1111X"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-end">
                                <Label htmlFor="validationCustom06" className="font-size-11 textpurple mb-0">DOB MUST BE BEFORE MARCH-2003</Label>
                              </div>
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      

                    </Row>
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">ARIHANT MOBILE POINT PROPERTOR NAME</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="AMIT KUMAR SHARMA"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <Label htmlFor="validationCustom06" className="mb-1">personal add. VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-red input-blue">
                                <option>PERSONAL ADD. NOT VISIBLE</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                    <Row>
                    <Col md="7">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">AMIT KUMAR SHARMA PERSONAL ADD. PROOF FRONT </Label>
                              <Input
                                name="state"
                                placeholder="XXXXX1111X"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                              <div className="d-flex justify-content-end">
                                <Label htmlFor="validationCustom06" className="font-size-11 textpurple mb-0">DOB MUST BE BEFORE MARCH-2003</Label>
                              </div>
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      

                    </Row>
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={edit} className="w-100 h-100" alt="..." />
                  <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <Card className="h-100">
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row>
                      <Col md="12">
                        <FormGroup className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <Label htmlFor="validationCustom01">BUSINESS NAME</Label>
                          <div className=""><i class="fa fa-fw fa-cog font-size-15"></i> New Device Registration: <span className="text-green">YES </span>
                            </div>
                          </div>
                            <div className="d-flex" style={{width:"48%"}}>
                            <Input
                              name="firstname"
                              placeholder="ARIHANT MOBILE POINT"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                            </div>
                            
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                     
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">GSTN </Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="state"
                              placeholder="Not registered with GST"
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.state || ""}
                              invalid={
                                validation.touched.state && validation.errors.state ? true : false
                              }
                            />
                                <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                    </Row>

                    <Row>
                      <Col md="5">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">PROPRIETOR Name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Contact Person name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center mobile">
                          <img src={phone} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Registered mobile </Label>
                              <Input
                                name="state"
                                defaultValue="9166655518"
                                type="text"
                                className="form-control"
                                // id="validationCustom06"
                                // onChange={validation.handleChange}
                                // onBlur={validation.handleBlur}
                                // value={validation.values.state || ""}
                                // invalid={
                                //   validation.touched.state && validation.errors.state ? true : false
                                // }
                              />
                            </div>
                                
                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="10">
                        <FormGroup className="mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <i class="fa fa-fw fa-map-pin font-size-24 me-2"></i>
                            <div className="w-100">
                              <Label htmlFor="validationCustom04">Registered billing Address </Label>
                              <Input
                                name="state"
                                placeholder="MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004"
                                type="text"
                                className="form-control"
                                id="validationCustom04"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          </FormGroup>
                      </Col>
                    </Row>
                            <div className="d-flex location mb-2">
                              <div className="">
                            <Label htmlFor="validationCustom04">Registration GEO Location </Label>
                            <p className="font-size-13 mb-0"> <i class="fa fa-fw fa-map-pin font-size-18"></i> MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004 </p>
                            </div>
                            </div>

                            <div className="d-flex location mb-2">
                              <div className="">
                            <Label htmlFor="validationCustom04">Visit GEO Location</Label>
                            <p className="font-size-13 mb-0"> <i class="fa fa-fw fa-map-pin font-size-18"></i> MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004 </p>
                            </div>
                            </div>

                            <div className="d-flex location mb-2">
                              <div className="">
                            <Label htmlFor="validationCustom04">FSE Visit Address</Label>
                            <p className="font-size-13 mb-0"> <i class="fa fa-fw fa-map-pin font-size-18"></i> MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004 </p>
                            </div>
                            </div>
                    

                  </Form>
                  <Row className="radio-btn buyer-details">
                              
                              <Col md="12">
                        <div className="control-group" id="toastTypeGroup">
                          <div className="controls mb-0">
                            <Label>business address proof type</Label>
  
                                  <div className="d-flex">
                            <div className="form-check mb-2">
                              <input
                                type="radio"
                                id="radio1"
                                name="toastType"
                                className="form-check-input"
                                value="success"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio1"
                              >
                                GST
                              </Label>
                            </div>
  
                            <div className="form-check mb-2">
                              <input
                                type="radio"
                                id="radio2"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio2"
                              >
                                Bill Book 
                              </Label>
                            </div>
  
                            <div className="form-check mb-2">
                              <input
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="warning"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio3"
                              >
                                Visiting Card
                              </Label>
                            </div>
  
                            <div className="form-check mb-2">
                              <input
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="error"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio4"
                              >
                                Shop Board Photo
                              </Label>
                            </div>
  
                            <div className="form-check mb-2">
                              <input
                                type="radio"
                                id="radio5"
                                name="toastType"
                                className="form-check-input"
                                value="error"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio4"
                              >
                                Other Business Add. Proof
                              </Label>
                            </div>
                            </div>
                          </div>
                        </div>
                       
                      </Col>

                      <Col md="6">
                        <Label htmlFor="validationCustom06" className="mb-1">personal add. VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-green input-blue">
                                <option>BILL BOOK received & verified</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>   
                  </Row>
                </CardBody>
              </Card>
            </Col>

            


          </Row>

           <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">ARIHANT MOBILE POINT proprietor PHOTO</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="AMIT KUMAR SHARMA"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <Label htmlFor="validationCustom06" className="mb-1">proprietor photo VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-red input-blue">
                                <option>proprietor photo NOT VISIBLE</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                   
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={edit} className="w-100 h-100" alt="..." />
                  <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
            <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="5">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">REGISTERED BUSINESS NAME</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="ARIHANT MOBILE POINT"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <Label htmlFor="validationCustom06" className="mb-1">shop photo VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-red input-blue">
                                <option>shop photo NOT VISIBLE</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                  
                    <Row>
                      <Col lg="10">
                        <FormGroup className="mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <i class="fa fa-fw fa-map-pin font-size-24 me-2"></i>
                            <div className="w-100">
                              <Label htmlFor="validationCustom04">Registered billing Address </Label>
                              <Input
                                name="state"
                                placeholder="MAIN MARKET, KOTA ROAD, ITAWA, KOTA, RAJASTHAN - 325004"
                                type="text"
                                className="form-control"
                                id="validationCustom04"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          </FormGroup>
                      </Col>
                    </Row>

                    

                    <Row>
                    <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center mobile">
                          <img src={phone} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Registered mobile </Label>
                              <Input
                                name="state"
                                defaultValue="9166655518"
                                type="text"
                                className="form-control"
                                // id="validationCustom06"
                                // onChange={validation.handleChange}
                                // onBlur={validation.handleBlur}
                                // value={validation.values.state || ""}
                                // invalid={
                                //   validation.touched.state && validation.errors.state ? true : false
                                // }
                              />
                            </div>
                                
                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">PROPRIETOR Name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>
                          </div>
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3 text-green">
                          <div className="d-flex align-items-center">
                          <img src={person} className="me-2 " alt="..." />
                            <div className="w-100">
                              <Label htmlFor="validationCustom06">Contact Person name </Label>
                              <Input
                                name="state"
                                placeholder="AMIT KUMAR SHARMA"
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                  validation.touched.state && validation.errors.state ? true : false
                                }
                              />
                            </div>
                            <a href="#"><i class="uil uil-pen  font-size-17"></i></a>

                          </div>

                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                     
                    </Row>

                    <Row>
                      <Col xd="8">
                      <div>
                       
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Brands</a>
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Electronics</a>
                        <a href="#" className="btn-black"><i class="fa fa-fw fa-cart-plus font-size-12"></i>Unboxed & Refurbished Mobiles</a>
                      </div>
                      </Col>
                    </Row>
                    

                  </Form>
                  
                </CardBody>
              </Card>
            </Col>

            


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">FSE VISIT INFORMATION</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="ARIHANT MOBILE POINT"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="7">
                        <Label htmlFor="validationCustom06" className="mb-1">FSE SHOP & BUSSINESS ADD. VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-red input-blue">
                                <option>FSE INFORMATION NOT VERIFIED</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                   
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              <Card>
                <CardBody>
                  <Form className="needs-validation buyer-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row className="d-flex justify-content-between">
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">FSE VISIT INFORMATION</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder="ARIHANT MOBILE POINT"
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="7">
                        <Label htmlFor="validationCustom06" className="mb-1">FSE SHOP & BUSSINESS ADD. VERIFICATION STATUS </Label>
                      <Input type="select" className="form-select input-red input-blue">
                                <option>FSE INFORMATION NOT VERIFIED</option>
                                <option>Reject</option>
                                <option>Assign to RM</option>
                              </Input>
                      </Col>      
                    </Row>
                   
                    

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              
            </Col>


          </Row>

          <Row className="buyer-detail-edit pan mb-5">
            <Col xl="6" className="p-0">
            <div className="img">
              
                
                <img src={pancard} className="w-100 h-100" alt="..." />
                <div className="edit-btn">
                    <a href="#">Edit/Upload</a>
                  </div>
          </div>
           </Col>  
            


            <Col xl="6" className="p-0">
              <div className="pan-img">
              <img src={pan} className="w-100 h-100" alt="..." />
              </div>
              
            </Col>


          </Row>

          
            <LatestTransactionReg />
          

          <Row className="">
            <Col xd="12">
              <div className="duplicate">
              <Card className="mb-0">
                <CardBody>
                  <div className="mail">
                    <Label className="text-purple fw-bold mb-0 font-size-16">Duplicate Device Registration</Label>
                    <p className="font-size-13">This registration is not done on new device, please send a mail to concern department for approval. BELOW IS THE OTHER REGISTRATION INFORMATION WHICH WAS DONE USING THE SAME DEVICE</p>
                    <div className="form">
                      <div className="form-inner">
                    <div className="mb-3 d-flex align-items-center">
                        <Label className="form-label mb-0 me-3">To</Label>
                        <Input
                          name="email"
                          className="duplicate-reg"
                          placeholder="Enter email"
                          type="email"
                          // style={{borderRight:0, borderLeft:0, borderTop:0, borderRadius:0}}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3 d-flex align-items-center">
                        <Label className="form-label mb-0 me-3">CC</Label>
                        <Input
                          name="email"
                          className="duplicate-reg"
                          placeholder="Enter email"
                          type="email"
                          // style={{borderRight:0, borderLeft:0, borderTop:0, borderRadius:0}}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>
                      <Button type="button" color="primary" className="btn-sm  waves-effect waves-light">
                                                Send Mail
                      </Button>
                      </div>
                      
                      <div className="alert alert-success text-center mb-4" role="alert">
                        Enter your Email and instructions will be sent to you!
                      </div>
                   
                    </div>
                  </div>
                </CardBody>
              </Card>
              </div>
            </Col>
          </Row>

          <RegStatus />

          <Row className="buyer-details update-kyc">
          <label className="mb-1 me-4 form-label">update kyc status </label>
            
          <div className="d-flex mb-2">
                            <div className="form-check me-4">
                              <input style={{width:"18px" , height:"18px" , marginTop:"3px"}}
                                type="radio"
                                id="radio1"
                                name="toastType"
                                className="form-check-input"
                                value="success"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio1"
                              >
                                  CHECKED
                              </Label>
                            </div>
  
                            <div className="form-check me-4">
                              <input style={{width:"18px" , height:"18px" , marginTop:"3px"}}
                                type="radio"
                                id="radio2"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio2"
                              >
                               IN PROGRESS
                              </Label>
                            </div>

                            <div className="form-check me-4">
                              <input style={{width:"18px" , height:"18px" , marginTop:"3px"}}
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio3"
                              >
                               REJECTED
                              </Label>
                            </div>

                            <div className="form-check me-4">
                              <input style={{width:"18px" , height:"18px" , marginTop:"3px"}}
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="form-check-input"
                                value="info"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="radio4"
                              >
                               DELETED
                              </Label>
                            </div>
  
  
                      
                            </div>

                            <Row className="d-flex  align-items-center submit">
                      <Col md="5">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">PLEASE MENTION YOUR COMMENT HERE ABOUT THIS REGISTRATION</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              name="firstname"
                              placeholder=""
                              value="ARIHANT MOBILE POINT"
                              type="text"
                              size="17"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.firstname || ""}
                              invalid={
                                validation.touched.firstname && validation.errors.firstname ? true : false
                              }

                            />
                            

                          </div>
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="3" className="text-center">
                      <Button onClick={()=>{setIsOpen(true)}} type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                Submit
                      </Button>
                      </Col>      
                            </Row>


          </Row>

          <RegUser />

          <Row>
            <ul>
              <li><p className="mb-1">» Yashika - BOT Checker; <span className="text-underline"> Edited Contact Person Name</span> From <span className="text-red">AMIT SHARMA</span> to <span className="text-green"> AMIT KUMAR SHARMA</span> at 26/02/2021 17:12:19</p></li>
              <li><p className="mb-1">» Yashika - BOT Checker; <span className="text-underline"> Edited  Town Area</span> From ITAWA to GANDHI NAGAR</p></li>
              <li><p className="mb-1">» Yashika - BOT Checker; <span className="text-underline"> Edited Proprietor Name</span> AMIT SHARMA to AMIT KUMAR SHARMA</p></li>
              <li><p className="mb-1">» Yashika - BOT Checker; <span className="text-underline"> Edited Personal Add. (Back) verification status</span> From <span className="text-red">VERIFICATION PENDING</span> to BILL BOOK RECEIVED & VERIFIED at 26/02/2021 17:12:19</p></li>
              

            </ul>
          </Row>

          <Modal
            isOpen={isOpen}
            toggle={() => onClose()}
            centered={true}
          >
            
            <ModalBody className="py-3 px-5">
              <Row>
                <Col lg={12}>
                  <div className="text-center">
                    <i
                      className="mdi mdi-check-circle-outline"
                      style={{ fontSize: "6em", color: "#34C38F" }}
                    />
                    <h2 className="font-size-18" style={{  color: "#5B73E8" }}>Good job! Registration checked for verification</h2>
                    <h4 className="font-size-14 mb-4">{"Next record will auto loaded  in 15 seconds."}</h4>
                    <h6 className="font-size-14">{"Want break ? "}<span style={{  color: "#5B73E8" }}>Pause</span></h6>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormValidations;
