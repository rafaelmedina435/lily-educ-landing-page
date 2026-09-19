/**
 * Contenido del Colegio Bilingüe La Colmena.
 * Tomado de los folletos oficiales en `docs/media/`.
 */

export const SCHOOL = {
    name: 'Colegio Bilingüe La Colmena',
    shortName: 'La Colmena',
    city: 'Aguadulce',
    province: 'Coclé',
    /** El eslogan del colegio: encabeza el hero y firma los pies de página. */
    motto: 'El Néctar de la Sabiduría',
    schoolYear: '2026 – 2027',
    foundedYear: 2006,
    address: 'Avenida Rodolfo Chiari, Vía El Puerto',
    addressLine2: 'Aguadulce — Coclé, Panamá',
    email: 'esclacolmena@gmail.com',
    instagram: 'bilinguelacolmena',
    phones: ['988-8181', '6845-4009', '6982-6934', '6997-8532'],
    whatsapp: '50768454009',
}

export const ABOUT = `Colegio Bilingüe La Colmena es un colegio comprometido a brindarle a las próximas generaciones una educación con valores, inteligente, creativa y con carácter. Con 20 años de experiencia en el mundo educativo, priorizamos la calidad, la creatividad y el desarrollo personal de nuestros estudiantes. Contamos con el mejor plan de estudios, instalaciones modernas y un ambiente de aprendizaje propicio.`

export const BENEFITS = [
    {
        title: 'Excelencia académica',
        description:
            'Un plan de estudios exigente y un acompañamiento cercano en cada nivel.',
        icon: 'award',
    },
    {
        title: 'Formación en valores',
        description:
            'Educación con carácter: ética, respeto y responsabilidad como base.',
        icon: 'heart',
    },
    {
        title: 'Liderazgo en inglés',
        description:
            'Enseñanza bilingüe desde preescolar, con materias dictadas en inglés.',
        icon: 'globe',
    },
    {
        title: 'Desarrollo integral',
        description: 'Deporte, arte y cultura como parte de la vida escolar.',
        icon: 'sparkles',
    },
    {
        title: 'Tecnología e innovación',
        description:
            'Robótica e informática integradas al aprendizaje desde primaria.',
        icon: 'chip',
    },
    {
        title: 'Trayectoria comprobada',
        description:
            'Veinte años formando estudiantes en Aguadulce, con instalaciones propias.',
        icon: 'school',
    },
]

export const LEVELS = [
    {
        id: 'preescolar',
        name: 'Pre-escolar',
        tagline: 'Los primeros pasos, en dos idiomas',
        schedule: '8:00 a. m. — 12:00 m. d.',
        enrollment: 180,
        monthly: 100,
        subjects: [
            'Español',
            'Matemática',
            'Ambiente Natural',
            'Ambiente Social',
            'Ética y Valores',
            'Educación Física',
            'Expresiones Artísticas',
            'Oral Language',
            'Mathematics',
            'Social Science',
            'Science',
        ],
    },
    {
        id: 'primaria',
        name: 'Primaria',
        tagline: 'Bases sólidas y pensamiento crítico',
        schedule: '7:30 a. m. — 2:00 p. m.',
        enrollment: 180,
        monthly: 110,
        subjects: [
            'Español',
            'Matemática',
            'Ciencias Naturales',
            'Ciencias Sociales',
            'Ética y Valores',
            'Educación Física',
            'Expresiones Artísticas',
            'Robótica / Informática',
            'Grammar',
            'Mathematics',
            'Reading & Writing',
            'Listening & Speaking',
            'Science',
            'Familia y Desarrollo / Finanzas',
            'Folklore',
        ],
    },
    {
        id: 'premedia',
        name: 'Pre-media',
        tagline: 'Autonomía, método y proyectos',
        schedule: '7:30 a. m. — 2:00 p. m.',
        enrollment: 200,
        monthly: 130,
        subjects: [
            'Español',
            'Matemática',
            'Ciencias Naturales',
            'Historia',
            'Geografía',
            'Cívica',
            'Expresiones Artísticas',
            'Grammar',
            'Science',
            'Listening and Speaking',
            'Reading and Writing',
            'Educación Física',
            'Informática / Robótica',
            'Familia y Desarrollo / Emprendimiento',
        ],
    },
    {
        id: 'bachiller',
        name: 'Bachiller en Ciencias',
        tagline: 'Preparación real para la universidad',
        schedule: '7:30 a. m. — 2:00 p. m.',
        enrollment: 200,
        monthly: 140,
        subjects: [
            'Español',
            'Física',
            'Matemática',
            'Química',
            'Inglés',
            'Historia de Panamá',
            'Biología',
            'Filosofía',
            'Evaluación de proyectos',
            'Cívica',
            'Finanzas / Emprendimiento',
            'Informática / Robótica 10.º y 11.º',
            'Educación Física 10.º y 11.º',
        ],
    },
]

export const PAYMENT_NOTES = [
    'Las mensualidades se dividen en 10 cuotas, de marzo a diciembre.',
    'Dos hermanos matriculados reciben un descuento de B/. 10.00 en la mensualidad.',
    'Al cancelar el año escolar completo se recibe un 5 % de descuento.',
]

export const REQUIREMENTS = [
    'Copia de cédula juvenil por ambas caras.',
    'Copia de cédula del acudiente.',
    'Copia de boletín o traslado, si proviene de otro colegio.',
    'Firmar hoja de inscripción y contrato escolar.',
    'Copia de expediente de salud.',
]

/* ------------------------------------------------------------------ *
 * Vida escolar — la banda de música
 * Es la única actividad que confirmó el colegio.
 * ------------------------------------------------------------------ */

export const BAND = {
    name: 'Banda de música',
    tagline: 'Disciplina que se escucha',
    description:
        'La banda es el sello del colegio en desfiles y actos cívicos. Los estudiantes que la integran aprenden lectura musical, marcha y trabajo en equipo, y representan a La Colmena en las fiestas patrias y en actividades de la comunidad de Aguadulce.',
    sections: [
        'Percusión — cajas, bombos y platillos',
        'Liras y melódicas',
        'Bastoneras y abanderadas',
        'Cuerpo de banderas',
    ],
    notes: [
        'Abierta a estudiantes de primaria, pre-media y media.',
        'Ensayos en contra-jornada, coordinados con el calendario escolar.',
        'La participación es voluntaria y se registra en el portal del acudiente.',
    ],
}

/* ------------------------------------------------------------------ *
 * Plataforma digital — solo se menciona, sin entrar en detalles
 * ------------------------------------------------------------------ */

export const PLATFORM = {
    title: 'Portal para acudientes y estudiantes',
    description:
        'Cada familia recibe un acceso al portal del colegio. Desde el celular o la computadora puede seguir la agenda, las notas y la asistencia de su acudido, y recibir los comunicados de la dirección.',
}

/* ------------------------------------------------------------------ *
 * Métodos de pago
 * PENDIENTE DE CONFIRMAR con la administración del colegio: son los
 * medios habituales en Panamá, colocados aquí para el prototipo.
 * ------------------------------------------------------------------ */

export const PAYMENT_METHODS = [
    {
        title: 'Efectivo en secretaría',
        description: 'Lunes a viernes, en horario de atención.',
        icon: 'cash',
    },
    {
        title: 'Yappy',
        description: 'Pago inmediato desde el celular con el directorio Yappy.',
        icon: 'phone',
    },
    {
        title: 'ACH / transferencia bancaria',
        description: 'A la cuenta del colegio, enviando el comprobante.',
        icon: 'bank',
    },
    {
        title: 'Tarjeta de crédito o débito',
        description: 'Visa y Mastercard en la secretaría del plantel.',
        icon: 'card',
    },
]

/* ------------------------------------------------------------------ *
 * Nuestra sede
 * La dirección sale del folleto y del contrato. El enlace abre una
 * búsqueda en Google Maps: no hay ficha propia del colegio todavía.
 * ------------------------------------------------------------------ */

export const CAMPUS = {
    title: 'Un campus pensado para aprender',
    description:
        'Aulas amplias, áreas de recreación y espacios para deporte, arte y robótica, en el corazón de Aguadulce.',
    highlights: [
        'Aulas amplias e iluminadas',
        'Áreas de recreación',
        'Laboratorio de robótica',
        'Espacios para arte y cultura',
    ],
    mapsQuery: 'Colegio Bilingüe La Colmena, Aguadulce, Coclé, Panamá',
}

/* ------------------------------------------------------------------ *
 * Reglamento interno — vista `/reglamento`
 * Redactado en términos generales, como el reglamento de cualquier
 * colegio: NO reproduce las cláusulas del contrato, que son propias de
 * cada institución y no son información pública.
 * ------------------------------------------------------------------ */

export const REGULATIONS_INTRO =
    'Estas son las normas de convivencia que rigen la vida diaria en el colegio. Las compartimos para que las familias sepan qué esperamos de nuestros estudiantes y qué pueden esperar de nosotros. Al matricularse, cada acudiente recibe el reglamento interno completo y el contrato de servicios educativos, que son los documentos que rigen.'

export const REGULATIONS = [
    {
        id: 'asistencia',
        title: 'Asistencia y puntualidad',
        icon: 'clock',
        points: [
            'El estudiante debe asistir a clases todos los días del calendario escolar y llegar antes del inicio de la jornada.',
            'Las ausencias se justifican ante la dirección; las de motivo médico, con el certificado correspondiente.',
            'Al reincorporarse después de una ausencia, el estudiante cuenta con unos días para ponerse al día con las asignaciones pendientes.',
            'La asistencia sostenida es condición para tener derecho a la evaluación del trimestre.',
        ],
    },
    {
        id: 'uniforme',
        title: 'Uniforme y presentación personal',
        icon: 'shirt',
        points: [
            'El uniforme regular y el de educación física se usan completos y en buen estado, según el día que corresponda.',
            'El acudiente puede adquirir el uniforme donde prefiera, siempre que respete el diseño y los colores del colegio.',
            'Se espera una presentación personal sobria: sin maquillaje, uñas pintadas, tintes de cabello ni accesorios llamativos.',
            'Cada estudiante es responsable de sus útiles y materiales; se recomienda marcarlos con su nombre.',
        ],
    },
    {
        id: 'convivencia',
        title: 'Convivencia y disciplina',
        icon: 'handshake',
        points: [
            'El respeto entre estudiantes, docentes y personal del colegio es la norma básica de convivencia.',
            'No se toleran las agresiones físicas ni verbales, dentro ni fuera del plantel.',
            'El cuidado del mobiliario y de las instalaciones es responsabilidad de toda la comunidad educativa.',
            'Las faltas se atienden de forma gradual, con acompañamiento del acudiente y de acuerdo con las normas del MEDUCA.',
        ],
    },
    {
        id: 'evaluacion',
        title: 'Evaluación y promoción',
        icon: 'notebook',
        points: [
            'El año lectivo se divide en tres trimestres, con pruebas en las fechas del calendario escolar.',
            'El estudiante es promovido cuando aprueba el plan de estudios completo del año.',
            'Las calificaciones se comunican al acudiente al cierre de cada trimestre y quedan disponibles en el portal.',
            'Cualquier reclamo sobre una calificación se presenta ante el docente y, de ser necesario, ante la dirección.',
        ],
    },
    {
        id: 'dispositivos',
        title: 'Uso de dispositivos y redes',
        icon: 'phone',
        points: [
            'El uso del celular está regulado dentro del plantel y no se permite durante la jornada académica.',
            'No se permite grabar ni fotografiar dentro del colegio sin autorización.',
            'Las publicaciones en redes sociales que afecten la imagen o la integridad de un estudiante o del personal se atienden como falta disciplinaria.',
            'Se recomienda no traer al colegio equipos electrónicos ni objetos de valor.',
        ],
    },
    {
        id: 'seguridad',
        title: 'Entrada, salida y seguridad',
        icon: 'shield',
        points: [
            'El estudiante se entrega únicamente a las personas que el acudiente haya autorizado por escrito.',
            'La lista de personas autorizadas se mantiene actualizada en el portal del acudiente.',
            'La responsabilidad del colegio sobre el estudiante empieza y termina con la jornada de clases.',
            'Toda visita al plantel requiere autorización previa de la dirección.',
        ],
    },
    {
        id: 'comunicacion',
        title: 'Comunicación con las familias',
        icon: 'chat',
        points: [
            'Los comunicados oficiales se envían por el portal y llegan como notificación al celular.',
            'El acudiente se compromete a asistir a las citaciones y reuniones que convoque el colegio.',
            'Las inquietudes se plantean primero al docente de la asignatura y luego a la dirección.',
            'El desempeño académico y personal de cada estudiante se maneja de forma confidencial.',
        ],
    },
    {
        id: 'actividades',
        title: 'Actividades y salidas',
        icon: 'compass',
        points: [
            'Las giras y actividades organizadas por el colegio forman parte de la formación y requieren autorización firmada del acudiente.',
            'Las salidas se tramitan ante el MEDUCA con la debida antelación.',
            'La participación en la banda y en otras actividades es voluntaria y se coordina con el calendario escolar.',
        ],
    },
]
