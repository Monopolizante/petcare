import Button from "../../components/Buttons";

export default function Info (){
    return(
        <section className="flex justify-between items-center bg-[#153229] py-10 px-10 mx-5 my-40 rounded-3xl">
                <div>
                    <p className="text-white text-bold text-2xl max-w-100 mb-10 ">Seu pet merece cuidado sem correria.</p>
                    <p className="text-white text-sm max-w-100">Baixe o PetCare e organize toda a rotina em menos de 2 minutos</p>
                </div>
                <div>
                    <Button 
                        text="Começar agora" 
                        color="text-[#DCEFE4]" 
                        bg_color="bg-[#FF6B4A]" 
                        bd_color="border-[#FF6B4A]" 
                        border="border-4" 
                        font_size="text-sm"
                    />
                </div>
        </section>
    
    )
}