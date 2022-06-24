import PropTypes from 'prop-types';
import { useState } from 'react';
const FindMovie = ({ getInput }) => {
  const [input, SetInput] = useState('');

  const onChange = e => {
    const { value } = e.currentTarget;
    SetInput(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getInput(input.toLocaleLowerCase().trim());
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={input}
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
FindMovie.propTypes = {
  getInput: PropTypes.func.isRequired,
};
export default FindMovie;
