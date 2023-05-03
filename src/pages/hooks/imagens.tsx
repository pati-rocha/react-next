import ImgAleatoria from "@/components/hooks/imgAleatoria";

export default function ImgPage() {
    return (
        <div className= {`
        flex justify-center items-center h-screen gap-10 flex-wrap p-10
        `}>
            <ImgAleatoria />
            <ImgAleatoria />
            <ImgAleatoria />
                       
        </div>
    )
}