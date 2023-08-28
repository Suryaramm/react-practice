import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [expectedCompletionDate, setExpectedCompletionDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName && taskDescription && expectedCompletionDate) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container mt-5">
        <h1>Submitted Values</h1>
        <p><strong>Task Name:</strong> {taskName}</p>
        <p><strong>Task Description:</strong> {taskDescription}</p>
        <p><strong>Expected Completion Date:</strong> {expectedCompletionDate}</p>
      </div>
    );
  }

  return (
    <div className="container  d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task Name:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Task Description:</label>
          <textarea
            className="form-control form-control-lg"
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expectedCompletionDate" className="form-label">Expected Completion Date:</label>
          <input
            type="date"
            className="form-control form-control-lg"
            id="expectedCompletionDate"
            value={expectedCompletionDate}
            onChange={(e) => setExpectedCompletionDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
