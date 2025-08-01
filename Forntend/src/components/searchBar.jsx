import React from 'react';

function SearchBar() {
    return ( 
        <div className='w-185'>
          <div class="relative">
            <input type="text" class="bg-sky-50 w-full placeholder:text-slate-400 text-slate-1000 text-lg border border-slate-200 rounded-md pr-3 pl-12 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search for Products, Brands and More" />
            <button class="absolute left-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-lg text-white transition-all shadow-lg hover:shadow focus:bg-slate-1000 focus:shadow-none active:bg-slate-1000 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5.5 h-5.5">
                <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
           
            {/* <input className='w-100 h-9' type="text" placeholder='Search for Products, Brands and More' /> */}
        </div>
     );
}

export default SearchBar;