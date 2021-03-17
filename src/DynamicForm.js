import React from "react";

export default class DynamicForm extends React.Component {
  formMap = () => {
    let model = this.props.model;

    let formUi = model.map((m) => {
      if (m.type === "text") {
        if (m.required == "true") {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <input
                  className="form-control numberInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                  required
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <input
                  className="form-control numberInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                />
              </div>
            </div>
          );
        }
      } else if (m.type === "number") {
        if (m.required == "true") {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <input
                  className="form-control numberInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                  required
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <input
                  className="form-control numberInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                />
              </div>
            </div>
          );
        }
      } else if (m.type === "textarea") {
        if (m.required == "true") {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <textarea
                  className="form-control textareaInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                  required
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="attrContainer">
              <div className="returnAttr">
                <label className="form-label">{m.label}</label>
                <textarea
                  className="form-control textareaInput"
                  type={m.type}
                  placeholder={m.placeholder}
                  defaultValue={m.defaultValue}
                />
              </div>
            </div>
          );
        }
      } else if (m.type === "dropdown") {
        return (
          <div className="attrContainer">
            <div className="returnAttr">
              <label>{m.label}</label>
              <select
                className="form-control dropdown"
                defaultValue={m.defaultValue}
              >
                <option>test</option>
                <option>test</option>
              </select>
            </div>
          </div>
        );
      }
      return <div key={m.key}></div>;
    });
    return formUi;
  };

  render() {
    let title = this.props.title || "Dynamic Form";

    return (
      <div className={this.props.className}>
        <h1>{title}</h1>
        {this.formMap()}
        <button className="btn btn-success">Submit</button>
      </div>
    );
  }
}
