import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import NotFoundPage from "./ui/NotFoundPage";
import { user_URL } from "./utlis/constant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListingPage from "./components/UserListingPage";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az");
  const [loading, setLoading] = useState(true);

  const fetchUser = async (URL) => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(user_URL);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                search={search}
                setSearch={setSearch}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                showSearch={true}
              />
              <UserPage
                users={users}
                search={search}
                setSearch={setSearch}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                loading={loading}
              />
            </>
          }
        />
        <Route
          path="/user-listing"
          element={
            <>
              <Header
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                showSearch={false}
              />
              <UserListingPage />
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
