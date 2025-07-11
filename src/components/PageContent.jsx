import React from 'react';

export default function PageContent({ title, children }) {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
