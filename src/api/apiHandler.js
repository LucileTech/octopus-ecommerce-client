import axios from "axios";

const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

// apiHandler.signup = (userInfo) => {
// 	return apiHandler
// 		.post("/api/auth/signup")
// 		.then((res) => res.data)
// 		.catch(errorHandler)
// }

// apiHandler.getAllArtists = function () {
//   return apiHandler
//     .get("/artists")
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     })
//     .catch((e) => console.log(e));
// };

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  //GET

  getAllArtists() {
    return service
      .get("/artists")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch(errorHandler);
  },

  getOrderCart() {
    return service
      .get("/orderCart")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch(errorHandler);
  },

  getAllCreations() {
    return service
      .get("/creations")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch(errorHandler);
  },

  // POST

  postAddToCart(id) {
    return service
      .post(`/creations/${id}/addtocart`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch(errorHandler);
  },
  



    // PATCH

    patchIncrementCreationToOrder(creationId) {
      return service
        .patch(`/orderCart/increment/${creationId}`)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch(errorHandler);
    },

    patchDecrementCreationToOrder(creationId) {
      return service
        .patch(`/orderCart/decrement/${creationId}`)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch(errorHandler);
    },
  
    buyCart() {
      return service
        .patch(`/orderCart/buy`)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch(errorHandler);
    },

    // DELETE

    deleteCart() {
      return service
        .delete(`/orderCart/delete`)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch(errorHandler);
    },

    

    // AUTH ROUTES

  // DELETE

  deleteCreationCart(productId) {
    return service
      .patch(`/orderCart/${productId}`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch(errorHandler);
  },

  // Authentification

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getAllTheCats() {
  // 	return service
  // 		.get("/api/cats")
  // 		.then((res) => res.data)
  // 		.catch(errorHandler);
  // },
};

// export default apiHandler

export default service;
