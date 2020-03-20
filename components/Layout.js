import React, {Fragment} from 'react';
import Head from 'next/head';

function Layout (props) {

  return (
  <Fragment>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://code.highcharts.com/css/highcharts.css" />
      <title>{props.pageTitle || 'Realtime Data Visualization'}</title>
    </Head>
    {props.children}
  </Fragment>
)
};

export default Layout;
