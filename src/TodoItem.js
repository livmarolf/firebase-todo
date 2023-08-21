export default function TodoItem(props) {
  function handleClick() {
    props.handleDelete(props.id);
  }

  return (
    <div>
      <p value={props}>{props.title}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
}
