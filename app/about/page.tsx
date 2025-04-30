 import Link from 'next/link';
 
 function About(){
    return(
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <Link href="/">Go to Home</Link>
      </div>
    );
  }

  export default About;