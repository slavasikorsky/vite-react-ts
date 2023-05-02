import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type LayoutProps = {
	children: JSX.Element | JSX.Element[];
};

function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children || <Outlet />}
		</>
	);
}

export default Layout;
