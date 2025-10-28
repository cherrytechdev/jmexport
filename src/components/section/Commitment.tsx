import Container from "../Container"
import { commitmentData } from "../../constant"
import Button from "../Button"


export default function Commitment() {
    return (
        <section>
            <Container>
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
                        <img src="/images/commitment-pics.webp" alt="Commitment pics" className="w-[600px]"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}