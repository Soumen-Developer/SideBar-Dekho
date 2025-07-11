import React, { useState } from 'react';
import './css/AddUserForm.css';

const AddUserForm = ({ addUser, setAddingUser, sidebarState }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, address: { zipcode: pincode }, phone });
    setAddingUser(false);
    console.log({ name, email, address: { zipcode: pincode }, phone });
  };

  const getLeftPosition = () => {
    if (sidebarState === 2) return '16rem'; // w-64
    if (sidebarState === 1) return '4rem';  // w-16
    return '0';
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-60 z-50 flex justify-center items-start overflow-y-auto"
      style={{ left: getLeftPosition() }}
    >
      <div className="relative p-5 border w-9/10 md:w-96 shadow-lg rounded-md bg-white mt-20">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-bold text-gray-900">Add User</h3>
          <form onSubmit={handleSubmit} className="mt-2 px-7 py-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-3 px-3 py-2 text-gray-700 bg-gray-100 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3 px-3 py-2 text-gray-700 bg-gray-100 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              pattern="[0-9]{6}"
              title="Please enter a valid 6-digit pincode"
              onChange={(e) => setPincode(e.target.value)}
              required
              className="mb-3 px-3 py-2 text-gray-700 bg-gray-100 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mb-3 px-3 py-2 text-gray-700 bg-gray-100 rounded-md w-full"
            />
            <div className="items-center px-0 py-2 pb-0">
              <button
                type="submit"
                className="px-3 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300" 
              >
                Add
              </button>
            </div>
          </form>
          <div className="items-center px-6 py-3 pt-0 pr-[30px]" >
            <button
              onClick={() => setAddingUser(false)}
              className="px-3 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300" 

            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
