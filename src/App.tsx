import Form from "./Form";
import "./App.css";

export default function App() {
  return (
    <Form
      onSubmit={() => {
        console.log("submitted");
      }}
    />
  );
}
