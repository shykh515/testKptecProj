// images.tsx
import React from 'react';

import HeaderImg from './header_img.png';
import Logo from './logo.png';
import Profile from './profile.png';
import Google from './Google.png';
import Facebook from './Facebook.png';
import Cart from './Cart.png';
import Hub from './Hub.png';
import Services from './Services.png';
import Events from './Events.png';
import Marketplace from './Marketplace.png';

import Focusedplace from './focusedplace.png';
import FocusedUser from './focusedUser.png';
import FocusedOctions from './focusedOctions.png';
import FocusedHome from './focusedHome.png';
import FocusedChat from './focusedChat.png';

import User from './user.png';
import Place from './place.png';
import Octicons from './Octicons.png';
import Chat from './chat.png';
import Home from './home.png';

import ServiceImg from './serciceImg.png';
import BgImg from './4.png';


interface Images {
  HeaderImg: string;
  Logo: string;
  Profile: string;
  Google: string;
  Facebook: string;
  Cart: string;
  Hub: string;
  Services: string;
  Marketplace: string;
  Events: string;
  User: string;
  FocusedUser: string;
  Place: string;
  Focusedplace: string;
  Octicons: string;
  FocusedOctions: string;
  Chat: string;
  FocusedChat: string;
  Home: string;
  FocusedHome: string;
  ServiceImg: string;
  BgImg:string
}


const images: Images = {
  HeaderImg,
  Logo,
  Profile,
  Facebook,
  Google,
  Cart,
  Hub,
  Services,
  Marketplace,
  Events,
  User,
  FocusedUser,
  Place,
  Focusedplace,
  Octicons,
  FocusedOctions,
  Chat,
  FocusedChat,
  Home,
  FocusedHome,
  ServiceImg,
  BgImg
};

export default images;
