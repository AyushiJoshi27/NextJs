import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;

  const deleteCommentHandler = (id) => {
    console.log(id, `/api/comments/delete/${id}`);
    fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(res => console.log(res));
  };
  
  return (
    <ul className={classes.comments}>
      {items ? (
        <>
          {items.map((item) => (
            <li key={item._id}>
              <p>{item.text}</p>
              <div>
                By <address>{item.name}</address>
              </div>
              <button onClick={() => deleteCommentHandler(item._id)}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : (
        ""
      )}
    </ul>
  );
}

export default CommentList;
