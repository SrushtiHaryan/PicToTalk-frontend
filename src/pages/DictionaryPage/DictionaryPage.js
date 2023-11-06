import React, { useState, useEffect } from 'react';
import FlashCard from '../../component/FlashCard/FlashCard';
import './DictionaryPage.css';
import axios from 'axios';

const DictionaryPage = () => {
  // State to store the card records
  const [cardRecords, setCardRecords] = useState([]);

  // Make the Axios GET request when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((response) => {
        // Set the card records in state
        setCardRecords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the request is made once when the component mounts

  return (
    <div className="dictionary-page-container">
      <h2>Dictionary Page</h2>
      <div className="flash-card-container">
        {cardRecords.map((card, index) => (
          <FlashCard
            key={index}
            translatedText={card.translated_text}
            translatedLang={card.translated_lang}
            detectedText={card.detected_text}
            detectedLang={card.detected_lang}
          />
        ))}
      </div>
    </div>
  );
};

export default DictionaryPage;
