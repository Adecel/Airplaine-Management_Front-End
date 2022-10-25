import axios from "axios";
import router from "@/router";

const state = {
  submitted: false,
  success: false,
  submitStatus: false,
  errors: "",
  message: "",
  isLogin: !!localStorage.getItem("token"),
};
const getters = {
  loadingStatus(state) {
    return state.submitStatus;
  },
  errors(state) {
    return state.errors;
  },
  success(state) {
    return state.success;
  },
  isLogin(state) {
    return state.isLogin;
  },
};
const mutations = {
  loginStatus(state, loginStatus) {
    state.isLogin = loginStatus;
  },
};
const actions = {
  logout(context) {
    context.commit("loginStatus", false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  handleSubmit(context, payload) {
    state.submitStatus = true;
    // context.commit('loadingStatus',true)
    (state.success = false), (state.errors = ""), (state.message = "");
    let formData = {
      username: payload.username,
      password: payload.password,
    };

    //   console.log(formData),
    axios
      .post("http://localhost:7000/api/auth/signin", formData, {})
      .then((res) => {
        if (res.data) {
          console.log( res.data)
          context.commit("loginStatus", true);
         //console.log( res.data)
          (state.success = true),
            (state.submitted = false),
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log( res.data)

          router.push({ path: "/plane" });
        }
      })
      .catch((error) => {
        if (error) {
          alert("your user name or password is invalid"),
          (state.success = false), (state.errors = error.response.data);
        
        }

        //  console.log( state.errors)
      })
      .finally(() => {
        //state.isLogin =false,
        state.submitStatus = false;
      });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
