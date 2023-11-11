const React = require("react");
const Default = require("./layouts/default");

function Edit({ entry }) {
  return (
    <Default>
      <h2>Edit a entry</h2>
      <form action={`/entries/${entry.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={entry.title}
        />

        <label htmlFor="body">Body</label>
        <textarea
          type="text"
          name="body"
          id="body"
          required
          defaultValue={entry.body}
          // REMOVE THIS STYLE WHEN WORKING ON FRONT END
          style={{
            height: "400px",
            width: "400px",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" defaultValue={entry.image} />

        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = Edit;
