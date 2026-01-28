import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span>TechStore</span>
            </Link>
            <p className="text-sm opacity-70">
              Tu destino para la tecnología más avanzada. Productos de calidad con garantía y envío rápido.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Catálogo</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Ofertas</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Novedades</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold mb-4">Cuenta</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/profile" className="hover:opacity-100 transition-opacity">Mi Perfil</Link></li>
              <li><Link to="/cart" className="hover:opacity-100 transition-opacity">Carrito</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Iniciar Sesión</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>soporte@techstore.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad Tech, CP 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm opacity-50">
          <p>© 2024 TechStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
