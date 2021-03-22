import React from "react";

function DynamicForm(props) {
  const generateInput = (m) => {
    switch (m.type) {
      case "text":
        return (
          <>
            <label className="form-label">{m.label}</label>
            <input
              className="form-control numberInput"
              type={m.type}
              placeholder={m.placeholder}
              defaultValue={m.defaultValue}
              required={m.required}
            />
          </>
        );
      case "number":
        return (
          <>
            <label className="form-label">{m.label}</label>
            <input
              className="form-control numberInput"
              type={m.type}
              placeholder={m.placeholder}
              defaultValue={m.defaultValue}
              required={m.required}
            />
          </>
        );
      case "textarea":
        return (
          <>
            <label className="form-label">{m.label}</label>
            <textarea
              className="form-control textareaInput"
              type={m.type}
              placeholder={m.placeholder}
              defaultValue={m.defaultValue}
              required={m.required}
            />
          </>
        );
      case "dropdown":
        return (
          <>
            <label>{m.label}</label>
            <select
              className="form-control dropdown"
              defaultValue={m.defaultValue}
            >
              {m.options.map((option) => {
                return <option key={option.key}>{option.value}</option>;
              })}
            </select>
          </>
        );

      default:
        break;
    }
  };

  const submitForm = () => {};

  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      {props.model.map((field) => {
        console.log(field);

        return (
          <div className="attrContainer" key={field.id}>
            <div className="returnAttr">{generateInput(field)}</div>
          </div>
        );
      })}
      <button className="btn btn-success" onClick={() => submitForm()}>
        Submit
      </button>
    </div>
  );
}

export default DynamicForm;
