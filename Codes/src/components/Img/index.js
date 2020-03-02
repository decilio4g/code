import React, { useState } from 'react';

export default function Img() {
  const [image, setImage] = useState({ preview: '', raw: '' })

  async function handleChange(e) {
    console.log(e.target.files[0])
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })
  }

  async function handleUpload() {
    const formData = new FormData()
    formData.append('image', image.raw)
    const config = { headers: { 'content-type': 'multipart/form-data' } }

    // await uploadToBackend('endpoint', { image: image.raw }, config)
  }

  return (
    <div>
      <label htmlFor="upload-button">
        {
          image.preview ? <img src={image.preview} width="300" height="300" /> : (
            <>
              <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
              </span>
              <h5 className="text-center">Upload your photo</h5>
            </>
          )
        }
      </label>
      <input type="file" id="upload-button" onChange={e => handleChange(e)} />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}


// Esse é um modelo usando React Hooks para fazer upload de imagens, funciona!
