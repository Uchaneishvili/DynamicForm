import React from "react";

export default class DynamicForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  formMap = () => {
    let model = this.props.model;

    let formUi = model.map((m) => {
      let key = m.key;
      let type = m.type;
      let props = m.props || {};
      let options = m.options || {};

      return (
        <div key={key}>
          <label>{m.label}</label>
          <input
            type={type}
            placeholder={m.placeholder}
            defaultValue={m.defaultValue}
            props={props}
          />
        </div>
      );
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
