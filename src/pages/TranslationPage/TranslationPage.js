import React, { useState } from 'react';
import './TranslationPage.css';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

const TranslationPage = () => {
  const [pictures, setPictures] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState('en');
  const [translatedText, setTranslatedText] = useState('');
  const [audioFile, setAudioFile] = useState(null);

  // This function handles image upload
  const onDrop = (picture) => {
    setPictures(picture);
  };

  // This function sends the image for processing to the backend
  const sendImageForProcessing = async () => {
    // Get the first image (assuming only one image is uploaded)
    const imageFile = pictures[0];

    // Define the target language (you may use selectedCategory)
    let targetLanguage = 'en'; // Replace with your logic

    // Create a FormData object and append the image and target language
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('target_language', selectedCategory);

    try {
      // Send the image to the backend for processing
      const response = await axios.post('https://backend-service-ptt-fjq6ivbxiq-uc.a.run.app/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // Process the response from the backend
        const result = response.data;
        setTranslatedText(result.translatedText);
        setAudioFile(result.audioFile);

        // You can add further logic for handling the response here
      } else {
        console.error('Failed to process image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const playAudio = () => {
    if (audioFile) {
      // Create an audio element and set the audio content as a base64-encoded audio source
      const audio = new Audio(`data:audio/wav;base64,${audioFile}`);
      audio.play();
    }
  };


  return (
    <div className="translation-page-container">
      <div className="translation-page-part-left">
        <h2>Upload Image for translation</h2>
        <ImageUploader
          withIcon={true}
          withPreview={true}
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ko">Korean</option>
          <option value="hi">Hindi</option>
          <option value="ja">Japanese</option>
          <option value="de">German</option>
          <option value="zn">Chinese</option>
        </select>
        <button className="translate-btn" onClick={sendImageForProcessing}>
          Translate
        </button>
      </div>
      <div className="translation-page-part-right">
        <h2>Translated Output</h2>
        <p>{translatedText}</p>
        {/* Display the translated text here */}
      <svg className="play-audio-btn" onClick={playAudio} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="volume-up"><g data-name="volume up"><path fill="#55abff" d="M12.91,4.16a2,2,0,0,0-2.07.16L5.68,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H5.68l5.16,3.68a2,2,0,0,0,1.16.38,2.1,2.1,0,0,0,.91-.22A2,2,0,0,0,14,18.06V5.94A2,2,0,0,0,12.91,4.16Z"></path><path fill="#0078ee" d="M19.07,4.93a1,1,0,1,0-1.41,1.42,8,8,0,0,1,0,11.3,1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0,10,10,0,0,0,0-14.14Z"></path><path fill="#0078ee" d="M17.25,7.76a1,1,0,1,0-1.42,1.4,4,4,0,0,1,0,5.68,1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.3,6,6,0,0,0,0-8.48Z"></path></g>
        </svg>
      </div>
    </div>
  );
};

export default TranslationPage;