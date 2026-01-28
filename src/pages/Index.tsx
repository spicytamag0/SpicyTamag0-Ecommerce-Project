import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield, CreditCard, Headphones } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En pedidos mayores a $100",
  },
  {
    icon: Shield,
    title: "Garantía",
    description: "2 años en todos los productos",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    description: "Protección en cada transacción",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Estamos siempre disponibles",
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const dealsProducts = products.filter((p) => p.originalPrice).slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-dark">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary-foreground space-y-6"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium">
                  Nuevos productos 2024
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  La tecnología del{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    futuro
                  </span>
                  , hoy
                </h1>
                <p className="text-lg opacity-80 max-w-lg">
                  Descubre los últimos gadgets, laptops y accesorios de las mejores marcas. 
                  Calidad garantizada y envío rápido.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="gradient-primary text-primary-foreground shadow-button hover:opacity-90"
                    >
                      Ver catálogo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Ver ofertas
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
                    alt="MacBook"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-card border-y">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Productos destacados</h2>
            <p className="text-muted-foreground mt-1">Lo mejor de nuestra tienda</p>
          </div>
          <Link to="/products">
            <Button variant="ghost">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deals Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Ofertas especiales</h2>
              <p className="text-muted-foreground mt-1">Aprovecha los mejores descuentos</p>
            </div>
            <Link to="/products">
              <Button variant="ghost">
                Ver todas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para actualizar tu tecnología?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Regístrate hoy y obtén un 10% de descuento en tu primera compra.
            Además, accede a ofertas exclusivas y seguimiento de pedidos.
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Crear cuenta gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
