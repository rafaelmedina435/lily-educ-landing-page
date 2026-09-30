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
    /** Año lectivo en curso: se toma del calendario para no tener que actualizarlo. */
    schoolYear: new Date().getFullYear(),
    /** Período de la matrícula que se anuncia en el hero. */
    enrollmentYear: '2027',
    foundedYear: 2006,
    address: 'Avenida Rodolfo Chiari, Vía El Puerto',
    addressLine2: 'Aguadulce — Coclé, Panamá',
    email: 'esclacolmena@gmail.com',
    instagram: 'bilinguelacolmena',
    phones: ['988-8181', '6845-4009', '6982-6934', '6997-8532'],
    whatsapp: '50768454009',
}

export const ABOUT = `Colegio Bilingüe La Colmena forma a las próximas generaciones con una educación basada en valores, excelencia académica, creatividad y carácter. Con más de 20 años de experiencia, ofrecemos un ambiente de aprendizaje moderno e integral que impulsa el desarrollo personal y académico de nuestros estudiantes.`

/** Frases de ABOUT que se muestran en negrita. */
export const ABOUT_HIGHLIGHTS = [SCHOOL.name, 'más de 20 años de experiencia']

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
 * Vida escolar — la banda de guerra y las demás actividades
 * ------------------------------------------------------------------ */

/**
 * Cada actividad tiene su tarjeta en la landing (`summary`) y su sección
 * en `/vida-escolar#<id>` (el resto de los campos). `photo` es opcional:
 * sin foto, la tarjeta usa el fondo verde de la marca con el icono.
 *
 * PENDIENTE DE CONFIRMAR con el colegio: los detalles de alemán,
 * emprendimiento y deporte (horarios, niveles) son orientativos.
 */
export const ACTIVITIES = [
    {
        id: 'banda',
        title: 'Banda de guerra',
        tag: 'Tradición',
        tagline: 'Disciplina que se escucha',
        summary:
            'El sello del colegio en desfiles y actos cívicos: ritmo, marcha y trabajo en equipo.',
        description:
            'La banda de guerra es el sello del colegio en desfiles y actos cívicos. Los estudiantes que la integran aprenden ritmo, marcha y trabajo en equipo, y representan a La Colmena en las fiestas patrias y en actividades de la comunidad de Aguadulce.',
        highlights: [
            'Tambores, redoblantes y bombos',
            'Cornetas y clarines',
            'Bastoneras y abanderadas',
            'Cuerpo de banderas',
        ],
        notes: [
            'Abierta a estudiantes de primaria, pre-media y media.',
            'Ensayos en contra-jornada, coordinados con el calendario escolar.',
            'La participación es voluntaria y se registra en el portal del acudiente.',
        ],
        icon: 'music',
        photo: 'uniforme',
        photoPosition: '62% 45%',
        photoAlt:
            'Escudo del Colegio Bilingüe La Colmena bordado en el suéter del uniforme',
    },
    {
        id: 'aleman',
        title: 'Clases de alemán',
        tag: 'Idiomas',
        tagline: 'Un tercer idioma para abrir más puertas',
        summary:
            'Además del inglés, los estudiantes suman un tercer idioma fuera del horario regular.',
        description:
            'Además del inglés, los estudiantes pueden sumar un tercer idioma con clases de alemán fuera del horario regular. Las clases combinan conversación, vocabulario de uso diario y cultura de los países de habla alemana, a un ritmo pensado para quienes empiezan desde cero.',
        highlights: [
            'Conversación',
            'Vocabulario cotidiano',
            'Lectura y escritura',
            'Cultura',
        ],
        notes: [
            'Se imparte fuera del horario regular de clases.',
            'Grupos organizados por nivel y edad.',
            'Consulte horarios y cupos en la secretaría del colegio.',
        ],
        icon: 'language',
    },
    {
        id: 'emprendimiento',
        title: 'Ferias de emprendimiento',
        tag: 'Proyectos',
        tagline: 'De la idea al primer cliente',
        summary:
            'Los estudiantes crean sus propios proyectos y negocios y los presentan a la comunidad.',
        description:
            'Los estudiantes crean sus propios proyectos y negocios, y los presentan a la comunidad escolar en nuestras ferias. El trabajo se acompaña desde las clases de Finanzas y Emprendimiento: identificar una necesidad, calcular costos, fijar precios y aprender a presentar su propuesta.',
        highlights: [
            'Idea y planificación',
            'Costos y precios',
            'Presentación al público',
            'Trabajo en equipo',
        ],
        notes: [
            'Vinculadas a Familia y Desarrollo, Finanzas y Emprendimiento.',
            'Abiertas a las familias y a la comunidad escolar.',
        ],
        icon: 'store',
        photo: 'estudiante',
        photoPosition: '60% 40%',
        photoAlt: 'Estudiante de La Colmena trabajando en su proyecto',
    },
    {
        id: 'deporte',
        title: 'Apoyo al deporte',
        tag: 'Deporte',
        tagline: 'Representar al colegio con orgullo',
        summary:
            'Impulsamos la práctica deportiva y acompañamos a quienes compiten por el colegio.',
        description:
            'Impulsamos la práctica deportiva y acompañamos a nuestros estudiantes cuando representan al colegio en competencias. Desde Educación Física se detectan y apoyan los talentos, y se promueven los valores del deporte: constancia, respeto y juego limpio.',
        highlights: [
            'Educación Física',
            'Competencias intercolegiales',
            'Juego limpio',
        ],
        notes: [
            'Acompañamiento del colegio en las competencias.',
            'Participación coordinada con el acudiente y el calendario escolar.',
        ],
        icon: 'sport',
    },
]

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

/* ------------------------------------------------------------------ *
 * Pre-matrícula — formulario en /pre-matricula
 * ------------------------------------------------------------------ */

/**
 * Grados que se pueden marcar en el formulario, agrupados por nivel
 * (los `id` coinciden con LEVELS). Se permite marcar varios para quien
 * inscribe a más de un hijo.
 *
 * PENDIENTE DE CONFIRMAR con el colegio: qué grados abre pre-escolar.
 */
export const ENROLLMENT_GRADES = [
    { level: 'preescolar', grades: ['Pre-kínder', 'Kínder'] },
    { level: 'primaria', grades: ['1.º', '2.º', '3.º', '4.º', '5.º', '6.º'] },
    { level: 'premedia', grades: ['7.º', '8.º', '9.º'] },
    { level: 'bachiller', grades: ['10.º', '11.º', '12.º'] },
]

/** Opciones de «¿Cómo nos conociste?». */
export const ENROLLMENT_SOURCES = [
    'Instagram',
    'Facebook',
    'WhatsApp',
    'Google / búsqueda en internet',
    'Recomendación de un familiar o amigo',
    'Tengo otro hijo en el colegio',
    'Visité el colegio',
    'Otro',
]

/** Qué pasa después de enviar el formulario. */
export const ENROLLMENT_STEPS = [
    {
        title: 'Envía el formulario',
        description:
            'Déjanos tus datos y el grado que te interesa. Toma menos de dos minutos.',
    },
    {
        title: 'Te contactamos',
        description:
            'Secretaría te escribe o te llama para confirmar el cupo y resolver tus dudas.',
    },
    {
        title: 'Agenda una visita',
        description:
            'Conoces las instalaciones y entregas los documentos de admisión.',
    },
    {
        title: 'Matrícula',
        description:
            'Firmas la hoja de inscripción y el contrato escolar, y tu hijo ya es parte de la colmena.',
    },
]
