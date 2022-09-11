import "./Form.css";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add new task"
          onChange={handleChange}
        />
        <input type="checkbox" name="completed" />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default Form;
