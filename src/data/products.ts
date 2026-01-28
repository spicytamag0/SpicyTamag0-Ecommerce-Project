import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16\"",
    description: "Potencia profesional con el chip M3 Pro. Pantalla Liquid Retina XDR, hasta 22 horas de batería y rendimiento excepcional para los flujos de trabajo más exigentes.",
    price: 2499,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    category: "Laptops",
    brand: "Apple",
    stock: 15,
    rating: 4.9,
    reviews: 324,
    features: [
      "Chip M3 Pro con CPU de 12 núcleos",
      "GPU de 18 núcleos",
      "36GB de memoria unificada",
      "SSD de 512GB",
      "Pantalla Liquid Retina XDR de 16.2 pulgadas"
    ]
  },
  {
    id: "2",
    name: "Sony WH-1000XM5",
    description: "Los mejores auriculares con cancelación de ruido del mercado. Sonido excepcional, comodidad suprema y hasta 30 horas de batería.",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=80",
    category: "Audio",
    brand: "Sony",
    stock: 42,
    rating: 4.8,
    reviews: 892,
    features: [
      "Cancelación de ruido líder en la industria",
      "30 horas de batería",
      "Carga rápida: 3 min = 3 horas",
      "Audio de alta resolución",
      "Conexión multipunto"
    ]
  },
  {
    id: "3",
    name: "iPhone 15 Pro Max",
    description: "El iPhone más potente jamás creado. Titanio, chip A17 Pro, sistema de cámara profesional y el zoom óptico más largo en un iPhone.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80",
    category: "Smartphones",
    brand: "Apple",
    stock: 28,
    rating: 4.9,
    reviews: 1523,
    features: [
      "Chip A17 Pro",
      "Diseño de titanio",
      "Cámara principal de 48MP",
      "Zoom óptico 5x",
      "Botón de Acción"
    ]
  },
  {
    id: "4",
    name: "Samsung Galaxy Watch 6",
    description: "Tu compañero de salud y fitness. Monitoreo avanzado del sueño, GPS integrado y diseño elegante que combina con cualquier estilo.",
    price: 329,
    originalPrice: 379,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    category: "Wearables",
    brand: "Samsung",
    stock: 56,
    rating: 4.6,
    reviews: 445,
    features: [
      "Sensor BioActive mejorado",
      "Análisis de composición corporal",
      "Monitoreo avanzado del sueño",
      "GPS integrado",
      "Resistente al agua 5ATM"
    ]
  },
  {
    id: "5",
    name: "iPad Pro 12.9\"",
    description: "El iPad más avanzado. Con chip M2, pantalla Liquid Retina XDR y compatibilidad con Apple Pencil Pro para la creatividad sin límites.",
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
    category: "Tablets",
    brand: "Apple",
    stock: 19,
    rating: 4.8,
    reviews: 678,
    features: [
      "Chip M2 con CPU de 8 núcleos",
      "Pantalla Liquid Retina XDR",
      "ProMotion 120Hz",
      "Face ID",
      "Compatibilidad con Apple Pencil Pro"
    ]
  },
  {
    id: "6",
    name: "Dell XPS 15",
    description: "Potencia y elegancia en un diseño ultradelgado. Pantalla OLED 3.5K, procesador Intel Core i9 y gráficos NVIDIA para profesionales creativos.",
    price: 1899,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop&q=80",
    category: "Laptops",
    brand: "Dell",
    stock: 12,
    rating: 4.7,
    reviews: 234,
    features: [
      "Intel Core i9-13900H",
      "NVIDIA GeForce RTX 4060",
      "32GB DDR5 RAM",
      "1TB SSD NVMe",
      "Pantalla OLED 3.5K táctil"
    ]
  },
  {
    id: "7",
    name: "AirPods Pro 2",
    description: "Audio espacial personalizado, cancelación activa de ruido y modo de transparencia adaptativo. La experiencia auditiva definitiva.",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&auto=format&fit=crop&q=80",
    category: "Audio",
    brand: "Apple",
    stock: 89,
    rating: 4.8,
    reviews: 2134,
    features: [
      "Chip H2",
      "Cancelación activa de ruido 2x",
      "Audio espacial personalizado",
      "Modo de transparencia adaptativo",
      "Hasta 6 horas de escucha"
    ]
  },
  {
    id: "8",
    name: "Samsung Galaxy S24 Ultra",
    description: "El smartphone Galaxy más poderoso. S Pen integrado, cámara de 200MP, IA Galaxy y marco de titanio para durabilidad suprema.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=80",
    category: "Smartphones",
    brand: "Samsung",
    stock: 34,
    rating: 4.7,
    reviews: 876,
    features: [
      "Snapdragon 8 Gen 3",
      "Cámara de 200MP",
      "S Pen integrado",
      "IA Galaxy",
      "Marco de titanio"
    ]
  }
];

export const categories = [
  "Todos",
  "Laptops",
  "Smartphones",
  "Audio",
  "Tablets",
  "Wearables"
];
