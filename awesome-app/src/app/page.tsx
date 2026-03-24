// import Image from "next/image";
import Counter from "@/components/Counter"
import Hello from "@/components/Hello";
export default function Home() {
  return (
    <div>
      <h2>React Next.js Application</h2>
      <Hello message="Hello React" color='blue'/>
      <Hello message="Hello Next.js" color='Red'/>

      <Counter count={5}/>
      <Counter count={12}/>
    </div>
  );
}
