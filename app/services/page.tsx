import Link from 'next/link';
 
function Services(){
   return(
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">Services</h1>
    <p className="text-lg mb-4">This is the services page.</p>
    <Link href="/" className="text-blue-500 hover:underline">
      Go to Home
    </Link>
  </div>
   );
 }

 export default Services;