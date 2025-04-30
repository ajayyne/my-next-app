import Link from 'next/link';
 
function Admin(){
   return(
     <div>
       <h1>Admin</h1>
       <p>This is the admin home page.</p>
       <Link href="/">Go to Home</Link>
     </div>
   );
 }

 export default Admin;