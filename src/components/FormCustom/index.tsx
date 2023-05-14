import { useState } from "react";
import FormCustomInput from "./FormCustomInput";
import { IInputItem } from "../../types/types";

type InputProps = {
	inputs: IInputItem[];
};

function FormCustom({ inputs }: InputProps) {
	const allInputs = {} as IInputItem;
	inputs.map((input: IInputItem) =>
		Object.assign(allInputs, { [input.name]: "" })
	);
	const [values, setValues] = useState(allInputs);
	const [formError, setFormError] = useState<boolean | string>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const allInputsFilled = Object.values(values).every((value) => {
			// const current = inputs.map((input) => input.name === key);
			console.log();
			return value.length > 0;
		});
		if (allInputsFilled) {
			setFormError(false);
			// send data
			console.log(values);
		} else {
			setFormError("fill all inputs");
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<div className="app">
			{formError}
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default FormCustom;
