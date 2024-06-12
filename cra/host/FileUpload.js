// /FileUpload.js

import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './firebaseConfig';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
    setProgress(0);
    setUrl('');
    console.log('File selected:', e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      console.error('No file selected for upload.');
      return;
    }

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        console.error('Upload error:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setUrl(downloadURL);
          console.log('File available at', downloadURL);
          fetchUploadedImages();
        });
      },
    );
  };

  const fetchUploadedImages = async () => {
    const listRef = ref(storage, 'files/');
    try {
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      setUploadedImages(urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>File Upload</h2>
      <input type="file" onChange={handleFileChange} style={styles.input} />
      <button onClick={handleUpload} style={styles.button}>
        Upload
      </button>
      {progress > 0 && <div style={styles.progress}>Progress: {progress}%</div>}
      {url && (
        <div style={styles.url}>
          File URL:{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </div>
      )}
      <div style={styles.imagesContainer}>
        {uploadedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Uploaded file ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    width: '300px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.5em',
    color: '#333',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  progress: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#666',
  },
  url: {
    marginTop: '10px',
    fontSize: '14px',
    wordBreak: 'break-all',
  },
  imagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    margin: '5px',
    borderRadius: '4px',
  },
};

export default FileUpload;
