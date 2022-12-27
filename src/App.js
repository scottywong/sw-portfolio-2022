import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Home from "./components/Home";

import {BrowserRouter, Route, Routes} from 'react-router-dom';


class App extends Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     foo: "bar",
  //     resumeData: {},
  //     sharedData: {},
  //   };
  // }

  // applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
  //   this.swapCurrentlyActiveLanguage(oppositeLangIconId);
  //   document.documentElement.lang = pickedLanguage;
  //   var resumePath =
  //     document.documentElement.lang === window.$primaryLanguage
  //       ? `res_primaryLanguage.json`
  //       : `res_secondaryLanguage.json`;
  //   this.loadResumeFromPath(resumePath);
  // }

  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  // componentDidMount() {
  //   this.loadSharedData();
  //   this.applyPickedLanguage(
  //     window.$primaryLanguage,
  //     window.$secondaryLanguageIconId
  //   );
  // }

  // loadResumeFromPath(path) {
  //   $.ajax({
  //     url: path,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  // loadSharedData() {
  //   $.ajax({
  //     url: `portfolio_shared_data.json`,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ sharedData: data });
  //       document.title = `${this.state.sharedData.basic_info.name}`;
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  render() {
    return (

      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/sw-portfolio-2022/' />
          <Route element={<Post/>} path='/sw-portfolio-2022/posts'/>
          <Route element={<SinglePost/>} path='/sw-portfolio-2022/posts/:slug'/>
        </Routes>
      </BrowserRouter>
    );

  }

}

export default App;
