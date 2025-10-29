import Container from "../components/Container";
import { footerDataLink } from "../constant";
import { footerDataAdress } from "../constant";


function Footer() {
    return (
        <section>
            <Container>
                <img src="/images/vanilla_logo.png" alt="Vanilla logo" className="w-[255px] md:w-[355px]" />
                <div className="flex flex-col gap-8 md:grid grid-cols-3">
                    <div>
                        <p className="text-[#121213] text-sm leading-loose">
                            Bienvenue chez JM EXPORT, exportateur de vanille et d'épices de Madagascar. 
                            Nous sommes spécialisés dans la collecte, la préparation, le conditionnement et l'exportation de produits naturels de haute qualité.
                            Notre mission est de partager avec le monde entier le goût authentique et les richesses aromatiques de Madagascar, 
                            tout en soutenant une production éthique et durable.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:text-center">
                        {footerDataLink.map((link, i) => (
                            <a href={link.href} key={i} className="text-sm text-[#121213]">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {footerDataAdress.map((items, i) => (
                            <p key={i} className="text-sm leading-loose text-[#121213]">
                                {items}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-px w-full bg-[#898686] my-4" />
                <span className="flex justify-center text-[#898686] text-center text-sm w-full mb-2">© 2025JMExport. All rights reserved - made by{"    "}<a href="https://cherrytd.com/" target="_blank" className="ml-1">Cherry Tech & Design</a></span>
            </Container>
        </section>
    )
}

export default Footer;
