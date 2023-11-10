const React = require("react");
const Default = require("./layouts/default");

function Show({ entry }) {
  return (
    <Default>
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
      <img src={entry.image} alt={entry.name} />
      <div>
        <a href={`/entries/${entry.id}/edit`}>
          <button> Edit </button>
        </a>
      </div>
      <form action={`/entries/${entry.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <li>
        <a href="/entries">Go home</a>
      </li>
    </Default>
  );
}

module.exports = Show;
