import React from 'react'

const Top_picks = () => {
    return (
        <div className='grid lg:grid-cols-5 grid-cols-5 w-screen h-[30%] lg:mt-[4%] lg:p-[4%]'>
            <a href='#'>
            <div class="relative w-64 ">
                <img src="hb.png" alt="Card Image" class="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 class="text-xl font-bold">Accessories</h2>
                   
                </div>
            </div>
            </a>
            <a href='#'>
            <div class="relative w-64 ">
                <img src="sneakers.png" alt="Card Image" class="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 class="text-xl font-bold">Footwear</h2>
                    
                </div>
                
            </div>
            </a>
            <a href='#'>
            <div class="relative w-64 ">
                <img src="travel.png" alt="Card Image" class="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 class="text-xl font-bold">Travel Essentials</h2>
                    
                </div>
                
            </div>
            </a>
            <a href='#'>
            <div class="relative w-64 ">
                <img src="tech.png" alt="Card Image" class="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 class="text-xl font-bold">Latest Tech</h2>
                    
                </div>
                
            </div>
            </a>
            <a href='#'>
            <div class="relative w-64 ">
                <img src="fur.png" alt="Card Image" class="w-full h-full object-cover transition-transform-gpu hover:scale-110 rounded-3xl " />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-3xl">
                    <h2 class="text-xl font-bold">Home Decor</h2>
                   
                </div>
                
            </div>
            </a>
            


        </div>
    )
}

export default Top_picks