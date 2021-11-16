import { returnErrors } from "./errorActions";
import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    RES_SIDEBAR
} from "./types";


export const ShowSidebar = () => (dispatch) => {
  dispatch({
    type: SHOW_SIDEBAR,
  });
};
export const HideSidebar = () => (dispatch) => {
  dispatch({
    type: HIDE_SIDEBAR,
  });
};
export const ResponsoneSidebar = () => (dispatch) => {
  dispatch({
    type: RES_SIDEBAR,
  });
};

