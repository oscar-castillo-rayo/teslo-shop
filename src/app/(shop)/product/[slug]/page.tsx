
interface Props{
  params:{
    slug:string
  }
}

export default function({params}:Props) {
  
  const {slug} = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}