import React from "react";
import rickandmorty from "../images/rickandmorty.JPG";
import albascharesto from "../images/albascharesto.JPG";
import portfolio from "../images/portfolio.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid 
      <>
        <img className="portfolio-image-popupbox" src={rickandmorty} alt="Rick and Morty Clone Project..." />
        <p>Rick and Morty Web Application to overview all characters and Episodes and save character as favorite by click on its Detail Button</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://rick-and-morty-react-app-rho.vercel.app/", "_blank")}>https://rick-and-morty-react-app-rho.vercel.app/</a>
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ameralhafid/RickAndMortyReactApp")}>https://github.com/ameralhafid/RickAndMortyReactApp</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigRaM = {
    titleBar: {
      enable: true,
      text: "Rick and Morty project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Albascha Resto App
  const openPopupboxAlbaschaResto = () => {
    const content = (
      // eslint-disable-next-line
      <>
        <img className="portfolio-image-popupbox" src={albascharesto} alt="Albascha Restaurant App Project..." />
        <p>Albasha Restaurant web shop Application</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://relaxed-tesla-0b8c58.netlify.app/", "_blank")}>https://relaxed-tesla-0b8c58.netlify.app/</a>
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ameralhafid/albascha.resto", "_blank")}>https://github.com/ameralhafid/albascha.resto</a>
      </>
    )
    PopupboxManager.open({ content })
  }
 const popupboxConfigAlbaschaResto = {
    titleBar: {
      enable: true,
      text: "Albascha Resto clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      // eslint-disable-next-line
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>my portfolio</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-9jpkufkrw-amour.vercel.app", "_blank")}>https://portfolio-9jpkufkrw-amour.vercel.app</a>
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ameralhafid/Portfolio", "_blank")}>https://github.com/ameralhafid/Portfolio</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }




  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={rickandmorty} alt="Rick and Morty Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxAlbaschaResto}>
            <img className="portfolio-image" src={albascharesto} alt="Albascha Resto Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
         
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigRaM} />
      <PopupboxContainer {...popupboxConfigAlbaschaResto} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
    </div>
  )
}

export default Portfolio;
