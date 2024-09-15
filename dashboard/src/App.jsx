import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ManageSkills from "./pages/ManageSkills";
import ManageProjects from "./pages/ManageProjects";
import UpdateProject from "./pages/UpdateProject";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/userSlice";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { getAllSkills } from "./store/slices/skillSlice";
import { getAllSoftwareApplications } from "./store/slices/softwareApplicationSlice";
import { getAllTimeline } from "./store/slices/timelineSlice";
import { getAllMessages } from "./store/slices/messagesSlice";
import ManageTimeline from "./pages/ManageTimeline";
import { getAllProjects } from "./store/slices/projectSlice";
import ViewProject from "./pages/ViewProject";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllSkills());
    dispatch(getAllSoftwareApplications());
    dispatch(getAllTimeline());
    dispatch(getAllMessages());
    dispatch(getAllProjects());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/manage/skills" element={<ManageSkills />} />
        <Route path="/manage/timeline" element={<ManageTimeline />} />
        <Route path="/manage/projects" element={<ManageProjects />} />
        <Route path="/view/project/:id" element={<ViewProject />} />
        <Route path="/update/project/:id" element={<UpdateProject />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;


// ek error hai Forget Password karte time 
// project Add me bhi problem hai.... Dashboard pe show nhi ho raha hai 

// 5:39:31 se dekhna hai 
// 5:59:31 se dekhna hai 
//8:49:39 se dekhna hai



// 14:21:3 tak kr liye hai 