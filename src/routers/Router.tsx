import { Routes, Route } from "react-router-dom";
import Home from "../features/Home";
import PostPage from "../features/PostPage";
import NotFound from "../features/NotFound";
import Layout from "../layout/layout";

function Router() {
	return (
		<Layout>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/post/:id" element={<PostPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}
export default Router;
