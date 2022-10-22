import { update } from "../API/BooksAPI";

function Book(props) {
  const { id, title, authors, imageLinks, shelf = '' } = props;
  const onChange = (e) => {
    const { value } = e.target;
    if (["wantToRead", "currentlyReading", "read"].includes(value)) {
      update({ id }, value).then(() => {
        window.location.reload(false);
      });
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks?.thumbnail || ""}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={onChange}>
            <option value="disabled" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors ? authors.map((aut) => `${aut} `) : ""}
      </div>
    </div>
  );
}

export default Book;
