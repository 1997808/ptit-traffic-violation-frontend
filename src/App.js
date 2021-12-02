import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./features/pages/client";
import { Login } from "./features/pages/client/login";
import { Page404 } from "./features/pages/client/404";
import { Blog } from "./features/pages/client/blog";
import { ItemList } from "./features/pages/client/itemList";
import { Help } from "./features/pages/client/help";
import { Contact } from "./features/pages/client/contact";

import { AdminHome } from "./features/pages/admin/index";
import { AdminItem } from "./features/pages/admin/item/index";
import { AdminAddItem } from "./features/pages/admin/item/addItem";
import { AdminItemDetail } from "./features/pages/admin/item/itemDetail";
import { AdminViolation } from "./features/pages/admin/violation/index";
import { AdminAddViolation } from "./features/pages/admin/violation/addViolation";
import { AdminViolationDetail } from "./features/pages/admin/violation/violationDetail";
import { AdminPayment } from "./features/pages/admin/payment";

import { ClientLayout } from "./features/layout/client";
import { AdminLayout } from "./features/layout/admin";
import { ProtectedRoute, AuthRoute } from "./assets/util/CustomRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="item" element={<ItemList />} />
          <Route path="blog" element={<Blog />} />
          <Route path="help" element={<Help />} />
          <Route path="contact" element={<Contact />} />
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
            <Route index element={<AdminItem />} />
            <Route path="add" element={<AdminAddItem />} />
            <Route path=":id" element={<AdminItemDetail />} />
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
    </Router>
  );
}

export default App;
