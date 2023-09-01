import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Layout";
import store from "./redux/store";
import { ViewPosts } from "./components/ViewPosts";
import { Route, Routes } from "react-router-dom";
import Login from "./components/register/Login";
import Register from './components/register/Register'
import PrivetePages from "./auth/PrivetePages";
import UsersPage from "./components/usersPage/UsersPage";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<ViewPosts />}/>

          {/* Private Route */}
          <Route path="/users" element={<PrivetePages Component={<UsersPage />}/>}/>

          {/* Login and register */}
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        
      </Layout>
    </Provider>
  );
}

export default App;
