function HomePage () {
  return (
    <>
      <p>
        This application has two purposes:
      </p>
      <ul className="mt-4 list-disc">
        <li className="ml-4">A code example for "query string drawers". Go to <a href="https://alexander-bobin.github.io/react-router-6-drawers/" className="text-blue-500 hover:underline">React Router 6 Query Routed Drawers</a> to see another approach.</li>
      </ul>
      <h3 className="mt-6 text-lg font-bold">What this app has</h3>
      <ul className="mt-4 list-disc">
        <li className="ml-4 mb-2">
          Drawer stacking<br />
          Users page {'>'} User page {'>'} Post drawer {'>'} Comments drawer
        </li>
        <li className="ml-4 mb-2">
          Tabbed drawers<br />
          Users page {'>'} User page {'>'} Tasks drawer
        </li>
        <li className="ml-4 mb-2">
          Different sized drawers<br />
          Users page {'>'} User page {'>'} Album drawer {'>'} Photo drawer
        </li>
        <li className="ml-4 mb-2">
          Shared drawers<br />
          Users page {'>'} User page {'>'} Post drawer {'>'} Comments drawer<br/>
          Posts page {'>'} Post page {'>'} Comments drawer
        </li>
      </ul>
    </>
  )
}

export default HomePage
