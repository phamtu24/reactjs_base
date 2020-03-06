import axios from "axios";

function createAxios() {
  // AsyncStorage.setItem("token", '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = "http://150.95.115.192:8021/";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };

  // axiosInstant.interceptors.request.use(
  //   async config => {
  //     config.headers.token = await AsyncStorage.getItem("token");
  //     return config;
  //   },
  //   error => Promise.reject(error)
  // );

  return axiosInstant;
}

export const getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then(res => {
    if (res.data.status != 1) {
      return Promise.reject(new Error("Co loi xay ra"));
    }
    return Promise.resolve(res.data);
  });
}

export const requestLogin = payload => {
  return handleResult(
    getAxios.post("api/Service/LoginApp", {
      value: payload.value,
      type: payload.type
    })
  );
};

export const requestHomeData = (deviceID = "") => {
  return handleResult(
    getAxios.get(`api/Service/GetHomeScreen?deviceID=${deviceID}`)
  );
};


