import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardTitle } from "reactstrap";
import CountUp from 'react-countup';

const SalesAnalyticsChart = () => {

    const series = [{
        name: 'VERIFIED',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'PROCESSED WITH PENDENCYS ',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'REGISTERED',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }];

    const options = {
        chart: {
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [0, 2, 4],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },
        colors: ['#5b73e8', '#dfe2e6', '#f1b44c'],

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['Before 10 AM', '10 - 11 AM', '11 - 12 PM', '12 - 1 PM', '1 - 2 PM', '2 - 3 PM', '3 - 4 PM', '4 - 5 PM', '5 - 6 PM', '6 - 7 PM', 'After 7 PM'],
        markers: {
            size: 0
        },

        xaxis: {
            type: 'time'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        },
        grid: {
            borderColor: '#f1f1f1'
        }
    };

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    
                    <CardTitle className="mb-4 h4">Registraion Analytics</CardTitle>
                    <div className="mt-1">
                        <ul className="list-inline main-chart mb-0">
                            <li className="list-inline-item chart-border-left me-0 border-0">
                                <h3 className="text-primary font-size-12"><span className="font-size-18"><CountUp end={2371} separator="," prefix="$" /></span><span className="text-muted d-inline-block font-size-15 ms-1">Registered</span></h3>
                            </li>{" "}
                            <li className="list-inline-item chart-border-left me-0">
                                <h3><span data-plugin="counterup" className="font-size-18"><CountUp end={258} /></span><span className="text-muted d-inline-block font-size-15 ms-1">Verified</span>
                                </h3>
                            </li>{" "}
                            <li className="list-inline-item chart-border-left me-0">
                                <h3><span data-plugin="counterup" className="font-size-18"><CountUp end={3.6} decimals={1} suffix="%" /></span><span className="text-muted d-inline-block font-size-15 ms-1">Conversation Ratio</span></h3>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-3">
                        <ReactApexChart
                            options={options}
                            series={series}
                            height="339"
                            type="line"
                            className="apex-charts"
                        />
                    </div>
                </CardBody>
            </Card>

        </React.Fragment>
    );
};

export default SalesAnalyticsChart;