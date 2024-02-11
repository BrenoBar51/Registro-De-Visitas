import FormularioLogin from "../../components/FormularioLogin";
import img1 from "../../assets/Museu-foto.jpg"

export default function TelaLogin() {
    return (
        <>
            <div>
                <img src={img1} className="absolute -z-10 w-full h-[100vh]" />
                <main className="h-[100vh]  w-auto flex items-center justify-center bg-[#d4d4d4]">
                    <FormularioLogin />
                </main>
            </div>
        </>
    )
}
