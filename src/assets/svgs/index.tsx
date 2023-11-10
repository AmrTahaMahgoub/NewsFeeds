import React from "react";
import {SvgProps} from "react-native-svg";
import ActiveStar from "./activeStar";
import InactiveStar from "./inactiveStar";
import Camera from "./camera";
import Checked from "./checked";
import UnChecked from "./unchecked";
import CheckEmail from "./checkEmail";
import Clock from "./clock";
import Arrow from "./arrow";
import Minus from "./minus";
import HidePassword from "./hidePassword";
import ShowPassword from "./showPassword";
import Home from "./home";

import Search from "./search";
import Settings from "./settings";

import Profile from "./profile";
import Plus from "./plus";

import Phone from "./phone";
import Edit from "./edit";
import Logout from "./logout";
import NotFound from "./notFound";
import Notifications from "./notifications";

import Remove from "./remove";
import Gender from "./gender";
import Close from "./close";
import Send from "./send";
import Logo from "./logo";
import LogoSlug from "./logoSlug";
import Menu from "./menu";

export type IconsName =
  | "remove"
  | "gender"
  | "close"
  | "send"
  | "settings"
  | "search"
  | "profile"
  | "phone"
  | "edit"
  | "notifications"
  | "logout"
  | "notFound"
  | "home"
  | "activeStar"
  | "header"
  | "arrow"
  | "camera"
  | "apple"
  | "checked"
  | "checkEmail"
  | "clock"
  | "showPassword"
  | "minus"
  | "hidePassword"
  | "inactiveStar"
  | "unchecked"
  | "email"
  | "logo"
  | "logoSlug"
  | "menu"
  | "plus";

export type RotateTypes = "left" | "right" | "top" | "bottom";

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: "image" | "svg";
}

const getRotate = (rotate: string) => {
  switch (rotate) {
    case "top":
      return "90deg";
    case "bottom":
      return "270deg";
    case "left":
      return "0deg";
    case "right":
      return "-180deg";
    default:
      return "0deg";
  }
};

function Svgs(props: IconsProps & SvgProps) {
  const style = {transform: [{rotate: getRotate(props.rotate || "")}]};

  switch (props.name) {
    case "logo":
      return <Logo {...props} style={[props.rotate && style, props.style]} />;
    case "logoSlug":
      return (
        <LogoSlug {...props} style={[props.rotate && style, props.style]} />
      );
    case "menu":
      return <Menu {...props} style={[props.rotate && style, props.style]} />;
    case "arrow":
      return <Arrow {...props} style={[props.rotate && style, props.style]} />;
    case "showPassword":
      return (
        <ShowPassword {...props} style={[props.rotate && style, props.style]} />
      );
    case "hidePassword":
      return (
        <HidePassword {...props} style={[props.rotate && style, props.style]} />
      );
    case "checkEmail":
      return (
        <CheckEmail {...props} style={[props.rotate && style, props.style]} />
      );
    case "clock":
      return <Clock {...props} style={[props.rotate && style, props.style]} />;

    case "activeStar":
      return (
        <ActiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case "inactiveStar":
      return (
        <InactiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case "unchecked":
      return (
        <UnChecked {...props} style={[props.rotate && style, props.style]} />
      );
    case "checked":
      return (
        <Checked {...props} style={[props.rotate && style, props.style]} />
      );
    case "home":
      return <Home {...props} style={[props.rotate && style, props.style]} />;
    // more icons
    case "profile":
      return (
        <Profile {...props} style={[props.rotate && style, props.style]} />
      );
    case "notifications":
      return (
        <Notifications
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );

    case "logout":
      return <Logout {...props} style={[props.rotate && style, props.style]} />;
    case "phone":
      return <Phone {...props} style={[props.rotate && style, props.style]} />;
    case "settings":
      return (
        <Settings {...props} style={[props.rotate && style, props.style]} />
      );
    case "notFound":
      return (
        <NotFound {...props} style={[props.rotate && style, props.style]} />
      );
    case "search":
      return <Search {...props} style={[props.rotate && style, props.style]} />;
    case "plus":
      return <Plus {...props} style={[props.rotate && style, props.style]} />;
    case "minus":
      return <Minus {...props} style={[props.rotate && style, props.style]} />;
    case "camera":
      return <Camera {...props} style={[props.rotate && style, props.style]} />;
    case "edit":
      return <Edit {...props} style={[props.rotate && style, props.style]} />;

    case "send":
      return <Send {...props} style={[props.rotate && style, props.style]} />;
    case "close":
      return <Close {...props} style={[props.rotate && style, props.style]} />;

    case "remove":
      return <Remove {...props} style={[props.rotate && style, props.style]} />;
    case "gender":
      return <Gender {...props} style={[props.rotate && style, props.style]} />;

    default:
      return <NotFound {...props} />;
  }
}

export default Svgs;
