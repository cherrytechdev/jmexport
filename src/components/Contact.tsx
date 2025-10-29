import Localisation from "../icons/Localisation";
import VanillaWhite from "../icons/VanillaWhite";
import Container from "./Container";
import Form from "./display/Form";

function Contact() {
  return (
    <div
      id="contact"
      style={{ backgroundImage: "url(/images/contact-bg.webp)" }}
      className="bg-cover bg-center rounded-3xl ld:rounded-[100px] relative overflow-hidden lg:rounded-[100px] py-10  "
    >
      <div className="inset-0 bg-secondary/70 absolute  "></div>
      <Container className="pt-0!  text-white/80 flex flex-col gap-10  ">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-5xl font-bold text-white text-balance ">
            Contactez<span className="text-accent">-nous</span>
          </h2>
          <div className="flex items-center gap-2 ">
            <span className="flex h-0.5 w-20 md:w-[100px] bg-white/50 "></span>
            <VanillaWhite className="w-[50px] md:w-20 " />
            <span className="flex h-0.5 w-20 md:w-[100px] bg-white/50 "></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 justify-around ">
            <p className="w-4/5">
              Pour toute demande d’information ou de devis concernant nos
              produits de vanille, n’hésitez pas à nous contacter via le
              formulaire .
            </p>
            <div className="flex gap-2">
              <Localisation />
              <p>
                Villa Miranda, Secteur N°10, Maherifody , (206) Antalaha ,
                MAADAGASCAR
              </p>
            </div>
          </div>
          <Form />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-3 lg:mt-5 ">
          <p className="lg:border-r border-white/80 w-full  text-center  ">
            contact@jmexport.mg
          </p>
          <p className="lg:border-r border-white/80 w-full text-center   ">
            +261329506827
          </p>
          <p className=" text-center  ">jmexport.mg</p>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
