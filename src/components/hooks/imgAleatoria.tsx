import Image from "next/image";
import { useState } from "react";

export default function ImgAleatoria() {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [dimensao, setDimensao] = useState<string>("300");
  const url = "https://source.unsplash.com/featured/";

  function renderButton(valor: string) {
    return (
      <button
        className={`bg-blue-500 px-5 py-1.5 rounded-md text-xl`}
        onClick={() => {
          setPesquisa(valor);
          console.log(valor);
        }}
      >
        {valor}
      </button>
    );
  }
  return (
    <div className="flex flex-col gap-5 border border-zinc-500 rounded-md w-80 text-sm font-thin">
      <Image
        src={`${url}${dimensao}x${dimensao}?${pesquisa}`}
        height={300}
        width={300}
        alt="Imagem"
        className="rounded-t-md w-full"
      />
      <div className="flex justify-center gap-2 ">
        <span>{pesquisa}</span>
        <span>{dimensao} x {dimensao}</span>
      </div>
      <div className=" flex gap-1 justify-evenly">
        {renderButton("Abstract")}
        {renderButton("City")}
        {renderButton("Person")}
      </div>
      <div className="flex justify-center">
        <input
          type="number"
          value={dimensao}
          onChange={e => {
           setDimensao(e.target.value)
          }}
          className= {`bg-zinc-800 p-2 rounded-md outline-none w-[200px] ml-1 mb-4`}
        />
      </div>
    </div>
  );
}
