import React, { useState } from 'react';
import ClaimFormImg from '../../../assets/Vector.svg';
import TextField from '@mui/material/TextField';

const textFieldStyle = {
  '& .MuiInputLabel-root': {
    color: '#4b2c5e',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    '&.Mui-focused': {
      color: '#4b2c5e'
    }
  },
  '& .MuiInput-root': {
    fontSize: '20px',
    fontFamily: 'Helvetica',
    color: '#4b2c5e',
    '&:before': {
      borderBottomColor: 'rgba(75,44,94,0.4)'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'rgba(75,44,94,0.6)'
    },
    '&:after': {
      borderBottomColor: '#4b2c5e'
    },
    '&.Mui-focused': {
      color: '#4b2c5e'
    }
  },
  '& .MuiFormHelperText-root': {
    fontSize: '14px',
    fontFamily: 'Helvetica'
  },
  '& .Mui-error': {
    color: '#d32f2f',
    '&:after': {
      borderBottomColor: '#d32f2f'
    }
  }
};

const selectFieldStyle = {
  ...textFieldStyle,
  '& .MuiSelect-select': {
    fontSize: '20px',
    fontFamily: 'Helvetica',
    color: '#4b2c5e'
  },
  '& .MuiSelect-icon': {
    color: '#4b2c5e'
  }
};

const ClaimOne = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: '',
    state: '',
    asbestosExposure: '',
    exposureLocation: '',
    dateOfBirth: '',
    story: '',
    privacyPolicy: false,
    humanVerification: false
  });

  // State for form validation
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      'firstName', 'lastName', 'phoneNumber', 'emailId',
      'state', 'asbestosExposure', 'exposureLocation', 'dateOfBirth'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailId && !emailRegex.test(formData.emailId)) {
      newErrors.emailId = 'Invalid email format';
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number (10 digits required)';
    }

    // Privacy policy and human verification
    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'You must agree to the privacy policy';
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = 'Please verify you are a person';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // Here you would typically send the data to a backend service
    } else {
      alert('Please correct the errors in the form');
    }
  };

  return (
    <div
      className="w-full relative bg-[#faf3ec] min-h-screen overflow-hidden text-left text-[20px] text-[#4b2c5e] font-helvetica px-4 sm:px-8 py-8 sm:py-12"
    >
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8 md:mb-16">
        <div className="w-full md:w-[450px] flex-shrink-0">
          <img
            src={ClaimFormImg}
            alt="Claim Form Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 pt-4 md:pt-8 text-left">
          <i className='font-["Georgia"] relative text-[40px] sm:text-[60px] md:text-[80px] lg:text-[80px] inline-block text-[#4b2c5e]'>
            <span>{`You Don't Have to `}</span>
            <span className="text-[rgba(75,44,94,0.66)]">Face This Alone </span>
          </i>
          <div className='font-["Helvetica"] relative text-[18px] sm:text-[20px] md:text-[24px] text-[#4b2c5e] inline-block pb-[30px]'>{`If you, or a family member has been diagnosed with mesothelioma, don't hesitate to reach out. `}</div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full md:w-[800px] md:-mt-[5%] md:mr-[10%]">
        <div className="rounded-[20px] bg-white p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="mb-8 md:mb-12">
            <i className="block text-[24px] sm:text-[28px] md:text-[32px] font-['Georgia'] mb-4 md:mb-8 text-left">
              We're here to fight for you every step of the way.
            </i>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name *"
                  variant="standard"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={textFieldStyle}
                />
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name *"
                  variant="standard"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number *"
                  variant="standard"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={textFieldStyle}
                />
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email ID *"
                  variant="standard"
                  fullWidth
                  value={formData.emailId}
                  onChange={handleChange}
                  error={!!errors.emailId}
                  helperText={errors.emailId}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="state"
                  name="state"
                  select
                  label="Select State *"
                  variant="standard"
                  fullWidth
                  value={formData.state}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                  sx={selectFieldStyle}
                >
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                </TextField>
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="asbestosExposure"
                  name="asbestosExposure"
                  select
                  label="Type of Asbestos Exposure *"
                  variant="standard"
                  fullWidth
                  value={formData.asbestosExposure}
                  onChange={handleChange}
                  error={!!errors.asbestosExposure}
                  helperText={errors.asbestosExposure}
                  sx={textFieldStyle}
                >
                  <option value="">Select exposure type</option>
                  <option value="workplace">Workplace</option>
                  <option value="home">Home</option>
                  <option value="other">Other</option>
                </TextField>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="exposureLocation"
                  name="exposureLocation"
                  label="Location of Exposure *"
                  variant="standard"
                  fullWidth
                  value={formData.exposureLocation}
                  onChange={handleChange}
                  error={!!errors.exposureLocation}
                  helperText={errors.exposureLocation}
                  sx={textFieldStyle}
                />
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of birth *"
                  type="date"
                  variant="standard"
                  fullWidth
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth}
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div>
              <TextField
                id="story"
                name="story"
                label="Tell us your story (optional)"
                variant="standard"
                fullWidth
                multiline
                minRows={4}
                value={formData.story}
                onChange={handleChange}
                sx={textFieldStyle}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div className="text-xs sm:text-sm font-['Helvetica'] ">
                  <span>I agree to the </span>
                  <b>privacy policy</b>
                  <span> and </span>
                  <b>disclaimer</b>
                  <span> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.</span>
                </div>
              </div>
              {errors.privacyPolicy && <div className="text-red-500 text-sm">{errors.privacyPolicy}</div>}

              <div className="flex items-start gap-4 font-['Helvetica']">
                <input
                  type="checkbox"
                  name="humanVerification"
                  checked={formData.humanVerification}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div className="text-xs sm:text-sm">Please check this box to verify you're a person.</div>
              </div>
              {errors.humanVerification && <div className="text-red-500 text-sm">{errors.humanVerification}</div>}
            </div>

            <div className="text-left sm:text-left">
              <button
                type="submit"
                className="rounded-[10px] bg-[#2e4a7d] text-[#f8f2e9] px-8 sm:px-12 py-3 sm:py-4 font-bold hover:bg-[#243c68] transition-colors text-sm sm:text-base md:text-lg "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ClaimOne;