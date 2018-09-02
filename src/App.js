import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer, HeaderRow, Textfield} from 'react-mdl';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header waterfall>
              <HeaderRow title="Patrick Kendall">
                  <Textfield
                     value=""
                     onChange={() => {}}
                     label="Search2"
                     expandable
                     expandableIcon="search"
                  />
              </HeaderRow>
              <HeaderRow>
                <Navigation>
                    <a href="#">Home</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                </Navigation>
            </HeaderRow>
          </Header>
         <Drawer title="Title">
            <Navigation>
            <a href="#">Home</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
            </Navigation>
         </Drawer>
           <Content>
             <div className="page-content" />
             <Main/>
          </Content>
      </Layout>
    </div>

    );
  }
}

export default App;
