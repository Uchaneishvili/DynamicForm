import { Component } from "react";
import DynamicForm from "./DynamicForm.js";

import "./App.css";

function App() {
  const form = {
    title: "test form",
    fields: [
      {
        id: 1,
        type: "text",
        label: "test field",
        required: true,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        id: 2,
        type: "number",
        label: "test field",
        required: false,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        id: 3,
        type: "textarea",
        label: "test field",
        required: false,
        defaultValue: "test value",
        placeholderText: "placeholder text",
      },
      {
        id: 4,
        type: "dropdown",
        label: "test field",
        required: false,
        defaultValue: "1",
        placeholderText: "placeholder text",
        options: [
          { key: 1, value: "option1" },
          { key: 2, value: "2" },
          { key: 3, value: "2222" },
        ],
      },
      {
        id: 5,
        type: "text",
        label: "test field",
        required: false,
        defaultValue: "default",
        placeholderText: "placeholder text",
      },
    ],
  };

  const onSubmit = (model) => {
    console.log("test");
  };

  return (
    <div>
      <DynamicForm
        className="container-center"
        title={form.title}
        model={form.fields}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
