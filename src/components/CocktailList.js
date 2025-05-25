import Cocktail from './Cocktail'
import Loading from './Loading'
import { useSelector } from 'react-redux';
import React from 'react';

const CocktailList = () => {
  const { drinks, loading, error } = useSelector((state) => state.drinks);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2 className='section-title'>Error: {error}</h2>;
  }

  // Handle case where drinks is null or empty
  if (!drinks || drinks.length === 0) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {drinks.map((item) => (
          <Cocktail key={item.idDrink} {...{
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            info: item.strAlcoholic,
            glass: item.strGlass
          }} />
        ))}
      </div>
    </section>
  );
};
export default CocktailList;