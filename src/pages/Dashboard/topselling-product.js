import React from "react"
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Progress } from "reactstrap"

const TopProduct = () => {

    const progressbars = [
        {
            id: 1,
            title: 'Desktops',
            value: 52,
            color: 'primary'
        },
        {
            id: 2,
            title: 'iPhones',
            value: 45,
            color: 'info'
        },
        {
            id: 3,
            title: 'Android',
            value: 48,
            color: 'success'
        },
        {
            id: 4,
            title: 'Tablets',
            value: 78,
            color: 'warning'
        },
        {
            id: 5,
            title: 'Cables',
            value: 63,
            color: 'purple'
        },
    ]

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Top Business Categories</h4>

                    {progressbars.map((progressbar, key) => (
                        <Row className="align-items-center g-0 mt-3" key={key}>
                            <Col sm={5}>
                                <p className="text-truncate mt-1 mb-0"><i className={"mdi mdi-circle-medium text-" +progressbar.color+ " me-2"}></i> {progressbar.title} </p>
                            </Col>
                            <Col sm={7}>
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

export default TopProduct