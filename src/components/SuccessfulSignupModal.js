// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const SuccessfulSignupModal = ({ onClose }) => {
//   const history = useHistory();

//   const handleOKClick = () => {
//     // You can perform any navigation-related action here
//     // For example, navigate to a specific route
//     history.push('/dashboard');

//     // Then call the onClose function to close the modal
//     onClose();
//   };
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Congratulation!</h2>
//         <p className="mb-4">You have successfully signed up!</p>
//         <button
//           onClick={handleOKClick}
//           className="bg-black text-white py-2 px-4 rounded-lg"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SuccessfulSignupModal;
import React from 'react';
import { useNavigate } from 'react-router-dom';
const SuccessfulSignupModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="mb-4">You have successfully signed up!</p>
        <button
          onClick={() => {
            navigate('/log-in');
          }}
          className="bg-black text-white py-2 px-4 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSignupModal;
