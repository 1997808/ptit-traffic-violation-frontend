import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./features/pages/client";
import { ItemDetail } from "./features/pages/client/itemDetail";
import { Login } from "./features/pages/client/login";
import { Page404 } from "./features/pages/client/404";
import { Blog } from "./features/pages/client/blog";
import { ItemList } from "./features/pages/client/itemList";

import { ClientLayout } from "./features/layout/client";
import { Search } from "./features/layout/search";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />}>
            <Route index element={<ItemList />} />
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
