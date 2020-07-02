import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterAndSort } from '../redux/actions';

function SortButton(props) {

  const dispatch = useDispatch();

  function handleSort(event) {
    dispatch(setFilterAndSort(event.currentTarget.name))
  };

	return (
		<button 
            type="button" 
            name={props.filterName} 
            className="filterBtn btn bg-transparent p-0 text-secondary font-weight-bold" 
            onClick={handleSort}>
        	{props.filterNameAsText}
            {(props.currentFilter === props.filterName) && <img src={props.reversedSort ? process.env.PUBLIC_URL + "/images/arrowUp.svg" : process.env.PUBLIC_URL + "/images/arrowDown.svg"} alt={`sort button for ${props.filterName}`} title={`sort button for ${props.filterName}`} />}
        </button>
	)
};

export default SortButton