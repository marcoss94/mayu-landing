export const ROUTES = {
    PORTFOLIO: "/portfolio",
    SERVICES: "/servicios",
    ABOUT: "/sobre-mi",
    CONTACT: "/contacto",
}

export const ROUTES_NAVBAR: Record<string, { name: string; href?: string; isDropdown?: boolean; }> = {
    PORTFOLIO: {
        name: "Portfolio",
        href: ROUTES.PORTFOLIO,
    },
    SERVICES: {
        name: "Servicios",
        isDropdown: true,
    },
    ABOUT: {
        name: "Sobre mi",
        href: ROUTES.ABOUT,
    },
    CONTACT: {
        name: "Contacto",
        href: ROUTES.CONTACT,
    },

}

