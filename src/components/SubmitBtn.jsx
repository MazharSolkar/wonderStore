import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button className='btn btn-primary' type='submit'>
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'>sending...</span>
        </>
      ) : (
        text || 'Submiy'
      )}
    </button>
  );
};

export default SubmitBtn;
