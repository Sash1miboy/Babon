import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g Jasa fotografi untuk acara spesial'/>
            <label htmlFor="">Category</label>
            <select name="category" id="category">
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
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />
            <label htmlFor="">Upload Image</label>
            <input type="file" name="" id="" multiple/>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='Penjelasan tentang service anda'></textarea>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g Jasa photography'/>
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="5" placeholder='Penjelasan singkat service anda'></textarea>
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g jasa foto'/>
            <input type="text" placeholder='e.g foto editing'/>
            <input type="text" placeholder='e.g pengirim album foto'/>
            <input type="text" placeholder='e.g link foto'/>
            <label htmlFor="">Price</label>
            <input type="number" min={1} />
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add