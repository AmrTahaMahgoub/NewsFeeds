import { NewsType } from "../@types";
import {IconsName} from "../assets/svgs";



export type MainAppStackTypes = {
  Splash: undefined;
Home:undefined;
Details:{ newsDetails: NewsType};
};



export type MainNavigationKeys = keyof ( MainAppStackTypes);
