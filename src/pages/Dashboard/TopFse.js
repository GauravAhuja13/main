import React from "react"
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Progress } from "reactstrap"

const TopFse = () => {

    const progressbars = [
        {
            id: 1,
            title: 'Sumit',
            value: 52,
            color: 'primary'
        },
        {
            id: 2,
            title: 'Nitin',
            value: 45,
            color: 'info'
        },
        {
            id: 3,
            title: 'Akash',
            value: 48,
            color: 'success'
        },
        {
            id: 4,
            title: 'Gaurav',
            value: 78,
            color: 'warning'
        },
        {
            id: 5,
            title: 'Ganesh',
            value: 63,
            color: 'purple'
        },
    ]

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Top FSE</h4>

                    {progressbars.map((progressbar, key) => (
                        <Row className="align-items-center g-0 mt-3" key={key}>
                            <Col sm={4}>
                                <p className="text-truncate mt-1 mb-0"><i className={"mdi mdi-circle-medium text-" +progressbar.color+ " me-2"}></i> {progressbar.title} </p>
                            </Col>
                            <Col sm={8}>
                                <div className="mt-1" style={{ height: "6px" }}>
                                    <Progress
                                        value={progressbar.value}
                                        color={progressbar.color}
                                        size="sm"
                                        className="progress-sm"
                                    />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopFse