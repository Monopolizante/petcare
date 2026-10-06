import { MdOutlinePets } from "react-icons/md";
export default function AuthPage() {
  return (
    <>
      <section className="flex justify-center p-25">
        <div className="w-100 ">
          <div className="flex justify-center gap-3 items-center">
            <MdOutlinePets size={24} color="#3F9271" />
            <h1 className="text-[#153229] text-xs md:text-xl ">pet</h1>
            <h1 className="text-[#FF6B4A] text-xs md:text-xl">care</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-black">Entrar na sua conta</h1>
            <p>Acompanhe a rotina do seu pet</p>
          </div>
          <div className="flex flex-col justify-center gap-3 align-middle">
            <p>E-mail</p>
            <input className="bg-transparent border-b border-[#E0E2DF] py-2 text-base outline-none text-[#153229] placeholder-[#AEB7B2]" />
          </div>
          <div>
            <div className="flex flex-col justify-center gap-3 align-middle">
              <p>Senha</p>
              <input className="bg-transparent border-b border-[#E0E2DF] py-2 text-base outline-none text-[#153229] placeholder-[#AEB7B2]" />
            </div>
            <div className="flex justify-end">
              <p>Esqueci a minha senha</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className=" w-100 rounded-xl bg-[#1F4136] text-white">
              Entrar
            </button>
            <p>
              Ainda não tem conta?<a>Cadastre seu pet</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
