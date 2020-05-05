import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../shared/css/slider.css";
// Slick Doc: https://react-slick.neostack.com/docs/get-started
import CommonFooter from "../shared/common-footer";
import HomePageContent from "./homePageContent";
import HomePageSideBar from "./homePageSidebar";
import "./homePage.css";

class HomePage extends Component {
  showSlideDetail = (index) => {
    console.log("im here " + index);
  };

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: null,
      prevArrow: null,
      // autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <Slider {...sliderSettings}>
          <div className="home-page__slider">
            <div>
              <h1>Welcome Lioenix</h1>
              <span>
                <p className="home-page__slider__detail">
                  A web for build your own group.
                </p>
              </span>
              <div
                className="home-page__slider__banner-1"
                onClick={(event) => this.showSlideDetail(0, event)}
              >
                <p>Click here get more detail.</p>
              </div>
            </div>
          </div>
          <div className="home-page__slider">
            <div>
              <h1>2</h1>
            </div>
          </div>
          <div className="home-page__slider">
            <div>
              <h1>3</h1>
            </div>
          </div>
        </Slider>
        <div className="home-page__body">
          <div className="home-page__content">
            <HomePageContent />
          </div>
          <div className="home-page__sidebar">
            <HomePageSideBar />
          </div>
        </div>
        <CommonFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
