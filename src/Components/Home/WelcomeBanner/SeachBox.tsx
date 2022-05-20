import { useState } from 'react';

function SeachBox() {
    const [value, setValue] = useState('');
    const handleChange = (e: any) => {
        setValue(e.target.value);
    }
    return (
        <form className="relative text-lg overflow-hidden rounded-3xl"
            onSubmit={(e) => {e.preventDefault()}}
            accept-charset="utf-8">
            <label>
                <input className="w-full h-12 px-5 py-3
                    text-[#686868] leading-[46px]"
                    type="text"
                    value={value}
                    placeholder="Search for a movie, tv show, person......"
                    onChange={handleChange} />
            </label>
        <input type='submit' value='Search' 
            style={{background: `linear-gradient(to right, rgba(30, 213, 169, 1) 0%, rgba(1, 180, 228, 1) 100%)`}}
            className="absolute right-0 top-0 bottom-0 
                px-8 font-bold text-base rounded-3xl
                hover:text-black" />
        </form>
    )
}

export default SeachBox