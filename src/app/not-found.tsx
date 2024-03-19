import Link from "next/link";


export default function NotFound(){
    return(
        <div className="w-full h-[100vh] flex">
            <div className="m-auto text-center space-y-4">
                <h2 className="text-purple-700 text-2xl font-bold">Rota não encontrada</h2>
                <p>Não foi possível encontrar esta rota</p>
                <div className="">
                    <Link href={"/dashboard"} className="p-3 border shadow-sm text-purple-700 rounded mt-4 hover:bg-purple-700/10 active:bg-purple-700/15">Retornar para Home</Link>
                </div>
            </div>
        </div>
    )
}