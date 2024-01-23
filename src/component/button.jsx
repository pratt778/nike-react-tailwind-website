const Button = (    {label,iconUrl,fullWidth})=>{
    return <>
    <button className={`bg-orange-600 text-white flex justify-center gap-2 items-center px-3 py-3 rounded-3xl font-medium text-xl w-[180px] ${fullWidth && 'w-full'}`}>
        {label}
        <img src={iconUrl} alt="" />
    </button>
    </>
}

export default Button;