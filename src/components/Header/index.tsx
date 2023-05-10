import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../data/theme";
import logo from "../../assets/react.svg";
import Container from "../Container";
import Wrapper from "../Wrapper";
import NavList from "./NavList";
import { RootState } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";
import menu from "../../data/menu";

function Header() {
	const theme = useSelector((state: RootState) => state.theme.value.mode);
	const dispatch = useDispatch();

	return (
		<header style={{ padding: "20px 0" }}>
			<Container>
				<Wrapper>
					<img src={logo} alt="logo" />
					<NavList dataList={menu} />
					<select
						name="theme"
						value={theme}
						onChange={(e) => dispatch(changeTheme(e.target.value))}
					>
						<option value={darkTheme.mode}>{darkTheme.mode}</option>
						<option value={lightTheme.mode}>
							{lightTheme.mode}
						</option>
					</select>
				</Wrapper>
			</Container>
		</header>
	);
}

export default Header;
