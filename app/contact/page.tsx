import Link from 'next/link';
 
function Contact(){
   return(
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">Contact</h1>
    <p className="text-lg mb-4">This is the contact page.</p>
    <Link href="/" className="text-blue-500 hover:underline">
      Go to Home
    </Link>
  </div>
   );
 }

 export default Contact;