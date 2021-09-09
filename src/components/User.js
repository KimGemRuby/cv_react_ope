import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="cv-react-main/public/150px_150px_cni_adobespark.jpg" className="user__avatar" alt="KIM Soly" />
      <h1 className="user__name">KIM Soly</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 26 pachot laine 93190 Livry Gargan
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33624037104">0624037104</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:solykim@gmail.com">solykim@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 22 juillet 1983
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance:  Montmorency
        </p>
      </div>
    </div>
  )
}

export default User
