import { Component } from "react";
import DynamicForm from "./DynamicForm.js";

import "./App.css";

class App extends Component {
  form = {
    form: "test form",
    fields: [
      {
        type: "text",
        label: "test field",
        required: true,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        type: "number",
        label: "test field",
        required: false,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        type: "textarea",
        label: "test field",
        required: false,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        type: "dropdown",
        label: "test field",
        required: false,
        defaultValue: "1",
        placeholderText: "placeholder text",
        options: [
          { key: 1, value: "1" },
          { key: 2, value: "2" },
        ],
      },
      {
        type: "text",
        label: "test field",
        required: false,
        defaultValue: "1",
        placeholderText: "placeholder text",
      },
    ],
  };

  render() {
    return (
      <div>
        <DynamicForm
          className="container-center"
          title="Registration"
          model={[
            {
              key: "number",
              type: "number",
              placeholder: "placeholder text",
              label: "test field",
              defaultValue: "3",
              props: { required: true },
            },
            {
              key: "name",
              type: "text",
              placeholder: "placeholder text",
              label: "test field",
              defaultValue: "test value",
              props: { required: false },
            },
            {
              key: "text",
              type: "textarea",
              label: "test field",
              props: { required: false },
              defaultValue: "test value",
              placeholderText: "placeholder text",
            },
            {
              key: "dropdown",
              type: "dropdown",
              label: "test field",
              props: { required: false },
              defaultValue: "1",
              placeholderText: "placeholder text",
              options: [
                { key: 1, value: "1" },
                { key: 2, value: "2" },
              ],
            },
          ]}
          onSubmit={(model) => this.onSubmit(model)}
        />
      </div>
    );
  }
}

export default App;
