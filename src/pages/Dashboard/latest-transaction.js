import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import "../../assets/scss/custom/plugins";
import { MDBDataTable } from "mdbreact"

import user from "../../assets/images/users/User.png"

const LatestTransaction = () => {

    const data = {
        
      }
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                        <CardTitle className="h1 mb-0">My Registrations In Queue</CardTitle>
                        <div className="p-0">
                                <div className="search-box chat-search-box">
                                    <div className="d-flex align-items-center">
                                        <span>Search: </span>
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div className="table-responsive mb-4">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: "20px" }}>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <Label className="form-check-label" for="customCheck1">&nbsp;</Label>
                                            </div>
                                        </th>
                                        <th>Business Details</th>
                                        <th>Registration Timeline</th>
                                        <th>Business Category</th>
                                        <th>Documents Status</th>
                                        <th>Registered by</th>
                                        <th>View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottoms">
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck2" />
                                                <Label className="form-check-label" for="customCheck2">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                            <Link to="#" className="text-body fw-bold"><u>Buyer  ID #121JKB</u></Link> 
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light green-btn fw-bold">
                                                New Device Registration
                                            </Button>
                                            </tr>
                                            <tr className=""><a href="#"><span className="fw-bold" style={{marginRight: "10px"}}>SUMIT & KHUSHI MOBILE SHOP</span></a>
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light business-btn">
                                                B2R
                                            </Button>
                                            </tr>
                                            <tr>Owner Name: VIPIN PATEL</tr>
                                            <tr>Mobile: <span className="text-green">9799910141</span></tr>
                                            <tr>Email: <span className="text-green">SSUMITPATEL.1998@GMAIL.COM</span></tr>
                                            <tr>Location: LUCKNOW, UTTAR PRADESH</tr>
                                            <tr>GEO Location: unnamed road, shanti nagar, <br />siwan, bihar 841226, india</tr>
                                            <tr>Device info: REDMI Note-7, Android-9 <br />IP: 192.168.100.**  Device ID: ********98089</tr>
                                            <tr>
                                           <a href="#"><span className="badge  bg-yellow font-size-13">Without GSTN</span></a>
                                           <a href="#"><span className="badge bg-purple  bg-black font-size-13">Proprietorship</span></a>
                                           </tr>
                                        </td>
                                        <td className="update"><tr> <span className="mb-2 d-block">04 Jan, 2022 12:11 PM</span>
                                        
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light business-btn d-block">
                                                New
                                            </Button>
                                            </tr>
                                            <tr className="text-update-green">Last Doc upload at <br />04 Jan, 22 12:11 PM</tr>
                                        </td>
                                        <td>
                                            <tr>
                                           <a href="#"><span className="badge bg-purple font-size-13">Smartphones</span></a>
                                           <a href="#"><span className="badge bg-purple font-size-13">Featurepho..</span></a>
                                           </tr>
                                           <tr>
                                           <a href="#"><span className="badge bg-purple font-size-13">Mobile Acce..</span></a>
                                           <a href="#"><span className="badge bg-purple font-size-13">Electronics</span></a>
                                           </tr>
                                           <tr className="fw-bold mb-2 d-block">Business Type</tr>
                                            <tr>
                                           <a href="#"><span className="badge bg-black  bg-purple font-size-13">Mobile Acce..</span></a>
                                           <a href="#"><span className="badge bg-black bg-purple font-size-13">Electronics</span></a>
                                           </tr>
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">PAN Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">Business Add. Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">Shop Board Photo Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">Shop Owner Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-red  font-size-13">AADHAAR-F Not-Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-red  font-size-13">AADHAAR-B Not-Uploaded</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                            <tr className="me-3"> <img src={user} className="avatar-xs rounded-circle " alt="..." /></tr>
                                            <tr><a href="#"><span className="text-blue fw-bold">#23091316,</span> </a>NITIN AW..
                                             <tr><i className="mdi mdi-map-marker"></i> Lucknow, UP</tr>
                                            </tr>
                                            </div>
                                        </td>
                                        
                                        <td>

                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                            </Button>
                                        </td>
                                        
                                    </tr>
                                 
                                    <tr className="border-bottoms">
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck2" />
                                                <Label className="form-check-label" for="customCheck2">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td style={{width: "33%"}}> 
                                            <tr className="mb-2 d-block"> 
                                            <Link to="#" className="text-body fw-bold"><u>Buyer  ID #121JKB</u></Link> 
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light green-btn fw-bold">
                                                New Device Registration
                                            </Button>
                                            </tr>
                                            <tr className=""><a href="#"><span className="fw-bold" style={{marginRight: "10px"}}>SUMIT & KHUSHI MOBILE SHOP</span></a>
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light business-btn">
                                                B2R
                                            </Button>
                                            </tr>
                                            <tr>Owner Name: VIPIN PATEL</tr>
                                            <tr>Mobile: <span className="text-green">9799910141</span></tr>
                                            <tr>Email: <span className="text-green">SSUMITPATEL.1998@GMAIL.COM</span></tr>
                                            <tr>Location: LUCKNOW, UTTAR PRADESH</tr>
                                            <tr>GEO Location: unnamed road, shanti nagar, <br />siwan, bihar 841226, india</tr>
                                            <tr>Device info: REDMI Note-7, Android-9<br /> IP: 192.168.100.**  Device ID: ********98089</tr>
                                            <tr>
                                           <a href="#"><span className="badge  bg-yellow bg-green font-size-13">With GSTN</span></a>
                                           <a href="#"><span className="badge bg-purple  bg-black font-size-13">Proprietorship</span></a>
                                           </tr>
                                        </td>
                                        <td className="update"><tr> <span className="mb-2 d-block">04 Jan, 2022 12:11 PM</span>
                                        
                                            <Button type="button" color="green" className="btn-sm btn-rounded waves-effect waves-light update-btn d-block">
                                            Doc. Pendency's
                                            </Button>
                                            </tr>
                                            <tr className="text-update-blue">BOT Last Remark at 04 Jan,<br /> 22 12:11 PM: REQUIRED<br /> FULL PHOTO OF BILL <br />BOOK</tr>
                                            <tr className="text-update-green">Last Doc upload at 04<br /> Jan, 22 12:11 PM</tr>
                                        </td>
                                        <td>
                                            <tr>
                                           <a href="#"><span className="badge bg-purple font-size-13">Smartphones</span></a>
                                           <a href="#"><span className="badge bg-purple font-size-13">Featurepho..</span></a>
                                           </tr>
                                           <tr>
                                           <a href="#"><span className="badge bg-purple font-size-13">Mobile Acce..</span></a>
                                           <a href="#"><span className="badge bg-purple font-size-13">Electronics</span></a>
                                           </tr>
                                           
                                        </td>
                                        <td>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">PAN Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">Business Add. Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-blue  font-size-13">GSTN Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-red  font-size-13">AADHAAR-F Not-Uploaded</span></a>
                                        </tr>
                                        <tr>
                                           <a href="#"><span className="badge bg-red  font-size-13">AADHAAR-B Not-Uploaded</span></a>
                                        </tr>
                            
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                            <tr className="me-3"> <img src={user} className="avatar-xs rounded-circle " alt="..." /></tr>
                                            <tr><a href="#"><span className="text-blue fw-bold">#23091316,</span> </a>NITIN AW..
                                             <tr><i className="mdi mdi-map-marker"></i> Lucknow, UP</tr>
                                            </tr>
                                            </div>
                                        </td>
                                        
                                        <td>

                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                            </Button>
                                        </td>
                                        
                                    </tr>
                                    
                                    
                                </tbody>
                            </Table>
                        </div>
                  <Row className="align-items-center">
                    <Col md={5}>
                    <div class="dataTables_info" role="status" aria-live="polite">Showing 1 to 3 of 12 entries</div>
                     </Col>
                    <Col md={7}>
                         <div class="dataTables_paginate">
                            <ul data-test="pagination" class="pagination">
                                 <li data-test="page-item" class="disabled page-item"><a data-test="page-link" aria-label="Previous" class="page-link page-link"><span>Previous</span></a></li>
                                 <li data-test="page-item" class="active page-item"><a data-test="page-link" class="page-link page-link">1<span class="sr-only">(current)</span></a></li>
                                 <li data-test="page-item" class="disabled page-item"><a data-test="page-link" aria-label="Next" class="page-link page-link"><span>Next</span></a></li>
                            </ul>
                        </div>
                    </Col>
    
                  </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;