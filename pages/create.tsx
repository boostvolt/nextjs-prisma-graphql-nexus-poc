import React, { useState } from "react";
import Router from "next/router";
import { useCreatePostMutation } from "../graphql/generated/collection";

export default function Draft() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [createPost] = useCreatePostMutation();

  return (
    <div className="page">
      <form
        onSubmit={async () => {
          createPost({
            variables: {
              title,
              content,
              authorEmail,
            },
          });
          Router.push("/");
        }}
      >
        <h1>Create a Post</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          onChange={(e) => setAuthorEmail(e.target.value)}
          placeholder="Author (email adress)"
          type="text"
          value={authorEmail}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input
          disabled={!content || !title || !authorEmail}
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
}
