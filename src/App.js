import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./features/pages/client";
import { Login } from "./features/pages/client/login";
import { Page404 } from "./features/pages/client/404";
import { Blog } from "./features/pages/client/blog";
import { ItemList } from "./features/pages/client/itemList";
import { Help } from "./features/pages/client/help";
import { Term } from "./features/pages/client/term";

import { AdminHome } from "./features/pages/admin/index";
import { AdminDocument } from "./features/pages/admin/document/index";
import { AdminAddDocument } from "./features/pages/admin/document/addDocument";
import { AdminDocumentDetail } from "./features/pages/admin/document/documentDetail";
import { AdminViolation } from "./features/pages/admin/violation/index";
import { AdminAddViolation } from "./features/pages/admin/violation/addViolation";
import { AdminViolationDetail } from "./features/pages/admin/violation/violationDetail";
import { AdminPayment } from "./features/pages/admin/payment";

import { ClientLayout } from "./features/layout/client";
import { AdminLayout } from "./features/layout/admin";
import { ProtectedRoute, AuthRoute } from "./assets/util/CustomRoute";
import "./App.css";
import { useDispatch } from "react-redux";
import { MyAxios } from "./assets/util/api";
import { login, logOut } from "./app/reducers/auth";
import { ScrollToTop } from "./assets/util/CustomRoute";
// import {login} from

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkSession = async () => {
      await MyAxios.get("user/checkSession.php")
        .then((res) => {
          if (res.data) {
            dispatch(login());
          } else {
            dispatch(logOut());
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    checkSession();
  }, [dispatch]);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="item" element={<ItemList />} />
            <Route path="blog" element={<Blog />} />
            <Route path="help" element={<Help />} />
            <Route path="term" element={<Term />} />
            <Route
              path="login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="item">
              <Route index element={<AdminDocument />} />
              <Route path="add" element={<AdminAddDocument />} />
              <Route path=":id" element={<AdminDocumentDetail />} />
            </Route>
            <Route path="violation">
              <Route index element={<AdminViolation />} />
              <Route path="add" element={<AdminAddViolation />} />
              <Route path=":id" element={<AdminViolationDetail />} />
            </Route>
            {/* <Route path="user">
            <Route index element={<AdminViolation />} />
            <Route path="add" element={<AdminAddViolation />} />
            <Route path=":id" element={<AdminViolation />} />
          </Route> */}
            <Route path="payment" element={<AdminPayment />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
