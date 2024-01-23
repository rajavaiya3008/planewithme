import Random from "./components/Random";
import Tag from "./components/Tag";




export default function App() {

  //mannpatel942348a9992c4e8eb98b3b426054e8da

  
  return (
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">RANDON GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
