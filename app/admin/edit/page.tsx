import Link from 'next/link';
 
function Edit(){
   return(
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">Edit</h1>
    <p className="text-lg mb-4">This is the control Panel.</p>
    <Link href="/" className="text-blue-500 hover:underline">
      Go to Home
    </Link>
  </div>
   );
 }

 export default Edit;