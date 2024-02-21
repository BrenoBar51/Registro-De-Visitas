import FormularioLogin from "../../components/FormularioLogin";
import img1 from "../../assets/Museu-foto.jpg"

export default function TelaLogin() {
    return (
        <>
            <div>
                <img src={img1} className="absolute w-full h-[100vh]" />
                <main className="h-[100vh]  w-auto flex items-center justify-center relative z-1">
                    <FormularioLogin />
                </main>
            </div>
        </>
    )
}
