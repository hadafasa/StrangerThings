import PropTypes from 'prop-types';
function SearchForm({ onSearch }) {
    return (
      <div className="search-form">
        <input 
          type="text" 
          placeholder="Search posts..." 
          onChange={e => onSearch(e.target.value)} 
        />
      </div>
    );
  }
  
SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
  
  export default SearchForm;