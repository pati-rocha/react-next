export default function Evento() {

    let contador = 0
    
    function incrementar() {
        console.log(contador++);
        
    }
    return(
        <button onClick={incrementar} className=" flex justify-center items-center  h-32 w-32 bg-green-600 text-slate-200 font-medium">
            Evento
        </button>
    )
}