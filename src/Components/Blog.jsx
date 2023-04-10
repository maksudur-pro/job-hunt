import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <h2 className="md:text-5xl lg:text-7xl font-bold text-center">
        React Related Q&A
      </h2>
      <div className="my-16">
        <p className="text-2xl font-bold">When should you use context API?</p>
        <p className="text-xl text-gray-500 my-5">
          Answer: You should use the Context API when you need to make data
          available to many components in your application.
        </p>
        <p className="text-2xl font-bold">What is a custom hook?</p>
        <p className="text-xl text-gray-500 my-5">
          Answer: A custom hook is a JavaScript function that contains a
          collection of related React hooks. It allows you to share hooks logic
          across your application.
        </p>
        <p className="text-2xl font-bold">What is useRef?</p>
        <p className="text-xl text-gray-500 my-5">
          Answer: useRef is a React hook that is used to access and manipulate
          DOM elements, as well as create references to elements or React
          components.
        </p>
        <p className="text-2xl font-bold">What is useMemo?</p>
        <p className="text-xl text-gray-500 my-5">
          Answer: useMemo is a React hook that is used to cache the results of
          expensive calculations or expensive operations to improve performance.
        </p>
      </div>
    </div>
  );
};

export default Blog;
