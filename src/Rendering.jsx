const Rendring=()=>{
    const [sidebar, setSidebar] = useState(false);
    return(
        <div className="relative">
            <button onClick={() => setSidebar(!sidebar)} className="ml-10  ">open</button>
             {sidebar &&(
            <aside className="right-0 absolute w-[40%] h-screen bg-red-600"></aside>
            )}
         </div>
    )
}

































// import {useState} from 'react';

// const Rendering = () => {
//     const [count , setCount] = useState(0);

// const add = () => {
//     setCount(count+1);
// }
// const subtract =() => {
//     if (count > 0){
//         setCount (count-1);
//     }
// };

//   return (
//     <div className='w-full h-screen flex justify-center items-center'>
//         <aside className=' absolute  right-0 w-[50%] h-screen bg-red-400'></aside>
//     <div className='space-x-5'>
//         <button onClick={subtract}>Remove</button>
//         <span>{count}</span>
//         <button onClick={add}>Add</button>
//     </div>
//     </div>
//   );
// };

// export default Rendering;