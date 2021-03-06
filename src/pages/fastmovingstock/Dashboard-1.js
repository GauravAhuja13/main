import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidget from "./mini-widget";
import SalesAnalyticsChart from "./salesanalytics-chart";
import TopProduct from "./topselling-product";
import TopFse from "./TopFse";
import TopUser from "./topuser";
import RecentActivity from "./recent-activity";
import SocialSource from "./socialsource";
import LatestTransaction from "./latest-transaction";

//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg";

const series1 = [{
  data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
}];

const options1 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: !1
    }
  }
};

const series2 = [70];

const options2 = {
  fill: {
    colors: ['#34c38f']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const series3 = [55];

const options3 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const series4 = [{
  data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
}];

const options4 = {

  fill: {
    colors: ['#f1b44c']
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: !1
    }
  }
};

const Dashboard = () => {

  const reports = [
    {
      id: 1,
      icon: "mdi mdi-arrow-up-bold",
      title: "New Registrations",
      value: 34152,
      prefix: "$",
      suffix: "",
      badgeValue: "2.65%",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      desc: "since last week",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      icon: "mdi mdi-arrow-down-bold",
      title: "Checking Pending",
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "since last week",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "mdi mdi-arrow-down-bold",
      title: "Processed with pendency's ",
      value: 45254,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      badgeValue: "6.24%",
      color: "danger",
      desc: "since last week",
      series: series3,
      options: options3,
    },
    {
      id: 4,
      icon: "mdi mdi-arrow-up-bold",
      title: "Late Registrations",
      value: 12.58,
      decimal: 2,
      prefix: "+",
      suffix: "%",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      badgeValue: "10.51%",
      color: "success",
      desc: "since last week",
      series: series4,
      options: options4,
    },
  ];

  const reportSecondRow = [
    {
      id: 1,
      icon: "mdi mdi-arrow-up-bold",
      title: "Failed for verification",
      value: 34152,
      prefix: "$",
      suffix: "",
      badgeValue: "2.65%",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      desc: "since last week",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      icon: "mdi mdi-arrow-down-bold",
      title: "Checked for verification",
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "since last week",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "mdi mdi-arrow-down-bold",
      title: "Verified Registrations ",
      value: 45254,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      badgeValue: "6.24%",
      color: "danger",
      desc: "since last week",
      series: series3,
      options: options3,
    },
    {
      id: 4,
      icon: "mdi mdi-arrow-up-bold",
      title: "Incomplete  Registrations",
      value: 12.58,
      decimal: 2,
      prefix: "+",
      suffix: "%",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      badgeValue: "10.51%",
      color: "success",
      desc: "since last week",
      series: series4,
      options: options4,
    },
  ];
    const reportThreeRow = [
      {
        id: 1,
        icon: "mdi mdi-arrow-up-bold",
        title: "Language barrier for verification [TC]",
        value: 34152,
        prefix: "$",
        suffix: "",
        badgeValue: "2.65%",
        decimal: 0,
        charttype: "bar",
        chartheight: 40,
        chartwidth: 70,
        color: "success",
        desc: "since last week",
        series: series1,
        options: options1,
  
      },
      {
        id: 2,
        icon: "mdi mdi-arrow-down-bold",
        title: "Blocked Accounts",
        value: 5643,
        decimal: 0,
        charttype: "radialBar",
        chartheight: 45,
        chartwidth: 45,
        prefix: "",
        suffix: "",
        badgeValue: "0.82%",
        color: "danger",
        desc: "since last week",
        series: series2,
        options: options2,
      },
      {
        id: 3,
        icon: "mdi mdi-arrow-down-bold",
        title: "Deleted  Registrations ",
        value: 45254,
        decimal: 0,
        prefix: "",
        suffix: "",
        charttype: "radialBar",
        chartheight: 45,
        chartwidth: 45,
        badgeValue: "6.24%",
        color: "danger",
        desc: "since last week",
        series: series3,
        options: options3,
      },
      {
        id: 4,
        icon: "mdi mdi-arrow-up-bold",
        title: "Rejected  Registrations",
        value: 12.58,
        decimal: 2,
        prefix: "+",
        suffix: "%",
        charttype: "bar",
        chartheight: 40,
        chartwidth: 70,
        badgeValue: "10.51%",
        color: "success",
        desc: "since last week",
        series: series4,
        options: options4,
      },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Listing" breadcrumbItem="Product Live Process" />
          <LatestTransaction />

        <Row className="reports">
          <Row>
            <MiniWidget reports={reports} />
          </Row>

          <Row>
            <MiniWidget reports={reportSecondRow} />
          </Row>

          <Row>
            <MiniWidget reports={reportThreeRow} />
          </Row>
         </Row>

         <Row className="record">
           <Col xl={6}>
             <SalesAnalyticsChart />
           </Col>
           <Col xl={3}>
              <TopProduct />
            </Col>
            <Col xl={3}>
              <TopFse />
            </Col>
         </Row>
          <Row>
           
            <Col xl={12}>
              <RecentActivity />
            </Col>
            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;