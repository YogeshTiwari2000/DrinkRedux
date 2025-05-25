
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDrinks } from '../features/drinkSlices';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = React.useState('a'); // Start with 'a' to show initial results
  const searchValue = React.useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    searchValue.current.focus();
    dispatch(fetchDrinks(searchTerm));
  }, [dispatch, searchTerm]);

  const searchCocktail = () => {
    const value = searchValue.current.value;
    setSearchTerm(value || 'a'); // Default to 'a' if empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchDrinks(searchTerm));
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
            value={searchTerm === 'a' ? '' : searchTerm} // Don't show 'a' in input
            placeholder="Search cocktails..."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
