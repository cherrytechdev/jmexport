import Container from "./Container"
import { commitmentData } from "../constant"
import Button from "./Button"
import Vanilla from "../icons/Vanilla"


export default function Commitment() {
    return (
        <section className="mb-12 lg:mb-20 xl:mb-24">
            <Container>
                <div className="flex flex-col items-center justify-center ">
                    <h2 className="text-5xl font-bold ">
                        Nos <span className="text-primary">engagements</span>
                    </h2>
                    <div className="flex items-center gap-2 ">
                        <span className="flex h-0.5 w-20 md:w-[100px] bg-black "></span>
                        <Vanilla className="w-[50px] md:w-20 " />
                        <span className="flex h-0.5 w-20 md:w-[100px] bg-black "></span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <div className="flex flex-col gap-12 w-full md:w-1/2">
                        <div className="flex flex-col gap-4">
                            {commitmentData.map((items, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <img src="/images/vanilla_list.png" alt="vanilla" className="w-[20px] md:w-[40px]" />
                                    <p className="text-[#121213]">
                                        {items}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Button label="Découvrez JMExport" />
                    </div>
                    <div className="flex justify-end 2xl:border-l 2xl:border-l-[#4a4a4a] w-full md:w-1/2">
                        <img src="/images/commitment-pics.webp" alt="Commitment pics" className="w-[600px]" />
                    </div>
                </div>
            </Container>
        </section>
    )
}