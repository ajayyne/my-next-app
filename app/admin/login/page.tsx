import Link from 'next/link';
 
function Login(){
   return(
     <div>
       <h1>Login</h1>
       <p>This is the login page.</p>
       <Link href="/">Go to Home</Link>
     </div>
   );
 }

 export default Login;