import { useEffect, useState } from "react";
import styled from "styled-components";

type ValidationProps = {
	isEmpty?: boolean;
	minLength?: number;
	isEmail?: boolean;
	isPhone?: boolean;
};

const FormBlock = styled.form`
	margin: 20px 0;
`;

const useValidation = (value: string, validations: ValidationProps) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPhoneError, setIsPhoneError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		Object.keys(validations).forEach((validation) => {
			switch (validation) {
				case "minLength":
					return value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				case "isEmpty":
					return value ? setIsEmpty(false) : setIsEmpty(true);
					break;
				case "isEmail":
					return String(value)
						.toLowerCase()
						.match(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						)
						? setIsEmailError(false)
						: setIsEmailError(true);
					break;
				case "isPhone":
					return String(value).match(
						/* eslint-disable */
						/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
					)
						? setIsPhoneError(false)
						: setIsPhoneError(true);
					break;
				default:
					break;
			}

			return validation;
		});
	}, [value, validations]);

	useEffect(() => {
		isEmpty || minLengthError || isPhoneError || isEmailError
			? setInputValid(false)
			: setInputValid(true);
	}, [isEmpty, minLengthError, isPhoneError, isEmailError]);

	return {
		isEmpty,
		minLengthError,
		isEmailError,
		isPhoneError,
		inputValid,
	};
};

const useInput = (initialValue: string, validations: ValidationProps) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onBlur = () => {
		setDirty(true);
	};

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	};
};

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
