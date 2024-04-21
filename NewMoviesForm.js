import React,{useState} from "react";
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
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={titleChangeHandler}/><br/>
        <label htmlFor="note">Opening Note</label>
        <textarea id="note" type="text" value={descri} onChange={descriChangeHandler}></textarea><br/>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="date" value={date} onChange={dateChangeHandler}/><br/>
        <button>Add Movie</button>
      </form>
    );
}
export default NewMoviesForm;