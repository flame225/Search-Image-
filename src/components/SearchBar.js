import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ">
      <form onSubmit={handleFormSubmit}>
        
      <div class="container is-widescreen">
  <div class="notification is-primary">
    <code>$NDUBUISI</code> WELCOME <strong>YOU</strong> <em>TO</em> THIS <code>$IMAGE</code> SEARCH PROJECT.
  </div>
  

  <div class="container">
  <div class="notification is-primary">
     <strong>Enter Search Term</strong> 
  </div>
</div>

<input   value={term} onChange={handleChange} class="input is-primary" type="text" placeholder="Primary input"></input>
</div>



        
       

      </form>
    </div>
  );
}

export default SearchBar;
