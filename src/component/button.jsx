const Button = (    {label,iconUrl})=>{
    return <>
    <button className='bg-orange-600 text-white flex justify-around items-center px-3 py-3 rounded-3xl font-medium text-xl w-[180px]'>
        {label}
        <img src={iconUrl} alt="" />
    </button>
    </>
}

export default Button;