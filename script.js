document.addEventListener("DOMContentLoaded", () => {
    const body            = document.body;
    const navbar          = document.querySelector(".navbar");
    const sidebar         = document.getElementById("sidebar");
    const serifGrid       = document.getElementById("serif-grid");
    const sanserifGrid    = document.getElementById("sanserif-grid");
    const tipsSection     = document.getElementById("tips-section");
    const proyectoSection = document.getElementById("proyecto-section");
    const modal           = document.getElementById("fontModal");
    const closeModalBtn   = document.getElementById("closeModal");
    
    const fontBoxes = Array.from(document.querySelectorAll(".font-box"));
    const navLinks  = Array.from(document.querySelectorAll("nav a"));
    const sideLinks = Array.from(document.querySelectorAll(".sidebar a"));
    
    const fontKeyMap = {
        Garamond:   "EB Garamond",
        Freight:    "Freight Big Pro",
        Playfair:   "Playfair Display", "Bona Nova": "Bona Nova SC",
    };
    
    const fontInfo = {
        "Corben": {
            designer: "Ed Benguiat",
            description: "La tipografía Corben fue creada por Ed Benguiat, un reconocido diseñador de tipografías estadounidenses. Ed Benguiat es famoso por haber trabajado en una amplia gama de fuentes populares a lo largo de su carrera. Corben es una tipografía de estilo display con una estética retro y bold, que se lanzó en 1973 y rápidamente se convirtió en un clásico del diseño gráfico."
        },
        "Montserrat": {
        designer: "Julieta Ulanovsky",
        description: "Inspirada por las señales tradicionales del barrio Montserrat en Buenos Aires, Montserrat fue diseñada por Julieta Ulanovsky. Su estilo moderno y limpio la convierte en una de las tipografías sans serif más populares en la web y el diseño gráfico. Es especialmente conocida por su amplia versatilidad, tanto en formatos digitales como impresos."
        },
        "Reforma": {
        designer: "PampaType",
        description: "Reforma es una tipografía creada por la fundición tipográ ca PampaType, fundada por Alejandro Lo Celso en Argentina. Su diseño se inspira en la tipografía clásica de la literatura latinoamericana y en la señalética urbana, con el objetivo de ser moderna y legible sin perder elegancia. Pensada para su uso en diseño editorial, libros y publicaciones institucionales. Su nombre hace referencia a los procesos de cambio y modernización en la tipografía, evocando una estructura ordenada y funcional."
        },
        "Dm Sans": {
        designer: "Colophon Foundry",
        description: "DM Sans es una tipografía de código abierto diseñada por Colophon Foundry. Su diseño está basado en la idea de combinar funcionalidad y estética, ofreciendo un estilo sencillo y moderno que es altamente legible. Se utiliza en proyectos digitales, especialmente en interfaces de usuario y en branding."
        },
        "Playfair Display": {
        designer: "Claus Eggers Sørensen",
        description: "Desarrollada por Claus Eggers Sørensen, Playfair Display se inspira en los tipos de letra de transición del siglo XVIII, cuando la impresión pasó de las plumas caligráficas a los grabados en cobre. Este cambio influyó en el aumento del contraste en los trazos y la estilización de los caracteres. Su estructura elegante y llamativa la hace ideal para titulares, editoriales y branding de lujo. Se ha convertido en una de las tipografías serif gratuitas más populares en plataformas como Google Fonts."
        },
        "Outfit": {
        designer: "Ohno Type",
        description: "Outfit es una tipografía moderna diseñada por Ohno Type, reconocida por su enfoque minimalista y limpio. Su diseño geométrico y equilibrado la convierte en una opción ideal para una amplia variedad de aplicaciones, desde branding hasta interfaces digitales.\n\nEsta fuente destaca por su versatilidad, ya que se adapta bien tanto a títulos llamativos como a cuerpos de texto pequeños, manteniendo siempre una excelente legibilidad. Gracias a su estructura."
        },
        "Tiempos": {
        designer: "Kris Sowersby",
        description: "Creada por Kris Sowersby de Klim Type Foundry, Tiempos nacio como un encargo del diario The Times de Londres para desarrollar una version mas refinada y versatil de Times New Roman. Inspirada en las tipografias clasicas del Renacimiento, pero con una estructura optimizada para la impresion moderna y la lectura digital, Tiempos es utilizada en periodicos, revistas y diseno editorial de alta calidad. Su popularidad se debe a su equilibrio entre tradicion y modernidad, ofreciendo una legibilidad superior en multiples formatos."
        },
        "Quicksand": {
        designer: "Andrew Paglinawan",
        description: "Creada por Kris Sowersby de Klim Type Foundry, Tiempos nació como un encargo del diario The Times de Londres para desarrollar una versión más refinada y versátil de Times New Roman. Inspirada en las tipografías clásicas del Renacimiento, pero con una estructura optimizada para la impresión moderna y la lectura digital, Tiempos es utilizada en periódicos, revistas y diseño editorial de alta calidad. Su popularidad se debe a su equilibrio entre tradición y modernidad, ofreciendo una legibilidad superior en múltiples."
        },
        "Lora": {
        designer: "Olga Karpushina y Alexei Vanyashin",
        description: "Lora fue creada con el propósito de equilibrar la elegancia de la caligrafía contemporánea con la funcionalidad de una tipografía para pantallas. Su origen se encuentra en el desarrollo de fuentes optimizadas para la web, garantizando una lectura cómoda tanto en digital como en impreso. Sus formas orgánicas y su sutil contraste le otorgan una personalidad versátil, adecuada para proyectos editoriales y branding sofisticado."
        },
        "Manrope": {
        designer: " Mikhail Sharanda",
        description: " Manrope es una tipografía sans serif contemporánea creada por Mikhail Sharanda. Su diseño combina influencias geométricas con rasgos humanistas, lo que da como resultado un equilibrio entre precisión técnica y calidez visual. Gracias a su construcción bien proporcionada y sus detalles sutilmente curvados, Manrope ofrece una apariencia sofisticada y altamente legible, ideal para una amplia gama de aplicaciones."
        },
        "EB Garamond": {
        designer: "Claude Garamond",
        description: "La tipografía Garamond es una de las más antiguas y veneradas, creada por el impresor francés Claude Garamond en el siglo XVI. Es famosa por su legibilidad y elegancia, y ha sido la preferida para libros y publicaciones desde su creación. La familia Garamond ha sido reinterpretada en diversas versiones a lo largo de los siglos, manteniendo su estatus como una de las tipografías más prestigiosas."
        },
        "Poppins": {
        designer: "Indian Type Foundry",
        description: "Poppins es una tipografía sans serif moderna que fue creada por Indian Type Foundry en 2014. Se caracteriza por su estructura geométrica y sus formas simples, lo que le otorga un aspecto limpio y altamente legible. Inspirada en el diseño tipográfico clásico pero con un enfoque contemporáneo, Poppins se basa en formas geométricas precisas, especialmente círculos perfectos."
        },
        "Freight Big Pro": {
        designer: "Joshua Darden",
        description: "Freight Big Pro, creada por Joshua Darden, es una tipografía con un diseño robusto y equilibrado, pensada tanto para la pantalla como para la impresión. Su versatilidad la convierte en una excelente opción para proyectos editoriales, y diseño de productos. La familia tipográfica Freight Big Pro incluye una amplia gama de estilos, lo que la hace flexible en términos de aplicación."
        },
        "Plus Jakarta": {
        designer: "Adilson Pinho",
        description: " Plus Jakarta Sans, diseñada por Adilson Pinho, es una tipografía sans serif contemporánea que combina la simplicidad geométrica con toques humanistas. Su diseño limpio y bien equilibrado la hace altamente versátil, permitiendo su uso en una amplia variedad de aplicaciones, desde interfaces digitales hasta branding corporativo y material impreso.\n\nUna de sus principales fortalezas es su legibilidad, lo que la convierte en una opción ideal para."
        },
        "Bona Nova SC": {
        designer: "Andrzej Heidrich",
        description: "Bona Nova SC es una variante de la tipografía Bona Nova, una elegante serif inspirada en el diseño clásico con un toque moderno. La versión SC (Small Caps) de Bona Nova está diseñada con versales pequeñas, lo que significa que todas sus letras mayúsculas están ajustadas en proporción para mantener una armonía visual sin diferencias drásticas de altura."
        },
        "Sora": {
        designer: "Kiwari Studio",
        description: " Sora es una tipografía sans serif diseñada por Kiwari Studio, concebida con un enfoque moderno y una clara prioridad en la legibilidad. Su estilo limpio y estructurado, con líneas rectas y proporciones equilibradas, le otorgan un carácter sofisticado y altamente funcional, ideal para entornos digitales y branding contemporáneo."
        }
    };
    
    function resetColors() {
        navbar.style.backgroundColor  = "#6e7359";
        sidebar.style.backgroundColor = "#6e7359";
        fontBoxes.forEach(b => b.style.backgroundColor = "#46493d");
    }
    
    function hideAllSections() {
        serifGrid.classList.add("hidden");
        sanserifGrid.classList.add("hidden");
        tipsSection.classList.add("hidden");
        proyectoSection.classList.add("hidden");
    }
    
    function clearBackgrounds() {
        body.classList.remove("home-background", "background-page", "alt-background", "tips-background");
    }
    
    if (new URLSearchParams(location.search).get("home") === "true") {
        body.classList.add("home-background");
    }
    
    fontBoxes.forEach(box => {
        box.addEventListener("click", () => {
            const isActive = box.classList.contains("active-box");
            const color    = isActive ? "#882434" : "#505444";
            
            navbar.style.backgroundColor  = color;
            sidebar.style.backgroundColor = color;
            fontBoxes.forEach(b => b.style.backgroundColor = color);
            
            clearBackgrounds();
            body.classList.add(isActive ? "alt-background" : "background-page");
            
            modal.classList.remove("hidden");
            
            const fontName    = box.querySelector(".font-name").textContent.trim();
            const displayName = fontKeyMap[fontName] || fontName;
            const initials    = box.querySelector(".font-initials").textContent;
            const fontFamily  = getComputedStyle(box).fontFamily;
            
            document.getElementById("fontTitle").textContent    = displayName;
            document.getElementById("fontInitials").textContent = initials;
            document.getElementById("fontTitle").style.fontFamily    = fontFamily;
            document.getElementById("fontInitials").style.fontFamily = fontFamily;
            
            const info = fontInfo[displayName] || {};
            document.getElementById("fontDesigner").textContent   = info.designer   || "Diseñador Desconocido";
            document.getElementById("fontDescription").textContent = info.description || "Descripción pendiente para esta tipografía.";
        });
    });
    
    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
    
    document.getElementById("toggle-menu").addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const label = link.textContent.trim();
            
            resetColors();
            hideAllSections();
            clearBackgrounds();
            
            if (label === "Home") {
                body.classList.add("home-background");
            } else if (label === "Serif") {
                serifGrid.classList.remove("hidden");
                body.classList.add("background-page");
            } else if (label === "San-Serif") {
                sanserifGrid.classList.remove("hidden");
                body.classList.add("background-page");
            } else if (label === "Tips de uso") {
                tipsSection.classList.remove("hidden");
                body.classList.add("tips-background");
            } else if (label === "Sobre el Proyecto") {
                proyectoSection.classList.remove("hidden");
                body.classList.add("background-page");
            }
        });
    });
    
    sideLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const label = link.textContent.trim();
            
            resetColors();
            hideAllSections();
            clearBackgrounds();
            
            if (["Catálogo Impreso", "Historia", "Contacto"].includes(label)) {
                body.classList.add("background-page");
                sidebar.classList.remove("active");
            }
        });
    });
});