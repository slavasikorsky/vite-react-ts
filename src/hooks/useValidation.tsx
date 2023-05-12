import { useEffect, useState } from "react";
import { ValidationProps } from "../types/types";

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

export default useValidation;
