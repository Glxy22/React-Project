import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {     //define interface to autocomplete errors.name in input field
  name: string;
  age: number;
}

const FormValidation = () => {
  // to check the form property functions in console.log
  // const form = useForm()
  //   console.log(form)

  // use form function now below
  // formState for error handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();   //<FormData is used to autocomplete the input box in errors.name in input field
  console.log(register("name")); //name is name of input
  // console.log(formState.errors)

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* add markup to form shortcut :  
        div.mb-3>label.form-label+input.form-control
         (html elements with classes from bootstrap shortcut way of coding)*/}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        {/* event is any value changes in input field */}
        {/* applying validation on input fields */}

        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        ></input>

        {/* error shows only if property namehas error*/}
        {errors.name?.type === "required" && (
          <p className="text.danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text.danger"> minimum 3 characters are required.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormValidation;
