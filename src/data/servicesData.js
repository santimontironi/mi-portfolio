const serviceData = (language) => {

    if (language === 'es') {
        return [
            {
                icono: 'bi bi-code-square',
                titulo: 'Frontend Web',
                descripcion: 'Creación de interfaces modernas y responsivas utilizando tecnologías como React, HTML, CSS, Bootstrap y JavaScript.'
            },
            {
                icono: 'bx bx-server',
                titulo: 'Backend Web',
                descripcion: 'Implementación de sistemas robustos y seguros con autenticación de usuarios, APIs y bases de datos.'
            },
            {
                icono: 'bi bi-database',
                titulo: 'Bases de Datos',
                descripcion: 'Creación y mantenimiento de bases de datos eficientes, seguras y escalables con MySQL y MongoDB para soluciones de datos robustas.'
            },
            {
                icono: 'bi bi-phone',
                titulo: 'Web Responsiva',
                descripcion: 'Diseño responsivo para sitios web y aplicaciones móviles, brindando la mejor experiencia de usuario con layouts modernos y eficientes.'
            },
            {
                icono: 'bi bi-cart',
                titulo: 'E-commerce',
                descripcion: 'Diseño e implementación de tiendas online con WooCommerce, adaptadas a las necesidades de tu negocio y enfocadas en la usabilidad y experiencia del usuario.'
            },
            {
                icono: 'bi bi-cloud-upload',
                titulo: 'Despliegue',
                descripcion: 'Despliegue eficiente de proyectos con configuraciones confiables de hosting y servidores, promoviendo un rendimiento óptimo y alta disponibilidad.'
            },
        ]
    } else {
        return [
            {
                icono: 'bi bi-code-square',
                titulo: 'Web Frontend',
                descripcion: 'Building modern and responsive user interfaces using technologies like React, HTML, CSS, Bootstrap, and JavaScript.'
            },
            {
                icono: 'bx bx-server',
                titulo: 'Web Backend',
                descripcion: 'Developing robust and secure systems with user authentication, APIs, and databases.'
            },
            {
                icono: 'bi bi-database',
                titulo: 'Databases',
                descripcion: 'Designing and maintaining efficient, secure, and scalable databases with MySQL and MongoDB for robust data solutions.'
            },
            {
                icono: 'bi bi-phone',
                titulo: 'Responsive Web Design',
                descripcion: 'Creating responsive websites and mobile apps, providing the best user experience with modern and efficient layouts.'
            },
            {
                icono: 'bi bi-cart',
                titulo: 'E-commerce',
                descripcion: 'Designing and implementing online stores with WooCommerce, tailored to your business needs and focused on usability and user experience.'
            },
            {
                icono: 'bi bi-cloud-upload',
                titulo: 'Deployment',
                descripcion: 'Efficient project deployment with reliable hosting and server configurations, ensuring optimal performance and high availability.'
            },
        ]
    }
}

export default serviceData