import { FormEvent, useRef } from "react";

const form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageref = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmitted = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageref.current !== null) person.age = parseInt(ageref.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmitted}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageref} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default form;
