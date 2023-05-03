
interface CirculoProps {
    text: string
    circPerfeito?: boolean
}


export default function Circulos(props: CirculoProps) {
    console.log(props);
    
    return (
        <div className= {`
        flex justify-center items-center h-32 w-32 bg-green-800 text-xl text-pink-300 font-bold
        ${props.circPerfeito ? 'rounded-md' : 'rounded-full'}
        `}>
            {props.text}
           
        </div>
    )
}