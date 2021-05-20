import React from 'react';
import Input from '../../../components/input/Input';

const SearchList = () => {
  const listForSearching = ["Капуста", "Репа", "Редиска", "Морковка",'Капуста', 'Репа', 'Редиска', 'Морковка','Капуста', 'Репа', 'Редиска', 'Морковка']
  return (
      <div>
       <Input/>
        <p>List</p>
        {
          listForSearching.map(item => <p>{item}</p>)
        }
      </div>
  );
};

export default SearchList;
