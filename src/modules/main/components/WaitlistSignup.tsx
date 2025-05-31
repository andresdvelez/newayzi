"use client";

import { useState } from "react";
import {
  addToast,
  Card,
  CardBody,
  Form as HeroForm,
  Input,
  Select,
  SelectItem,
  Button,
} from "@heroui/react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// -------------------------------------------------------------
// 1️⃣ Define the Zod schema exactly as before:
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Introduce un email válido.",
  }),
  city: z.string().min(1, {
    message: "Selecciona una ciudad de interés.",
  }),
  accommodationType: z.string().min(1, {
    message: "Selecciona un tipo de alojamiento.",
  }),
  stayDuration: z.string().min(1, {
    message: "Selecciona una duración típica de estancia.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// -------------------------------------------------------------
// 2️⃣ Rewrite the component to use Hero UI + React Hook Form:
export const WaitlistSignup = () => {
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      accommodationType: "",
      stayDuration: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    // Note: isSubmitting from RHF also works, but we keep a local state
    // to disable the button while we “simulate” an API call.
    console.log(isSubmittingLocal, values);
    setIsSubmittingLocal(true);

    setTimeout(() => {
      addToast({
        title: "¡Bienvenido a la lista!",
        description: "Te notificaremos cuando Newayzi esté disponible",
      });
      reset();
      setIsSubmittingLocal(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-newayzi-purple via-newayzi-blue to-newayzi-dark-orchid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading / Intro Copy */}
        <div className="text-white mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-sora">
            Vivir como en un hotel, sentirte en
            <br />
            <span className="text-yellow-300">casa</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-sora leading-relaxed">
            Alojamientos flexibles, diseño premium y atención de nivel
            internacional, todo en una sola plataforma. Dejá tus datos y sé de
            los primeros en disfrutarlo en el lanzamiento oficial.
          </p>
        </div>

        {/* Card Container */}
        <Card className="bg-white/10 backdrop-blur-md border-0 shadow-2xl max-w-2xl mx-auto">
          <CardBody className="p-8">
            <HeroForm onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6 w-full">
                <div>
                  <Input
                    label="Nombre completo"
                    placeholder="Tu nombre completo"
                    className=" text-white placeholder:text-white/70 font-sora  rounded-lg"
                    {...register("name")}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />
                </div>

                <div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="tu@email.com"
                    className=" text-white placeholder:text-white/70 font-sora rounded-lg"
                    {...register("email")}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                </div>
              </div>

              <div className="mt-6 w-full">
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => {
                    const currentValue = field.value || "";
                    return (
                      <Select
                        label="Ciudad de interés"
                        selectedKeys={
                          currentValue ? new Set([currentValue]) : new Set()
                        }
                        onSelectionChange={(keys) => {
                          const [v] = Array.from(keys);
                          field.onChange(v);
                        }}
                        className="bg-white/20 border-white/30 text-white font-sora rounded-lg w-full"
                        isInvalid={!!errors.city}
                        errorMessage={errors.city?.message}
                      >
                        <SelectItem key="bogota">Bogotá</SelectItem>
                        <SelectItem key="medellin">Medellín</SelectItem>
                        <SelectItem key="cartagena">Cartagena</SelectItem>
                        <SelectItem key="cali">Cali</SelectItem>
                        <SelectItem key="barranquilla">Barranquilla</SelectItem>
                      </Select>
                    );
                  }}
                />
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6 w-full">
                <div>
                  <Controller
                    name="accommodationType"
                    control={control}
                    render={({ field }) => {
                      const currentValue = field.value || "";
                      return (
                        <Select
                          label="¿Qué tipo de alojamiento te interesa?"
                          selectedKeys={
                            currentValue ? new Set([currentValue]) : new Set()
                          }
                          onSelectionChange={(keys) => {
                            const [v] = Array.from(keys);
                            field.onChange(v);
                          }}
                          className="bg-white/20 border-white/30 text-white font-sora rounded-lg w-full"
                          isInvalid={!!errors.accommodationType}
                          errorMessage={errors.accommodationType?.message}
                        >
                          <SelectItem key="capsule">Cápsula</SelectItem>
                          <SelectItem key="suite">Suite</SelectItem>
                          <SelectItem key="apartasuite">Apartasuite</SelectItem>
                          <SelectItem key="property">
                            Propiedad completa
                          </SelectItem>
                        </Select>
                      );
                    }}
                  />
                </div>

                <div>
                  <Controller
                    name="stayDuration"
                    control={control}
                    render={({ field }) => {
                      const currentValue = field.value || "";
                      return (
                        <Select
                          label="¿Por cuánto tiempo sueles alojarte?"
                          selectedKeys={
                            currentValue ? new Set([currentValue]) : new Set()
                          }
                          onSelectionChange={(keys) => {
                            const [v] = Array.from(keys);
                            field.onChange(v);
                          }}
                          className="bg-white/20 border-white/30 text-white font-sora rounded-lg w-full"
                          isInvalid={!!errors.stayDuration}
                          errorMessage={errors.stayDuration?.message}
                        >
                          <SelectItem key="hours">Horas</SelectItem>
                          <SelectItem key="days">Días</SelectItem>
                          <SelectItem key="weeks">Semanas</SelectItem>
                          <SelectItem key="months">Meses</SelectItem>
                        </Select>
                      );
                    }}
                  />
                </div>
              </div>

              <div className="mt-8 w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-newayzi-purple hover:bg-gray-100 font-sora py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting
                    ? "Registrando..."
                    : "Quiero estar entre los primeros"}
                </Button>
              </div>
            </HeroForm>

            <div className="mt-6 text-white/80 text-sm font-sora">
              <p className="flex items-center mb-2">
                <span className="mr-2">✨</span> Acceso anticipado garantizado
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">📧</span> Actualizaciones exclusivas
              </p>
              <p className="flex items-center">
                <span className="mr-2">🎯</span> Sin spam, solo lo importante
              </p>
            </div>
          </CardBody>
        </Card>

        <div className="mt-12 grid grid-cols-3 gap-8 text-white/90 text-center">
          <div>
            <div className="text-3xl font-bold font-sora">500+</div>
            <div className="text-sm font-sora">En lista de espera</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-sora">50+</div>
            <div className="text-sm font-sora">Ciudades planeadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-sora">2025</div>
            <div className="text-sm font-sora">Lanzamiento</div>
          </div>
        </div>
      </div>
    </section>
  );
};
