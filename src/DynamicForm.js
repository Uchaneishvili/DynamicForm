import React from "react";

export default class DynamicForm extends React.Component {
  inputText = () => {};

  formMap = () => {
    let model = this.props.model;

    let formUi = model.map((m) => {
      if (m.type === "text") {
        return (
          <div>
            <label>{m.label}</label>
            <input
              type={m.type}
              placeholder={m.placeholder}
              defaultValue={m.defaultValue}
            />
          </div>
        );
      } else if (m.type === "number") {
        return (
          <div>
            <label>{m.label}</label>
            <input
              type={m.type}
              placeholder={m.placeholder}
              defaultValue={m.defaultValue}
            />
          </div>
        );
      } else if (m.type === "textarea") {
        return (
          <div>
            <label>{m.label}</label>
            <textarea />
          </div>
        );
      } else if (m.type === "dropdown") {
        return <div></div>;
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
      </div>
    );
  }
}
