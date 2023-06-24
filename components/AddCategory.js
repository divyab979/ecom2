import axios from 'axios';
import React, { useState } from 'react'

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('')
    const [categoryImage, setCategoryImage] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/Categories', {
          name: categoryName,
          image: categoryImage,
        });
  
        console.log('Category added successfully');
      } catch (error) {
        console.error('Error adding category:', error);
      }
    };

  return (
    <div>
        <h1></h1>
            <input
            type='text'
            placeholder='enter name'
            value={categoryName}
            onChange={(e)=> setCategoryName(e.target.value)}/>
            
        <input
        type='text'
        placeholder='insert image'
        vale={categoryImage}
        onChange={(e)=> setCategoryImage(e.target.value)}/>

        <button onClick={handleSubmit}>create</button>
        

    </div>
  );
};

export default AddCategory;