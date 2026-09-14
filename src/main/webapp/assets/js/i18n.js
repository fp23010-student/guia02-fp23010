// =========================
// DICCIONARIO DE TRADUCCIONES
// =========================
const traducciones = {
    es: {
        nav_inicio: "Inicio",
        nav_funciones: "Funciones",
        nav_ventajas: "Ventajas",
        nav_contacto: "Contacto",
        nav_acceder: "Acceder",

        hero_tag: "Sistema Médico Integral",
        hero_title_pre: "Tu Expediente",
        hero_title_span: "Clínico<br>GalenoSV",
        hero_desc: "Organiza, protege y consulta la información médica de tus pacientes desde un solo panel. Historiales, notas y diagnósticos siempre a la mano.",
        hero_btn_primary: "Comenzar Ahora →",
        hero_btn_secondary: "Conocer más",

        dashboard_expedientes: "Expedientes",
        dashboard_citas: "Citas",

        funciones_title: "Funciones pensadas para tu clínica",
        funciones_desc: "Ideal para consultorios, clínicas y hospitales que necesitan orden y rapidez.",

        card1_title: "Gestión de pacientes",
        card1_desc: "Crea y administra fichas completas: datos personales, alergias y antecedentes médicos.",
        card2_title: "Historial clínico",
        card2_desc: "Revisa y edita evoluciones clínicas, diagnósticos y tratamientos anteriores.",
        card3_title: "Agenda de citas",
        card3_desc: "Agenda, reprograma y envía recordatorios automáticos a tus pacientes.",
        card4_title: "Seguridad y privacidad",
        card4_desc: "Control de accesos, respaldo y cumplimiento normativo para datos sensibles.",

        ventajas_title: "Haz tu consulta más eficiente",
        ventajas_li1: "Consulta instantánea del historial del paciente",
        ventajas_li2: "Menos papeleo, menos errores humanos",
        ventajas_li3: "Seguimiento continuo entre visitas",
        ventajas_li4: "Estadísticas y reportes actualizados",
        ventajas_li5: "Diseño simple, sin curva de aprendizaje",

        testimonial_text: "\"La digitalización del expediente clínico transforma la manera en que cuidamos a nuestros pacientes.\"",
        testimonial_author: "— Equipo de GalenoSV",

        cta_title: "¿Empezamos?",
        cta_desc: "Ingresa con tu cuenta o pide una demostración personalizada.",
        cta_btn_login: "Iniciar sesión",
        cta_btn_demo: "Solicitar demo",

        footer_logo: "▣ ExpedienteClínico",
        footer_desc: "Plataforma de administración de historiales médicos.",
        footer_aviso: "Aviso de privacidad Condiciones Ayuda",
        footer_link_privacidad: "Privacidad",
        footer_link_terminos: "Términos",
        footer_link_soporte: "Soporte",
        footer_copyright: "© 2026 GalenoSV. Todos los derechos reservados.",
        footer_lang_label: "Idioma:"
    },
    en: {
        nav_inicio: "Home",
        nav_funciones: "Features",
        nav_ventajas: "Benefits",
        nav_contacto: "Contact",
        nav_acceder: "Sign In",

        hero_tag: "Complete Medical System",
        hero_title_pre: "Your Clinical",
        hero_title_span: "Record<br>GalenoSV",
        hero_desc: "Organize, protect, and access your patients' medical information from a single dashboard. Records, notes, and diagnoses always within reach.",
        hero_btn_primary: "Get Started →",
        hero_btn_secondary: "Learn More",

        dashboard_expedientes: "Records",
        dashboard_citas: "Appointments",

        funciones_title: "Features built for your clinic",
        funciones_desc: "Ideal for practices, clinics, and hospitals that need order and speed.",

        card1_title: "Patient management",
        card1_desc: "Create and manage complete profiles: personal data, allergies, and medical history.",
        card2_title: "Clinical history",
        card2_desc: "Review and edit clinical progress notes, diagnoses, and past treatments.",
        card3_title: "Appointment scheduling",
        card3_desc: "Schedule, reschedule, and send automatic reminders to your patients.",
        card4_title: "Security and privacy",
        card4_desc: "Access control, backups, and regulatory compliance for sensitive data.",

        ventajas_title: "Make your consultations more efficient",
        ventajas_li1: "Instant access to patient history",
        ventajas_li2: "Less paperwork, fewer human errors",
        ventajas_li3: "Continuous follow-up between visits",
        ventajas_li4: "Up-to-date statistics and reports",
        ventajas_li5: "Simple design, no learning curve",

        testimonial_text: "\"Digitizing the clinical record transforms the way we care for our patients.\"",
        testimonial_author: "— The GalenoSV Team",

        cta_title: "Shall we start?",
        cta_desc: "Sign in to your account or request a personalized demo.",
        cta_btn_login: "Sign In",
        cta_btn_demo: "Request Demo",

        footer_logo: "▣ ClinicalRecord",
        footer_desc: "Medical records management platform.",
        footer_aviso: "Privacy Notice Terms Help",
        footer_link_privacidad: "Privacy",
        footer_link_terminos: "Terms",
        footer_link_soporte: "Support",
        footer_copyright: "© 2026 GalenoSV. All rights reserved.",
        footer_lang_label: "Language:"
    }
};

// =========================
// APLICAR IDIOMA
// =========================
function aplicarIdioma(lang) {
    if (!traducciones[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const clave = el.dataset.i18n;
        const texto = traducciones[lang][clave];
        if (texto !== undefined) {
            el.innerHTML = texto;
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("idioma", lang);
}

// =========================
// INICIALIZACIÓN
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";

    const selector = document.getElementById("language");
    if (selector) {
        selector.value = idiomaGuardado;
        selector.addEventListener("change", (e) => {
            aplicarIdioma(e.target.value);
        });
    }

    aplicarIdioma(idiomaGuardado);
});