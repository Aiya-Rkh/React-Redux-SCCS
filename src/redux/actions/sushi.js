import axios from "axios";
import { API } from "../../helpers/api";

// !этот метод получает(axios) и сохранеяет(dispatch)
export const fetchSushi = () => (dispatch) => {
  axios(API).then(({ data }) => {
    dispatch(setSushi(data));
  });
};
// !этот метод сохраняет суши
export const setSushi = (items) => ({
  type: "SET_SUSHI",
  payload: items,
});

// export default setSushi;
