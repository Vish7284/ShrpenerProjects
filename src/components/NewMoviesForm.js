import React,{useState} from "react";
import './NewMoviesForm.css';
const NewMoviesForm = (props)=>{
    const [title,setTitle] = useState("");
    const [descri,setDescri] = useState("")
    const [date,setDate] = useState("")

const titleChangeHandler=(e)=>{
setTitle(e.target.value);
}
const descriChangeHandler=(e)=>{
setDescri(e.target.value)
}
const dateChangeHandler=(e)=>{
    setDate(e.target.value)
}
    const submitHandler = (e) => {
      e.preventDefault();
      const obj = {
        title:title,
        openingText:descri,
        releaseDate:date,
      }
      props.onAdd(obj)
      console.log(obj);
      setTitle("");
      setDescri("");
      setDate("")
      
    };
    return (
      <form onSubmit={submitHandler} className="movie-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
            className="input-capsule"
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Opening Note</label>
          <textarea
            id="note"
            type="text"
            value={descri}
            onChange={descriChangeHandler}
            className="input-capsule"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Release Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={dateChangeHandler}
            className="input-capsule"
          />
        </div>
        <button>Add Movie</button>
      </form>
    );
}
export default NewMoviesForm;