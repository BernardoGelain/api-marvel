import { TextInput } from "@/components/text-input/text-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  NewsletterFormContainer,
  InputAndButtonContainer,
  NewsletterFormTitle,
  SendButton,
} from "./newsletter-form-styles";
import {
  newsletterFormValidationSchema,
  RegisterNewsletterFormData,
} from "./newsletter-form-validation-schema";

export const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterFormValidationSchema),
  });

  const handleRegisterNewsLetter = async (data: any) => {
    const formData = data as RegisterNewsletterFormData;
    alert(`O email ${formData.newsletterEmail} foi cadastrado com sucesso!`);
  };

  return (
    <NewsletterFormContainer onSubmit={handleSubmit(handleRegisterNewsLetter)}>
      <NewsletterFormTitle>
        Cadastre-se ára receber nossas <br />
        notícias em primeira mão!
      </NewsletterFormTitle>
      <InputAndButtonContainer>
        <TextInput
          {...register("newsletterEmail")}
          errorMessage={errors.newsletterEmail?.message as string}
          width="370px"
          height="61px"
          label="Seu melhor e-mail"
          placeholder="Informe seu melhor e-mail"
        />
        <SendButton>{isSubmitting ? "Loading..." : "Enviar"}</SendButton>
      </InputAndButtonContainer>
    </NewsletterFormContainer>
  );
};
