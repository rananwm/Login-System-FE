import { toast } from "react-toastify";
import axios from "axios";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const ISUSER = "ISUSER";
export const LOGOUT = "LOGOUT";

export const login = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      data
    );
    if (response.data.token === undefined) {
      return toast.error(response.data.message);
    }
    localStorage.setItem("TokenValue", response.data.token);
    if (response.data.status === 200) {
      toast.success(response?.data?.message);
      navigate("/");

    } else {
      toast.error(response.data.message);
    }
    return dispatch({
      type: LOGIN,
      payload: response.data,
    });
  } catch (error) {
    console(error);
    toast.error("Some things went wrong");
  }

};
export const signup = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      data
    );
    if (response.data.token === undefined) {
      return toast.error(response.data.message);
    }
    if (response.data.status === 200) {
      dispatch({
        type: SIGNUP,
        payload: response.data.data,
      });
      toast.success(response.data.message);
      navigate("/login");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const isUser = (setIsLoading) => async (dispatch) => {
  try {
    const token = localStorage.getItem("TokenValue");
    if (!token) {
      return {
        isUser: false,
        data: [],
      };
    } else if (token) {
      let data = {
        token: token,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/isUser`,
        data
      );
      if (response.data.data) {
        let data = {
          isUser: true,
          data: response.data.data,
        };
        return dispatch({
          type: ISUSER,
          payload: data,
        });
      } else {
        return {
          isUser: false,
          data: [],
        };
      }
    }
  } catch (error) {
    alert(error);
  } finally {
    setIsLoading(false);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("TokenValue");
    toast.success("Logout Successfully");
    let data = {
      isUser: false,
      data: [],
    };
    return dispatch({
      type: LOGOUT,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
