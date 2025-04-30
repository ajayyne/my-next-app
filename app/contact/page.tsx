import Link from 'next/link';
 
function Contact(){
   return(
     <div>
       <h1>Contact</h1>
       <p>This is the contact page.</p>
       <Link href="/">Go to Home</Link>
     </div>
   );
 }

 export default Contact;