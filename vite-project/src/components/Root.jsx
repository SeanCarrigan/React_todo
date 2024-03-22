import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NavigationBar from "./NavigationBar";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Root() {
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogPost />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
