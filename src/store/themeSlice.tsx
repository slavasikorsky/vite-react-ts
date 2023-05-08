import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../data/theme";

export interface ThemeState {
	value: { mode: string };
}

const initialState: ThemeState = {
	value: darkTheme,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<string>) => {
			if (action.payload === "light") {
				state.value = lightTheme;
			} else {
				state.value = darkTheme;
			}
		},
	},
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
