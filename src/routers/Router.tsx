import { Routes, Route } from "react-router-dom";
import Home from "../features/Home";
import PostPage from "../features/PostPage";
import NotFound from "../features/NotFound";
import Layout from "../layout/layout";
import Blog from "../features/Blog";
import About from "../features/About";
import Contact from "../features/Contact";

function Router() {
	return (
		<Layout>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/post/:id" element={<PostPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}
export default Router;
