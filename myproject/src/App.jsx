


let App = ()=>{
  return(
  <div>
    <nav>
      <h2>myReactApp</h2>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
    <main>
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRqtKd8O17OleqYZtujpqTnnH9Ez1m710qVJZysQGWQ&s=10" alt="" />
          <h1>Welcome to MyReactApp</h1>
          <p>here we learn how to create single page application and how to make interactive webpage by react.</p>
          <button>Get started</button>
      </div>

      <div className="right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEGCpqfKOyfigvksKtMK70UBiVGQzlIimYK1PGcM95g&s=10" alt="" />
      </div>
    </main>
  </div>
  )
}
export default App