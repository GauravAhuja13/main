import React from "react";
import { Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap";
import SimpleBar from "simplebar-react";

const RecentActivity = () => {
    return (
        <Card>
            <CardBody>
                

                <h4 className="card-title mb-4">My Recent Activity</h4>

                <SimpleBar className="activity-feed mb-0 ps-2" style={{ maxHeight: '336px' }}>
                    <li className="feed-item">
                        <div className="feed-item-list d-flex align-items-center">
                            <p className="text-muted mb-1 font-size-13 recent">Today<small className="d-inline-block ms-1">12:20 pm</small> <span className="text-black font-size-15 ms-2">Registration checked for verification</span></p>
                            <p className="mt-0 mb-0 ms-5"> <span className="text-primary">SUMIT & KHUSHI MOBILE SHOP -  LUCKNOW, UTTAR PRADESH || FSE #23091316, NITIN AW..</span></p>
                        </div>
                    </li>
                    <li className="feed-item">
                        <div className="feed-item-list d-flex align-items-center">
                            <p className="text-muted mb-1 font-size-13 recent">Today<small className="d-inline-block ms-1">11:20 pm</small> <span className="text-black font-size-15 ms-2">Registration Pendency Updated</span></p>
                            <p className="mt-0 mb-0 ms-5"> <span className="text-primary">KHUSHI MOBILE SHOP -  LUCKNOW, UTTAR PRADESH || FSE #23091316, NITIN AW..</span></p>
                        </div>
                    </li>
                    <li className="feed-item">
                        <div className="feed-item-list d-flex align-items-center">
                            <p className="text-muted mb-1 font-size-13 recent">Today<small className="d-inline-block ms-1">10:20 pm</small> <span className="text-black font-size-15 ms-2">Registration Deleted</span></p>
                            <p className="mt-0 mb-0 ms-5"> <span className="text-primary">DUKHI  MOBILE SHOP -  LUCKNOW, UTTAR PRADESH || FSE #23091316, NITIN AW..</span></p>
                        </div>
                    </li>
                    <li className="feed-item">
                        <div className="feed-item-list d-flex align-items-center">
                            <p className="text-muted mb-1 font-size-13 recent">Today<small className="d-inline-block ms-1">9:20 pm</small> <span className="text-black font-size-15 ms-2">Registration Rejected</span></p>
                            <p className="mt-0 mb-0 ms-5"> <span className="text-primary">DUKHI  MOBILE SHOP -  LUCKNOW, UTTAR PRADESH || FSE #23091316, NITIN AW..</span></p>
                        </div>
                    </li>

                    <li className="feed-item">
                        <div className="feed-item-list d-flex align-items-center">
                            <p className="text-muted mb-1 font-size-13 recent">Today<small className="d-inline-block ms-1">9:00 pm</small> <span className="text-black font-size-15 ms-2">Registration rechecked for verification</span></p>
                            <p className="mt-0 mb-0 ms-5"> <span className="text-primary">SUMIT MOBILE SHOP -  LUCKNOW, UTTAR PRADESH || FSE #23091316, NITIN AW..</span></p>
                        </div>
                    </li>
                    

                </SimpleBar>

            </CardBody>
        </Card>
    );
};

export default RecentActivity;