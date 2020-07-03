import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUserAndSort } from '../redux/actions';
import PhoneNumberInput from './PhoneNumberInput';

function Form() {
  const [ currentUser, setCurrentUser ] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    birthDate: '',
    phoneNumber: '',
    gender: ''
  });

  useEffect(() => {
    setCurrentUser(prev => {
      return {
        ...prev,
        age: calculateAge(currentUser.birthDate)
      }
    })
  },[currentUser.birthDate]);

  useEffect(() => {
    setCurrentUser(prev => {
      return {
        ...prev,
        fullName: `${prev.firstName} ${prev.lastName}`
      }
    })
  },[currentUser.firstName, currentUser.lastName]);    

  function calculateAge(birthday) {
      var today = new Date();
      var birthDate = new Date(birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age = age - 1;
      }

      return (age >= 0) ? age : 'birth date isn\'t valid';
  };

  const dispatch = useDispatch();
  
  function handleChange(event) {
    const { name, value } = event.target;
    setCurrentUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentUser(prev => {
      return {
        ...prev,
        fullName: `${prev.firstName} ${prev.lastName}`
      }
    });   

    if(!Object.values(currentUser).includes('')) {
      dispatch(addNewUserAndSort(currentUser));
      setCurrentUser({
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        birthDate: '',
        phoneNumber: '',
        gender: ''
      })
    };
  };

  return (
    <div className="output my-3">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
      <h4 className="text-center text-secondary my-4">Registration form</h4>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="firstName" className="text-secondary font-weight-bold">Name</label>
          <input required type="text" name="firstName" className="form-control" id="firstName" placeholder="First" value={currentUser.firstName} onChange={handleChange} />
        </div>
        <div className="form-group col-md-6 mt-auto">
          <input required type="text" name="lastName" className="form-control" placeholder="Last" value={currentUser.lastName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-secondary font-weight-bold">Email</label>
        <input required type="email" name="email" className="form-control" id="email" value={currentUser.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="text-secondary font-weight-bold">Phone number</label>
        <PhoneNumberInput currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>     
      <div className="form-group">
        <label htmlFor="birthDate" className="text-secondary font-weight-bold">Birth date</label>
        <input required type="date" name="birthDate" className="form-control" id="birthDate" max={new Date().toISOString().split('T')[0]} value={currentUser.birthDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="text-secondary font-weight-bold">Gender</label>
        <div className="form-check">
          <input required className="form-check-input" type="radio" name="gender" id="male" value="male" checked={currentUser.gender === 'male'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input required className="form-check-input" type="radio" name="gender" id="female" value="female" checked={currentUser.gender === 'female'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>                
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
    </div>
  );
}

export default Form;