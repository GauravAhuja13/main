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
      title: "Create New Product",
      value: 0,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,
    },
    {
      id: 2,
      title: "Specifications  Pending",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",    
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "Product Creation Requests ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series4,
      options: options4,
    },
    
  ];

  const reportSecondRow = [
    {
      id: 1,
      title: "Listings  Pending on DealsDray App",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "Live Listings on DealsDray App",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      title: "All Deactivated  Listings ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series4,
      options: options4,
    },
  ];
    const reportThreeRow = [
      {
        id: 1,
        title: "Products LIVE on DealsDray App",
        value: 88,
        prefix: "",
        suffix: "",
        decimal: 0,
        charttype: "bar",
        chartheight: 40,
        chartwidth: 70,
        color: "success",
        series: series1,
        options: options1,
  
      },
      {
        id: 2,
        title: "OUT OF STOCK Products on DealsDray App",
        value: 88,
        decimal: 0,
        charttype: "radialBar",
        chartheight: 45,
        chartwidth: 45,
        prefix: "",
        suffix: "",
        color: "danger",
        series: series2,
        options: options2,
      },
      {
        id: 4,
        title: "LOW-Stock Products on DealsDray App ",
        value: 88,
        decimal: 0,
        prefix: "",
        suffix: "",
        charttype: "bar",
        chartheight: 40,
        chartwidth: 70,
        color: "danger",
        series: series4,
        options: options4,
      },
      {
        id: 3,
        title: "Coming Soon Products on DealsDray App",
        value: 88,
        decimal: 0,
        prefix: "",
        suffix: "",
        charttype: "radialBar",
        chartheight: 45,
        chartwidth: 45,
        color: "success",
        series: series3,
        options: options3,
      },
      {
        id: 1,
        title: "FAST-MOVING Products on DealsDray App",
        value: 88,
        prefix: "",
        suffix: "",
        decimal: 0,
        charttype: "bar",
        chartheight: 40,
        chartwidth: 70,
        color: "success",
        series: series1,
        options: options1,
  
      },
  ];
  const reportFourRow = [
    {
      id: 1,
      title: "FLASH DEALS",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "EXCLUSIVE DEALS ",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "Last 15 Days TOP-Selling Products ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "danger",
      series: series4,
      options: options4,
    },
    {
      id: 3,
      title: "Last 15 Days MOST- VIWED Products",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      color: "success",
      series: series3,
      options: options3,
    },
    {
      id: 1,
      title: "Last 15 Days MOST- VIWED Categories",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "ACTIVE Categories 10/15",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "ACTIVE Brands 10/15",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "danger",
      series: series4,
      options: options4,
    },
    {
      id: 3,
      title: "Top Searched Keywords 10/15",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      color: "success",
      series: series3,
      options: options3,
    },
  ];
  const reportFiveRow = [
    {
      id: 1,
      title: "Create New Banner",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "Banner Live ",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "Expiring Banners ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "danger",
      series: series4,
      options: options4,
    },
    {
      id: 3,
      title: "Expired Banners ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      color: "success",
      series: series3,
      options: options3,
    },
    {
      id: 1,
      title: "Push Notifications",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "Notification Report 300/1000",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    
  ];
  const reportSixRow = [
    {
      id: 1,
      title: "NOTIFY ON PRICE DROP",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "BULK QUOTATIONS ",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "NOTIFY ON STOCK ",
      value: 0,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "danger",
      series: series4,
      options: options4,
    },
    
  ];
  const reportSevenRow = [
    {
      id: 1,
      title: "CREATE NEW CATEGORY",
      value: 88,
      prefix: "",
      suffix: "",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      title: "CREATE NEW BRAND",
      value: 88,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      color: "danger",
      series: series2,
      options: options2,
    },
    {
      id: 4,
      title: "MANAGE VARIANTS ",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "danger",
      series: series4,
      options: options4,
    },
    {
      id: 3,
      title: "MANAGE SPECIFICATIONS",
      value: 88,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      color: "success",
      series: series3,
      options: options3,
    },
];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Listing" breadcrumbItem="Dashboard" />

        <Row className="reports">
          <Row>
          <h4 className="card-title mb-3">Products</h4>
            <MiniWidget reports={reports} />
          </Row>

          <Row>
          <h4 className="card-title mb-3">Listings</h4>
            <MiniWidget reports={reportSecondRow} />
          </Row>

          <Row>
          <h4 className="card-title mb-3">Inventory</h4>
            <MiniWidget reports={reportThreeRow} />
          </Row>
     

         <Row>
          <h4 className="card-title mb-3">Quick Reports</h4>
            <MiniWidget reports={reportFourRow} />
          </Row>

         <Row>
          <h4 className="card-title mb-3">Promotions</h4>
            <MiniWidget reports={reportFiveRow} />
          </Row>

          <Row>
          <h4 className="card-title mb-3">Buyer Requests</h4>
            <MiniWidget reports={reportSixRow} />
          </Row>

          <Row>
          <h4 className="card-title mb-3">Settings</h4>
            <MiniWidget reports={reportSevenRow} />
          </Row>

         </Row>

         
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;