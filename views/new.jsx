const React = require("react");
const Default = require("./layouts/default");

function New() {
  return (
    <Default>
      <h2>Add a new blog entry</h2>
      <form action="/entries" method="POST">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />

        <label htmlFor="body">Body</label>
        <input type="text" name="body" id="body" required />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = New;
