import React, { useEffect } from "react"
import { useState } from "react"
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from "./firebase"
import { v4 } from "uuid"

export default function Upload(){
    const [imageUpload,setImageUpload] = useState()
    const [imagesList,setImagesList] = useState([])

    const uploadImage = () => {
        if(imageUpload == null) return; 
        const imageRef = ref(storage, `images/products/${imageUpload.name + v4()}`)
        uploadBytes(imageRef,imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImagesList((prev) => [...prev,url])
                    console.log(url)
                })
        })
    }

    return (
        <div>
          <input type="file" 
          onChange={(event) => {
            setImageUpload(event.target.files[0])
          }}
          />
          <button onClick={() => uploadImage()}>Upload</button>

          {
            imagesList.map((src) => (
                <img key={src} src={src} />
            ))
          }
        </div>
    )
}