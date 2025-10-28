import Container from "./Container"
import { aboutUsData } from "../constant"
import VanillaWhite from "../icons/VanillaWhite"


export default function AboutUs() {
    return (
        <section className="bg-[#914B2E] rounded-4xl pb-4">
            <Container className="flex flex-col gap-2 text-white font-light">
                <div className="flex flex-col items-start ">
                    <div className="flex flex-col items-center ">
                        <h2 className="text-5xl font-bold text-white text-balance ">
                            À propos<span className="text-accent"> de nous</span>
                        </h2>
                        <div className="flex items-center gap-2 ">
                            <span className="flex h-0.5 w-20 md:w-[100px] bg-white/50 "></span>
                            <VanillaWhite className="w-[50px] md:w-20 " />
                            <span className="flex h-0.5 w-20 md:w-[100px] bg-white/50 "></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <div className="w-full md:w-1/2">
                            <p>
                                Bienvenue chez JM EXPORT, exportateur de vanille et d&apos;épices de Madagascar.
                                Nous sommes spécialisés dans la collecte, la préparation, le conditionnement
                                et l&apos;exportation de  produits naturels de haute qualité.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/images/aboutUs/aboutUs_1.webp" alt="About us pics" className="w-[300px] md:w-[555px]" />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-4 w-full">
                        <div className="w-full md:w-1/2">
                            <img src="/images/aboutUs/aboutUs_2.webp" alt="About us pics" className="w-[300px] md:w-[555px]" />
                        </div>
                        <div className="flex flex-col gap-8 w-full md:w-1/2">
                            <div className="flex items-center gap-4">
                                <img src="/images/aboutUs/target_ico.png" alt="Target icon" className="w-[35px] lg:w-[70px]" />
                                <h6 className="font-bold text-xl md:text-2xl">Notre mission</h6>
                            </div>
                            {aboutUsData.map((items, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <img src="/images/vanilla_list.png" alt="vanilla" className="w-[20px] md:w-[40px]" />
                                    <p>
                                        {items}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <div className="w-full md:w-1/2">
                            <p>
                                Depuis 2012, JM EXPORT a démarré son activité en tant que producteur-préparateur de vanille
                                et adhérent à une association. Nous mettons en œuvre une démarche qualité rigoureuse
                                conforme aux principes HACCP dans notre processus de préparation de la vanille et des épices.
                                Notre organisation qualité est bien établie et nous sommes certifiés en agriculture biologique par Ecocert,
                                UEBT-RA par Ecocert et Commerce équitable par Flocert.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/images/aboutUs/aboutUs_3.webp" alt="About us pics" className="w-[300px] md:w-[555px]" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border border-white rounded-2xl p-4">
                        <p className="max-w-[620px]">
                            Notre mission est de partager avec le monde entier le goût authentique
                            et les richesses aromatiques  de Madagascar, tout en soutenant une production éthique et durable.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}