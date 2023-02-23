import { useContext, useState, useEffect, useRef } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import JoditEditor from 'jodit-react';



export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('');
  const [cat, setCat] = useState([]);
  const [categories, setCategories] = useState('');
  const { user } = useContext(Context);
  const editor = useRef(null);


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };


  return (
    <>
      <div className="container">
        <div className="write">
          <div>
            {file && (
              <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <div className="inputText">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="writeInput"
                  autoFocus={true}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="inputText">
                <label>Write Post</label>
                <JoditEditor
                  ref={editor}
                  value={desc}
                  tabIndex={1}
                  onChange={newContent => setDesc(newContent)}
                  style={{minWidth: '70%'}}
                />
              </div>
              <div className="inputText">
                <label>category</label>
                <select defaultValue="default" onChange={e => setCategories(e.target.value)} className="writeInput">
                <option value="default">Choose Category</option>
                  {cat ?
                    cat.map((c) => {
                      return <option key={c.id}>{c.name}</option>
                    })
                    : null}
                </select>
              </div>
              <div className="inputText">
                <label htmlFor="fileInput" className="inputLabel">
                  <i className="writeIcon fas fa-plus"></i>
                  <p>Upload Pic</p>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button className="writeSubmit" type="submit">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}