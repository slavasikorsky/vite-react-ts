import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
	children: JSX.Element | JSX.Element[];
};

const PageLayout = styled.div`
	min-height: 80vh;
`;

function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<PageLayout>{children || <Outlet />}</PageLayout>
			<Footer />
		</>
	);
}

export default Layout;
