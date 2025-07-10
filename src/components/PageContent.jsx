import React from 'react';

export default function PageContent({ title, body }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{body}</p>
    </div>
  );
}
