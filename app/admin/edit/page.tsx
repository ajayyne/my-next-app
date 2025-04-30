import Link from 'next/link';
 
function Edit(){
   return(
     <div>
       <h1>Edit</h1>
       <p>This is the control panel.</p>
       <Link href="/">Go to Home</Link>
     </div>
   );
 }

 export default Edit;