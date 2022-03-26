import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import HomeLayout from './layouts/home'
import Home from './pages/Home'
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Class from "./pages/Class";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Assignment from "./pages/Assignment";
import Test from "./pages/Test";
import Chat from "./pages/Chat";
import Grades from "./pages/Grades";
import Files from "./pages/Files";
import Fees from "./pages/Fees";
import {Announcement} from "@mui/icons-material";


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <HomeLayout/>,
      children: [
        { path: 'home', element: <Home/> },
        { path: 'profile', element: <Profile/> },
        { path: 'course', element: <Navigate to="/dashboard" /> },
        { path: 'fees', element: <Fees/> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" />}

      ]
    },

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        {path: 'class', element: <Class/> },
        { path: 'video', element: <Video/> },
        { path: 'test', element: <Test/> },
        { path: 'chat', element: <Chat/> },
        {path: 'grades', element: <Grades/> },
        { path: 'assignment', element: <Assignment/> },
        { path: 'files', element: <Files/> },
        {path: 'announcement', element: <Announcement/> },
        { path: '*', element: <Navigate to="/404" />}
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
