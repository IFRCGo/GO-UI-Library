import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import BreadCrumb from "./../../../components/breadcrumb";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="breadcrumb__block">
    <span>
      <span>
        <a className="breadcrumb" order="1" href="/get-started">
          Home
        </a>
        <span className="breadcrumb__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/buttons" className="breadcrumb">
        BreadCrumb
      </b>
    </span>
    </div>
);

const BreadcrumbsPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Breadcrumbs</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Breadcrumbs are a secondary navifation pattern that help users understand the hierachy
                            between levels and navigate through them.</p>
                    </div>
                </div>
            </div>
            <div className="tab__wrap">
                <Tabs>
                    <TabList>
                        <Tab>Example</Tab>
                        <Tab>Code</Tab>
                    </TabList>

                    <TabPanel>
                        <BreadCrumb
                            crumbs={[
                                {link: "/ui-components/buttons", name: "Buttons"},
                                {link: "/get-started", name: "Home"},
                            ]}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Code source={`${htmlString}`}/>
                    </TabPanel>
                </Tabs>
            </div>
        </React.Fragment>
    );
};
export default BreadcrumbsPage;