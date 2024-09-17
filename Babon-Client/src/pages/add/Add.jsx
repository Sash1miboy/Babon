import React, { useReducer, useState } from 'react'
import "./Add.scss"
import { INITIAL_STATE, serviceReducer } from '../../reducers/serviceReducer'
import upload from '../../utils/upload.js'

const Add = () => {

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(serviceReducer, INITIAL_STATE)

  const handleChange = (e) =>{
    dispatch({
      type: "CHANGE_INPUT",
      payload: {name: e.target.name, value: e.target.value},
    });
  }

  const handleFeature = (e) =>{
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async (e) =>{
    setUploading(true);
    try {
      const coverImage = await upload(singleFile);

      const images = await Promise.all(
        [...files].map( async (file) =>{
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({type: "ADD_IMAGES", payload: {coverImage, images}})
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" name='title' placeholder='e.g Jasa fotografi untuk acara spesial' onChange={handleChange}/>
            <label htmlFor="">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="accounting">Accounting</option>
              <option value="animation">Animation</option>
              <option value="design">Design</option>
              <option value="management">Management</option>
              <option value="music">Music Production</option>
              <option value="photography">Photography</option>
              <option value="development">Development</option>
              <option value="video-editing">Video Editing</option>
              <option value="voice-over">Voice Over</option>
              <option value="writing">Writing</option>
              <option value="writing">Other</option>
            </select>
            <div className="images">
              <div className="imagesInput">
                <label htmlFor="">Cover Image</label>
                <input type="file" name="" id="" onChange={e=>setFiles(e.target.files)}/>
                <label htmlFor="">Upload Image</label>
                <input type="file" name="desc" id="" multiple onChange={e=>setSingleFile(e.target.files[0])}/>
              </div>
              <button onClick={handleUpload}>{uploading ? "Uploading" : "Upload"}</button>
            </div>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='Penjelasan tentang service anda' onChange={handleChange}></textarea>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" name='shortTitle' placeholder='e.g Jasa photography' onChange={handleChange}/>
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" id="" cols="30" rows="5" placeholder='Penjelasan singkat service anda' onChange={handleChange}></textarea>
            <label htmlFor="">Add Features</label>
            <form action="" onSubmit={handleFeature} className='addForm'>
              <input type="text" placeholder='e.g jasa foto'/>
              <button type='submit'>Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f)=>(
                <div className="item" key={f}>
                <button onClick={()=>dispatch({type:"REMOVE_FEATURE", payload: f })}>{f}<span>X</span></button>
              </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" min={1} name='price' onChange={handleChange}/>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add