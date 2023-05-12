import styled from "styled-components";
import useInput from "../../hooks/useInput";

const FormBlock = styled.form`
	margin: 20px 0;
`;

function Form() {
	const email = useInput("", { isEmpty: true, isEmail: true });
	const tel = useInput("", { minLength: 9, isPhone: true });

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(e.target);
	};
	return (
		<FormBlock onSubmit={(e) => submitHandler(e)}>
			<div>
				{tel.isDirty && tel.minLengthError && (
					<div style={{ color: "red" }}>
						At least 9 characters required
					</div>
				)}
				{tel.isDirty && tel.isPhoneError && (
					<div style={{ color: "red" }}>
						Please write valid phone number
					</div>
				)}
				<input
					name="tel"
					placeholder="phone"
					onChange={(e) => tel.onChange(e)}
					onBlur={() => tel.onBlur()}
					value={tel.value}
					type="tel"
				/>
			</div>
			<div>
				{email.isDirty && email.isEmpty && (
					<div style={{ color: "red" }}>Please write email</div>
				)}
				{email.isEmailError}
				{email.isDirty && email.isEmailError && (
					<div style={{ color: "red" }}>Invalid email</div>
				)}
				<input
					name="email"
					placeholder="email"
					onChange={(e) => email.onChange(e)}
					onBlur={() => email.onBlur()}
					value={email.value}
					type="email"
				/>
			</div>
			<button
				type="submit"
				disabled={!tel.inputValid || !email.inputValid}
			>
				Send
			</button>
		</FormBlock>
	);
}

export default Form;
