import WeddingIcon from "../assets/hearts.svg";
import FifteenthBirthdayIcon from "../assets/crown.svg";
import CoverageIcon from "../assets/calendar-check.svg";
import InfantileIcon from "../assets/baby.svg";
import StudioIcon from "../assets/aperture.svg";
import OutdoorsIcon from "../assets/sun.svg";
import ProductsIcon from "../assets/package.svg";
import ContentCreationIcon from "../assets/monitor-play.svg";

export const CONSTANTS = {
  CATEGORIES: {
    wedding: {
      key: "wedding",
      name: "Boda",
      href: "/boda",
      description:
        "Fotografía de bodas y eventos especiales, capturando momentos únicos y memorables.",
      icon: WeddingIcon,
    },
    fifteenth_birthday: {
      key: "fifteenth_birthday",
      name: "Quinceañera",
      href: "/quinceanera",
      description:
        "Fotografía de quinceañeras, capturando la esencia y belleza de este importante evento.",
      icon: FifteenthBirthdayIcon,
    },
    coverage: {
      key: "coverage",
      name: "Covertura de eventos",
      href: "/covertura-de-eventos",
      description:
        "Fotografía de eventos, desde fiestas hasta conferencias, capturando cada detalle.",
      icon: CoverageIcon,
    },
    infantile: {
      key: "infantile",
      name: "Infantil",
      href: "/infantil",
      description:
        "Fotografía infantil, capturando la alegría y espontaneidad de los más pequeños.",
      icon: InfantileIcon,
    },
    studio: {
      key: "studio",
      name: "Estudio",
      href: "/estudio",
      description:
        "Fotografía de estudio, creando retratos y sesiones personalizadas en un entorno controlado.",
      icon: StudioIcon,
    },
    outdoors: {
      key: "outdoors",
      name: "Fotos en exteriores",
      href: "/fotos-en-exteriores",
      description:
        "Fotografía al aire libre, capturando la belleza natural y la espontaneidad de los momentos.",
      icon: OutdoorsIcon,
    },
    products: {
      key: "products",
      name: "Productos",
      href: "/productos",
      description:
        "Fotografía de productos, destacando las características y detalles de cada artículo.",
      icon: ProductsIcon,
    },
    content_creation: {
      key: "content_creation",
      name: "Creacion de contenido",
      href: "/creacion-de-contenido",
      description:
        "Creación de contenido visual, desde videos hasta imágenes, para redes sociales y marketing.",
      icon: ContentCreationIcon,
    },
  },
};
