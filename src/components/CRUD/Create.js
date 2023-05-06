import React, { useState } from 'react';
import axios from 'axioooooos';
const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const header = { 'Access-control-Allow-origin': '*' };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('hit');
    axios.post('https://64523446a2860c9ed404cb94.mockapi.io/crud-app', {
      name: name,
      email: email,
      header,
    });
  };

  return (
    <div className="container">
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
