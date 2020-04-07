import React, { Component } from 'react';
import Header from './header.component';
import Footer from './footer.component';

const BaseLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}

      <br />
      <br />
      <Footer />
    </>
  );
};

export default BaseLayout;
