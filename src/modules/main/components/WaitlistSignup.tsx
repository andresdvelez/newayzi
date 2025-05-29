import { useRouter } from "@/modules/translations/i18n/routing";
import { Button, Card, CardBody } from "@heroui/react";

export const WaitlistSignup = () => {
  const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!email) {
  //     addToast({
  //       title: "Error",
  //       description: "Por favor ingresa tu email",
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     addToast({
  //       title: "¡Bienvenido a la lista!",
  //       description: "Te notificaremos cuando Newayzi esté disponible",
  //     });
  //     setEmail("");
  //     setIsSubmitting(false);
  //   }, 1000);
  // };

  return (
    <section className="py-20 bg-gradient-to-br from-newayzi-purple via-newayzi-blue to-newayzi-dark-orchid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-sora">
            Únete a la revolución del
            <br />
            <span className="text-yellow-300">alojamiento</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-sora leading-relaxed">
            Sé de los primeros en experimentar una nueva forma de viajar y
            hospedarte. Regístrate ahora y obtén acceso anticipado a Newayzi.
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-0 shadow-2xl max-w-md mx-auto">
          <CardBody className="p-8">
            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
            {/* <div>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-sora text-center py-3 px-4 rounded-full"
                />
              </div> */}

            <Button
              onPress={() => router.push("/auth/waitlist")}
              type="submit"
              className="w-full bg-white text-newayzi-purple hover:bg-gray-100 font-sora py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Únete a la Lista de Espera
            </Button>
            {/* </form> */}

            <div className="mt-6 text-white/80 text-sm font-sora">
              <p>✨ Acceso anticipado garantizado</p>
              <p>📧 Actualizaciones exclusivas</p>
              <p>🎯 Sin spam, solo lo importante</p>
            </div>
          </CardBody>
        </Card>

        <div className="mt-12 grid grid-cols-3 gap-8 text-white/90">
          <div>
            <div className="text-3xl font-bold font-sora">500+</div>
            <div className="text-sm font-sora">En lista de espera</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-sora">50+</div>
            <div className="text-sm font-sora">Ciudades planeadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-sora">2024</div>
            <div className="text-sm font-sora">Lanzamiento</div>
          </div>
        </div>
      </div>
    </section>
  );
};
