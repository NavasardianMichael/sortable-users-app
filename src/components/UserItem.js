import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions';

function UserItem(props) {
  const dispatch = useDispatch();

  function removeHandler() {
    var removeConfirmation = window.confirm(`Are you sure you want to remove ${props.user.firstName} ${props.user.lastName} ?`);
    removeConfirmation && dispatch(removeUser(props.user.id));
  };

  return (
      <tr>
        <td>{props.rowIndex}</td>
        <td>{`${props.user.firstName} ${props.user.lastName}`}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phoneNumber}</td>
        <td>{props.user.age}</td>
        <td>{props.user.gender}</td>
        <td>
          <button type="button" className="btn bg-transparent p-0" onClick={removeHandler}>
            <img src={process.env.PUBLIC_URL + "/images/removeIcon.png"} alt="remove the user" title="remove the user" style={{ width: 20 }} />
          </button>
        </td>                                    
      </tr>
  )
}

export default UserItem;