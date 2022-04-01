import React from 'react';
import "./social-network-logo.css"

const SocialNetworkLogo = ({imgUrl, link = ""}) => {
  return (
    <a href={link}>
        <img className="social-network-logo-img" src={imgUrl} alt=""/>
    </a>
  )
}

export default SocialNetworkLogo