import Container from "../components/Container";
import { footerDataLink } from "../constant";
import { footerDataAdress } from "../constant";


function Footer() {
    return (
        <section>
            <Container>
                <img src="/images/vanilla_logo.png" alt="Vanilla logo" className="w-[255px] md:w-[355px]"/>
                <div className="flex flex-col-reverse gap-8 md:grid grid-cols-3">
                    <div>
                        <p className="text-[#121213]">
                            Plus d&apos;information
                        </p>
                        <span className="text-[#898686] text-sm">© 2025JMExport. All rights reserved.</span>
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
            </Container>
        </section>
    )
}

export default Footer;
