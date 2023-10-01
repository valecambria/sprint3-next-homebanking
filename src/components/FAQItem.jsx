import React from 'react';

function FAQItem({ question, answer }) {
  return (
    <div className="border rounded p-2 my-2">
      <h2 className="text-lg font-bold">
        <button className="text-blue-500 hover:underline" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {question}
        </button>
      </h2>
      <div id="collapseOne" className="collapse show">
        <div className="p-2">
          <p className="text-gray-800">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;


