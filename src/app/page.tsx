'use client'
import Image from "next/image";

export default function Home() {
  const handletestfunction =()=>{
    fetch('https://api.landsonagri.in/api/test')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  }
  return (
    <div className="" onClick={handletestfunction}>
      Api Testing
    </div>
  );
}
