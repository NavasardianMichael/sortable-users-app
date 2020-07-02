import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

function PhoneNumberInput(props) {
  
	function intTelChangeHandler(isValid, phone, country) {
	    props.setCurrentUser(prev => {
	      return {
	        ...prev,
	        phoneNumber: phone
	      }
	    })
	};

	function intCountryChangeHandler(input, countryInfo) {
	    props.setCurrentUser(prev => {
	      return {
	        ...prev,
	        phoneNumber: `+${countryInfo.dialCode} `
	      }
	    })
	};

	return (
		<IntlTelInput 
			required 
			type="tel" 
			name="phoneNumber" 
			className="form-control" 
			containerClassName="intl-tel-input w-100" 
			inputClassName="form-control"
			id="phoneNumber" 
			defaultCountry="am"
			value={props.currentUser.phoneNumber} 
			onPhoneNumberChange={intTelChangeHandler} 
			onSelectFlag={intCountryChangeHandler}
		/>
	)
};

export default PhoneNumberInput