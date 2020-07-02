import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import SortButton from './SortButton';

function Output(props) {
  
  if(props.usersToShow.length === 0) {
    return (
      <h4 className="my-5 text-danger">There are no submitted users yet</h4>
    )
  };

  const usersToShow = props.usersToShow.map((user, index) => <UserItem user={user} rowIndex={index+1} key={user.firstName[0] + user.lastName[0] + user.email[0] + user.phoneNumber[0] + user.gender[0] + user.birthDate} />)

  return (
    <div className="output mt-5">
        <h2 className="my-3">Output</h2>
        <table className="table text-secondary">
        <thead>
          <tr className="bg-light">
            <th scope="col">#</th>
            <th scope="col">
              <SortButton filterNameAsText="First Name" filterName="fullName" currentFilter={props.currentFilter} reversedSort={props.reversedSort} />
            </th>
            <th scope="col">
              <SortButton filterNameAsText="Email" filterName="email" currentFilter={props.currentFilter} reversedSort={props.reversedSort} />
            </th>
            <th scope="col">
              <SortButton filterNameAsText="Phone Number" filterName="phoneNumber" currentFilter={props.currentFilter} reversedSort={props.reversedSort} />
            </th>
            <th scope="col">
              <SortButton filterNameAsText="Age" filterName="age" currentFilter={props.currentFilter} reversedSort={props.reversedSort} />
            </th>
            <th>
              <SortButton filterNameAsText="Gender" filterName="gender" currentFilter={props.currentFilter} reversedSort={props.reversedSort} />
            </th>
            <th scope="col"></th>  
          </tr>
        </thead>
        <tbody>
          {usersToShow}      
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    usersToShow: state.data.usersToShow,
    currentFilter: state.data.currentFilter,
    reversedSort: state.data.reversedSort
  }
}

export default connect(mapStateToProps, null)(Output);