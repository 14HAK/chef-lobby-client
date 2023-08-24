const Blog = () => {
  return (
    <div className='w-full h-screen bg-slate-200 px-12 py-5 overflow-x-hidden'>
      <div className='pb-10'>
        <h2 className='text-2xl uppercase font-semibold mb-2'>
          differences between uncontrolled and controlled components:
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <div>
          Uncontrolled and controlled components in React refer to different
          approaches for managing form inputs and their corresponding state.
          Here are the key differences between them
          <ul className='pt-3'>
            <li>
              State Management: In uncontrolled components, the component's
              state is managed by the DOM itself, and React does not have direct
              control over the component's values. On the other hand, controlled
              components have their state managed by React using component state
              or external state management libraries.
            </li>
            <li>
              Value Handling: Uncontrolled components allow the DOM to handle
              the input values directly. You can access the input values using
              DOM methods like getElementById or ref. In controlled components,
              the value of the input elements is controlled by React and stored
              in component state. Changes to the input values are handled
              through event handlers.
            </li>
            <li>
              Validation and Error Handling: With uncontrolled components, it
              can be more challenging to implement form validation and error
              handling since the state is managed outside of React. Controlled
              components make it easier to implement validation and error
              handling by controlling the state in React, allowing you to
              validate input values before updating the state.
            </li>
            <li>
              Testing: Controlled components are easier to test since their
              values and behaviors are controlled by React. You can easily
              simulate user interactions by updating the state and asserting the
              expected behavior. Uncontrolled components require more effort to
              test since you need to access and manipulate the DOM directly.
            </li>
          </ul>
        </div>
      </div>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>
          How to validate React props using PropTypes:
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          1. Install the prop-types package if it's not already installed. You
          can install it using npm or yarn: $- npm install prop-types
        </p>
        <p>
          2. Import the PropTypes object from the prop-types package in your
          component file. jsx- import PropTypes from 'prop-types';
        </p>
        <p>
          3. Define the prop types for your component by assigning them to the
          propTypes property of your component.jsx:
          <pre>...............</pre>
        </p>
        <p>
          4.PropTypes.string // Validates that the prop is a string should be
          numbers, boolean etc.
        </p>
        <p>
          5.By defining prop types using PropTypes, you can catch potential
          errors and validate the props being passed to your components, which
          helps in maintaining code quality and reducing bugs.
        </p>
      </div>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>
          React useRef Hook, How to Work?
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          The useRef hook in React allows you to create a mutable reference to a
          DOM element or any other value, which can persist across re-renders of
          a component. It can be used to access and modify a DOM node directly,
          or to store any other type of mutable data that you want to persist
          between renders.
        </p>
      </div>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>
          difference between nodejs and express js.
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          Node.js is a runtime environment that allows you to run JavaScript
          code outside of a browser. It provides a server-side platform for
          building scalable and high-performance applications. Node.js is built
          on Chrome's V8 JavaScript engine and uses an event-driven,
          non-blocking I/O model, which makes it efficient for handling
          concurrent requests. Node.js enables you to build server-side
          applications, command-line tools, microservices, and more using
          JavaScript.
        </p>
        <p>
          Express.js is a web application framework built on top of Node.js. It
          provides a set of features and utilities to simplify the development
          of web applications. Express.js is minimalist and unopinionated,
          giving developers the flexibility to structure and design their
          applications according to their needs. Express.js provides routing
          capabilities, middleware support, and templating engines, making it
          easy to handle HTTP requests, define routes, and render dynamic
          content. Express.js is widely adopted and has a large ecosystem of
          plugins and middleware packages that enhance its functionality.
        </p>
      </div>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          Reusability: Custom hooks promote code reuse by allowing you to
          encapsulate and share common logic across different components. They
          enable you to extract and abstract complex or repetitive logic into a
          single function, making it easier to maintain and reuse in multiple
          parts of your application. Composition: Custom hooks enable you to
          compose multiple hooks and combine their functionality. This allows
          you to build more complex behaviors by combining smaller, reusable
          hooks. It promotes modular and composable code, making it easier to
          manage and reason about. Abstraction: Custom hooks can abstract away
          the implementation details of a specific feature or functionality,
          providing a clean and simplified interface to use in your components.
          They encapsulate the inner workings of the logic and expose a
          higher-level API, making it easier to understand and use the
          functionality. Code organization: Custom hooks help to keep your
          component code focused and concise. By extracting stateful logic into
          custom hooks, you can separate concerns and keep your components clean
          and easy to read. It improves code organization and maintainability.
        </p>
      </div>
    </div>
  );
};

export default Blog;
