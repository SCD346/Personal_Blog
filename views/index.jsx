const React = require("react");
const Default = require("./layouts/default.jsx");

function Index({ entries, title }) {
  console.log("HERE ARE THE ENTRIES: ", entries);
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <ul>
        {entries.map((entry, index) => {
          return (
            <li key={index}>
              <a href={`/entries/${entry.id}`}>{entry.title}</a>
              <p>{entry.description}</p>
            </li>
          );
        })}
      </ul>
      <div className="newButton">
        <a href="./entries/new">
          <button>Add a new entry</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Index;
