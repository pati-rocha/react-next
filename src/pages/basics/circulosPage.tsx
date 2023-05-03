import Circulos from "@/components/basics/Circulo";

export default function circulosPage() {
    return (
        <div className=" flex justify-evenly items-center h-screen bg-neutral-300">
            <Circulos text = "Circ 1"/>
            <Circulos text = "Circ 2"/>
            <Circulos text = "Circ 3" circPerfeito/>
            <Circulos text = "Circ 4" />
        </div>
    )
}