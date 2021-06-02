import styled from "styled-components";

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url('images/ms-homepage-mobile.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(2) {
    background-image: url('images/Desktop-ModelY.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background-image: url('images/m3-homepage-mobile.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(4) {
    background-image: url('images/mx-homepage-mobile.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(5) {
    background-image: url('images/us_homepage_sp_hero_d.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(6) {
    background-image: url('images/solar-roof-hero-mobile.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(7) {
    background-image: url('images/Desktop-Accessories.jpeg');
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 600px){
    .colored:nth-child(1) {
    background-image: url('images/ms-homepage-desktop.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background-image: url('images/m3-homepage-desktop.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(4) {
    background-image: url('images/mx-homepage-desktop.jpeg');
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(6) {
    background-image: url('images/solar-roof-hero-desktop.jpeg');
    background-size: cover;
    background-position: center;
  }
  }
`;

export const Spacer = styled.div`
  height: 3vh;
  background: #fff;
`;