import React from 'react';
import './css/UserTable.css';

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-2 py-2 text-left text-sm sm:text-base">Sr. No.</th>
            <th className="px-2 py-2 text-left text-sm sm:text-base">Name</th>
            <th className="px-2 py-2 text-left text-sm sm:text-base">Email</th>
            <th className="px-2 py-2 text-left text-sm sm:text-base">Pincode</th>
            <th className="px-2 py-2 text-left text-sm sm:text-base">Phone</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.zipcode}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
