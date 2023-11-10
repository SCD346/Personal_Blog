const React = require("react");
const Default = require("./layouts/default");

function Show({ entry, index }) {
  return (
    <Default>
      <h3>{entry.name}</h3>
      <p>
        and it
        {entry.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img src={entry.image} alt={entry.name} />
      <a href={`/entries/${index}/edit`}>
        <button>Edit</button>
      </a>
      <form action={`/entries/${index}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <li>
        <a href="/entries">Go home</a>
      </li>
    </Default>
  );
}

module.exports = Show;
