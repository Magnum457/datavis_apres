/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.jsx";

// runtime
import {Runtime, Inspector} from '@observablehq/runtime'

// notebook
import notebook from '@magnum457/h2-verao2-mapa-interativo'

import Header from "components/Headers/Header.jsx";

import '../../assets/css/styleChart.css'

import mapa from '../../assets/img/mapa_datavis.png'

class Icons extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  animationRef1 = React.createRef();
  animationRef2 = React.createRef();
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "by_year") {
        return new Inspector(this.animationRef1.current)
      }
      
    })
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Row>
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="bg-gradient">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-light ls-1 mb-1">
                          Overview
                        </h6>
                        <h2 className="text mb-0">Total de bolsas</h2>
                      </div>
                      <div className="col">
                        
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div ref={this.animationRef1}>
                      
                    </div>
                  </CardBody>
                </Card>
              </Col>  
            </Row>

            <Row>
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="bg-gradient">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-light ls-1 mb-1">
                          Overview
                        </h6>
                        <h2 className="text mb-0">Mapa de distribuição de Bolsas</h2>
                      </div>
                      <div className="col">
                        
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <a href="https://observablehq.com/@magnum457/h2-verao2-mapa-interativo">
                      <img src={mapa} alt="mapa"/>
                    </a>
                    
                  </CardBody>
                </Card>
              </Col>  
            </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
