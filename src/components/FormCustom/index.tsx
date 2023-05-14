import { useState } from "react";
import styled from "styled-components";
import FormCustomInput from "./FormCustomInput";
import { IInputItem } from "../../types/types";

type InputProps = {
	inputs: IInputItem[];
};

const Submit = styled.button`
	font-weight: 700;
	margin-top: 20px;
	width: 200px;
`;

function FormCustom({ inputs }: InputProps) {
	// create starting object with all input names
	const allInputs = {} as IInputItem;
	inputs.map((input: IInputItem) =>
		Object.assign(allInputs, { [input.name]: "" })
	);
	const [values, setValues] = useState(allInputs);
	const [formSubmit, setFormSubmit] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmit(true);
		// send data
		console.log(values);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return !formSubmit ? (
		<form onSubmit={(e) => handleSubmit(e)}>
			{inputs.map((input) => (
				<FormCustomInput
					id={input.id}
					key={input.id}
					name={input.name}
					type={input.type}
					label={input.label}
					value={values[input.name]}
					onChange={(e) => onChange(e)}
					placeholder={input.placeholder}
					pattern={input.pattern}
					errorMessage={input.errorMessage}
					required={input.required}
				/>
			))}
			<Submit type="submit">Submit</Submit>
		</form>
	) : (
		<p>Thanks dude, your data sended</p>
	);
}

export default FormCustom;
