


export default function CaixaComp(props: any) {
    return(
        <div className={`
            flex justify-center items-center
            bg-purple-500 m-2 rounded-md p-2 w-[200px] h-64 text-xl font-thin text-neutral-200
        `}>
           {props.children}
        </div>
    )
}