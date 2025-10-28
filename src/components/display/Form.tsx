import { useForm } from "react-hook-form";
import Input from "../Input";
import TextArea from "../TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, type SendMailFormValue } from "../../../utils/zod";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(emailSchema) });

  const submit = (data: SendMailFormValue) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col gap-4"
    >
      <div className="w-full">
        <Input placeholder="Adresse e-mail" register={register("name")} />
        {errors.name && (
          <p className="text-accent text-sm pl-5 ">{errors.name.message}</p>
        )}
      </div>

      <div className="w-full">
        <Input placeholder="Mot de passe" register={register("email")} />
        {errors.email && (
          <p className="text-accent text-sm pl-5 ">{errors.email.message}</p>
        )}
      </div>
      <div className="w-full">
        <TextArea placeholder="Mot de passe" register={register("message")} />
        {errors.message && (
          <p className="text-accent text-sm pl-5 ">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-primary w-fit text-white py-3 px-4 lg:py-4 lg:px-8 transition-colors duration-300 hover:bg-accent hover:text-black rounded-full ${
          isSubmitting && "opacity-50"
        } `}
      >
        {isSubmitting ? "Envoie ..." : "Envoyer"}
      </button>
    </form>
  );
}

export default Form;
