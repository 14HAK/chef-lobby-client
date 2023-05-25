const Blog = () => {
  return (
    <div className='w-full h-screen bg-slate-200 px-12 py-5 overflow-x-hidden'>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>React useContext:</h2>
        <hr className='border border-cyan-600 mb-5' />
        <div>
          The React Context API is a way to pass data through the component tree
          without having to pass props down manually at every level. Here are
          some scenarios where you may want to use the Context API
          <ul className='pt-3'>
            <li>
              Sharing data between components that are not directly connected in
              the component tree. This can help reduce prop drilling and make
              your code more modular.
            </li>
            <li>
              When you have data that needs to be accessed by many components
              across different levels of the component tree.
            </li>
            <li>
              When you have data that needs to be updated frequently or
              asynchronously.
            </li>
            <li>When you have a complex state management system </li>
          </ul>
        </div>
      </div>
      <div className='pb-10'>
        <h2 className='text-2xl font-semibold mb-2'>React Custom Hooks:</h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          In React, a custom hook is a JavaScript function that starts with the
          prefix use. It allows you to extract component logic into reusable
          functions. Custom hooks provide a way to share logic between multiple
          components, or to separate concerns within a component. By defining
          custom hooks, you can extract complex logic from your components and
          keep them clean and readable.
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
          React useMemo Hook, How its Work
        </h2>
        <hr className='border border-cyan-600 mb-5' />
        <p>
          The useMemo hook in React is used to memoize the expensive function
          calls so that it is not executed on every re-render of the component.
          It takes two arguments: the first argument is the function that needs
          to be memoized, and the second argument is an array of dependencies
          that should trigger the memoized function to recompute when changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
