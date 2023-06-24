import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Top_picks = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get('/api/getCategories');
            setCategories(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchCategories();
      }, []);

console.log(categories)


    return (
        <div className='grid lg:ml-[-1%] ml-[4%] lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 w-screen h-[10%] lg:mt-[0%] lg:p-[4%] mt-[12%]'>
        
{categories.map((category)=>(
            <div className="relative w-64 ">
                <img src={category.image} alt="Card Image" className="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 className="text-xl font-bold">{category.name}</h2>
                   
                </div>
            </div>
         ))}

        </div>
    )
}

export default Top_picks