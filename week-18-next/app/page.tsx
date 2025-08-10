import Link from "next/link";
export default function Home() {
  return (
   <div className="flex justify-center items-center h-screen w-screen text-lg ">
    <div>
    TODO APPLICATION
    <br />
   <Link className="text-md border m-2  bg-blue-500 text-white" href="/signin">Sign In</Link>
   <br />
   <Link className="text-md border m-2  bg-blue-500 text-white" href="/signup">Sign Up</Link>
   </div>
   </div>
  );
}
