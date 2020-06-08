
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Application_footer from "./components/footer/application_footer.jsx";
import Application_header from './components/header/application_header.jsx';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';


class App extends React.Component {
  render() {

    return (

      <div style={{ marginBottom: "10%" }}>

        <Application_header />
        
        <Application_footer
          link1={"App Connect Home"}
          link2={"Help"}
          link3={"IBM Support"}
        />

      </div>

    )

  }
}

export default App;