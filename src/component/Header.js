
const Header = ({ setDarkMode }) => {
  return (
    <div className="header">
        <h1>Notes</h1>
        <button 
            onClick= {() => setDarkMode((darkmode) => !darkmode)}
            className="save"
        >
            Toggle Mode
        </button>
    </div>
  )
}

export default Header