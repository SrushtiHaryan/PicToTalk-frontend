import React, { useState } from 'react';
import './TranslationPage.css';
import ImageUploader from 'react-images-upload';





const TranslationPage = () => {
    const [pictures, setPictures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('en'); // Default to show all categories

    const onDrop = (picture) => {
        setPictures([...pictures, picture]);
    };
    return (
        <div className="translation-page-container">
            <div className="translation-page-part-left">
                <h2>Upload Image for translation</h2>
                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText='Choose images'
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
                    
                </select>
                <button class="translate-btn">Translate</button>
               
            </div>
            <div className="translation-page-part-right">
                <h2>Translated Output</h2>
                <p>
                    Did he just throw my cat out of the window? Life finds a way. They're using our own satellites against us. And the clock is ticking.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="volume-up"><g data-name="volume up"><path fill="#55abff" d="M12.91,4.16a2,2,0,0,0-2.07.16L5.68,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H5.68l5.16,3.68a2,2,0,0,0,1.16.38,2.1,2.1,0,0,0,.91-.22A2,2,0,0,0,14,18.06V5.94A2,2,0,0,0,12.91,4.16Z"></path><path fill="#0078ee" d="M19.07,4.93a1,1,0,1,0-1.41,1.42,8,8,0,0,1,0,11.3,1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0,10,10,0,0,0,0-14.14Z"></path><path fill="#0078ee" d="M17.25,7.76a1,1,0,1,0-1.42,1.4,4,4,0,0,1,0,5.68,1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.3,6,6,0,0,0,0-8.48Z"></path></g></svg>
            </div>
        </div>
    )
}

export default TranslationPage