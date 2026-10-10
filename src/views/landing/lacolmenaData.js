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

/**
 * Reseña histórica, tomada del discurso del 19.º aniversario (16 de
 * mayo de 2025). Las cifras de matrícula y docentes son de ese año.
 */
export const HISTORY = {
    foundedOn: '16 de mayo de 2006',
    founder: 'Magíster Mirta Gisela Batista Sáenz',
    decree: 'Resuelto N.º 9417 de 2006',
    intro: [
        `El ${SCHOOL.name} nació gracias a la gestión de la Magíster Mirta Gisela Batista Sáenz, quien logró su creación mediante el Resuelto N.º 9417 de 2006 y lo dirigió desde sus primeros días.`,
        'Abrimos nuestras puertas con 25 estudiantes de preescolar, primero y segundo grado. Hoy acompañamos a más de 230 estudiantes, con 24 docentes que imparten lenguas, ciencias, tecnología e informática desde Preescolar hasta Media.',
        'Desde el inicio, la escuela ha crecido de la mano de sus profesores, administrativos, estudiantes, familias y de toda la comunidad, que se sienten orgullosos de las generaciones «Colmenitas» y de sus logros.',
    ],
    stats: [
        { value: '25', label: 'estudiantes en 2006' },
        { value: '230+', label: 'estudiantes hoy' },
        { value: '24', label: 'docentes' },
    ],
    /** `kicker` va sobre el título y `tag` en la etiqueta de la tarjeta. */
    milestones: [
        {
            year: 2006,
            title: 'Nace La Colmena',
            kicker: 'Primera celda',
            tag: 'El comienzo',
            description:
                'Se funda el 16 de mayo e inicia clases con 25 estudiantes de preescolar, primero y segundo grado.',
        },
        {
            year: 2020,
            title: 'Educación Básica General',
            kicker: 'La colmena crece',
            tag: 'Crecimiento',
            description:
                'Se amplía la oferta académica para completar la Educación Básica General.',
        },
        {
            year: 2022,
            title: 'Primera promoción de Pre-Media',
            kicker: 'Una nueva generación',
            tag: 'Generaciones',
            description:
                'Se gradúa la primera generación de estudiantes de Pre-Media.',
        },
        {
            year: 2023,
            title: 'Llega la Robótica',
            kicker: 'Nuevas alas',
            tag: 'Innovación',
            description:
                'Se incorpora la asignatura de Robótica en Primaria, Pre-Media y Media.',
        },
        {
            year: 2025,
            title: SCHOOL.name,
            kicker: 'Nuestra identidad',
            tag: 'Nueva etapa',
            description: `El colegio adopta oficialmente el nombre de ${SCHOOL.name}.`,
        },
    ],
    commitments: [
        {
            title: 'Actualización permanente',
            description:
                'En coordinación con el Ministerio de Educación renovamos los planes de estudio del bachillerato para responder a las necesidades de hoy.',
            icon: 'book',
        },
        {
            title: 'Docentes a la vanguardia',
            description:
                'Capacitamos a nuestros educadores en tecnología de punta y metodologías activas, acordes con las exigencias de un mundo globalizado.',
            icon: 'chip',
        },
        {
            title: 'Formación para la vida',
            description:
                'Brindamos a la juventud aguadulceña una formación humanística, científica y tecnológica para la vida, el trabajo y la convivencia pacífica.',
            icon: 'heart',
        },
    ],
    closing:
        'Cada aniversario renovamos nuestra misión y visión, y ratificamos la vocación que nos dio origen: formar ciudadanos de calidad para Aguadulce y para Panamá.',
}

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
        schedule: '8:00\u00a0a.\u00a0m. — 12:00\u00a0m.\u00a0d.',
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
        schedule: '7:30\u00a0a.\u00a0m. — 2:00\u00a0p.\u00a0m.',
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
        schedule: '7:30\u00a0a.\u00a0m. — 2:00\u00a0p.\u00a0m.',
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
        schedule: '7:30\u00a0a.\u00a0m. — 2:00\u00a0p.\u00a0m.',
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
 * PENDIENTE DE CONFIRMAR con el colegio: los detalles de folclore,
 * alemán, emprendimiento y deporte (horarios, niveles) son orientativos.
 */
export const ACTIVITIES = [
    {
        id: 'folclore',
        title: 'Proyección folclórica',
        tag: 'Cultura',
        tagline: 'Nuestras raíces, en movimiento',
        summary:
            'Polleras, montunos y bailes típicos: los estudiantes llevan el folclore panameño a cada acto del colegio.',
        description:
            'En el conjunto folclórico los estudiantes aprenden los bailes típicos de Panamá y los presentan en los actos cívicos, las fiestas patrias y las actividades culturales del colegio. Es una forma de conocer y celebrar nuestras tradiciones mientras se trabaja la coordinación, la expresión y el trabajo en equipo.',
        highlights: [
            'Bailes típicos panameños',
            'Pollera y montuno',
            'Presentaciones en actos cívicos',
            'Trabajo en pareja y en grupo',
        ],
        notes: [
            'Abierto a estudiantes de primaria, pre-media y media.',
            'Ensayos coordinados con el calendario escolar.',
        ],
        icon: 'dance',
        photo: 'folclore',
        photoPosition: '50% 50%',
        photoAlt:
            'Estudiantes de La Colmena bailando folclore panameño con faldas de colores',
    },
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
        photo: 'deporte',
        photoPosition: '50% 32%',
        photoAlt:
            'Estudiantes de La Colmena con el uniforme de béisbol de Coclé',
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
    title: 'Una sede pensada para aprender',
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

/* ------------------------------------------------------------------ *
 * Aviso de privacidad — vista `/privacidad` y casilla de la pre-matrícula
 * Sigue la Ley 81 de 2019 y el Decreto Ejecutivo 285 de 2021. Las notas
 * de dónde viajan los datos y qué falta decidir están en
 * `docs/aviso-de-privacidad.md`.
 *
 * PENDIENTE DE CONFIRMAR con el colegio: el correo para estos temas (hoy
 * el general) y los plazos para borrar los datos.
 * ------------------------------------------------------------------ */

export const PRIVACY = {
    /**
     * Viaja con cada pre-matrícula para saber qué texto aceptó la familia.
     * Si el aviso cambia en algo de fondo, se sube la versión.
     */
    version: 'v2026-10',
    updated: 'octubre de 2026',
    email: SCHOOL.email,
    intro: 'Cuando llenas la pre-matrícula nos confías tus datos y los de tu hijo. Aquí te contamos, sin letra pequeña, qué hacemos con ellos, conforme a la Ley 81 de 2019 de Protección de Datos Personales de Panamá.',
    sections: [
        {
            id: 'responsable',
            title: 'Quién cuida tus datos',
            icon: 'shield',
            points: [
                `El ${SCHOOL.name}, en ${SCHOOL.address}, ${SCHOOL.city}, es el responsable de tus datos.`,
                `Para cualquier tema de privacidad escríbenos a ${SCHOOL.email} o llámanos al ${SCHOOL.phones[0]}.`,
            ],
        },
        {
            id: 'datos',
            title: 'Qué datos pedimos',
            icon: 'card',
            points: [
                'Del estudiante: nombre, apellido, fecha de nacimiento, grado al que aplica y, si quieres, el colegio de donde viene.',
                'Tuyos: nombre, apellido, correo y teléfono.',
                'Si quieres: cómo nos conociste y tus comentarios.',
                'No pedimos datos de salud ni otros datos delicados.',
            ],
        },
        {
            id: 'uso',
            title: 'Para qué los usamos',
            icon: 'target',
            points: [
                'Para contactarte, confirmar el cupo y resolver tus dudas.',
                'Para agendar tu visita al colegio.',
                'Para preparar la matrícula si decides continuar.',
                'No los usamos para publicidad, no los vendemos y no los compartimos con otros colegios ni empresas.',
            ],
        },
        {
            id: 'autorizacion',
            title: 'Tu autorización',
            icon: 'check',
            points: [
                'Al marcar la casilla del formulario nos das permiso, como padre, madre o acudiente del estudiante, para usar estos datos.',
                'Puedes retirar ese permiso cuando quieras: basta con escribirnos.',
            ],
        },
        {
            id: 'donde',
            title: 'Dónde se guardan',
            icon: 'cloud',
            points: [
                'Nuestro sitio web funciona con Netlify, una empresa de Estados Unidos que guarda los formularios y los revisa con un filtro contra el spam.',
                'Cada solicitud también llega por correo a la secretaría del colegio.',
                'Por eso tus datos se guardan fuera de Panamá. Al marcar la casilla también lo aceptas.',
                'Solo el personal que atiende la admisión puede verlos.',
            ],
        },
        {
            id: 'tiempo',
            title: 'Cuánto tiempo los guardamos',
            icon: 'hourglass',
            points: [
                'Solo mientras dura el proceso de matrícula del año al que aplicas.',
                'Si el estudiante no se matricula, los borramos cuando termina ese período.',
                'Si se matricula, pasan a su expediente escolar, que se rige por el contrato y el reglamento del colegio.',
            ],
        },
        {
            id: 'derechos',
            title: 'Tus derechos',
            icon: 'user',
            points: [
                'Puedes pedirnos ver tus datos, corregirlos, dejar de usarlos o recibir una copia. También en nombre del estudiante.',
                'Es gratis. Te respondemos en un máximo de 10 días hábiles, y las correcciones las hacemos en 5.',
                'Si no te respondemos, puedes acudir a la Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI).',
            ],
        },
        {
            id: 'cookies',
            title: 'Cookies y cambios',
            icon: 'cookie',
            points: [
                'Este sitio no usa cookies de seguimiento ni de publicidad.',
                'Si cambiamos este aviso, publicaremos aquí la nueva versión con su fecha.',
            ],
        },
    ],
    /** Cierra la página: lo más importante es que se puede borrar todo. */
    erase: {
        title: 'Puedes pedir que borremos tus datos',
        description:
            'En cualquier momento puedes pedirnos que borremos tus datos y los del estudiante. Escríbenos desde el correo que usaste en el formulario, o llámanos, y los borramos de todos nuestros registros: del formulario y del correo de secretaría. Te avisamos cuando esté hecho.',
    },
}

/* ------------------------------------------------------------------ *
 * Textos de la interfaz — catálogo ES
 * Los componentes los leen con `t('clave')` (ver `language.jsx`). La
 * versión en inglés está en `lacolmenaData.en.js` con las mismas claves;
 * `npm run check:i18n` avisa si falta alguna.
 * ------------------------------------------------------------------ */

export const UI = {
    meta: { locale: 'es_PA' },
    language: { label: 'Idioma' },
    common: {
        motto: `«${SCHOOL.motto}»`,
        crestAlt: `Escudo del ${SCHOOL.name}`,
        startPreEnrollment: 'Iniciar pre-matrícula',
        requestInfo: 'Pedir más información',
        onlinePreEnrollment: 'Pre-matrícula en línea',
        whatsappCta: 'Escribir por WhatsApp',
        backToSite: 'Volver al sitio',
        privacyNotice: 'Aviso de privacidad',
        emailUsAt: 'Escríbenos a',
        orCallUsAt: 'o llámanos al',
    },
    contact: {
        copied: 'Copiado',
        copy: 'Copiar',
        copyValue: (value) => `Copiar ${value}`,
        emailValue: (value) => `Escribir a ${value}`,
        callOrCopy: (value) => `${value} — pulsa para llamar o copiar`,
    },
    apply: {
        kicker: 'Únete a la colmena',
        label: 'Aplicar ahora',
    },
    home: {
        seoDescription: `Colegio bilingüe en ${SCHOOL.city}, ${SCHOOL.province}. Pre-escolar, primaria, pre-media y bachiller en ciencias. Pre-matrícula en línea y portal para acudientes.`,
        whatsappMessage: `Hola, quisiera información sobre la matrícula en el ${SCHOOL.name}.`,
        openMenu: 'Abrir menú',
        nav: {
            about: 'Nosotros',
            levels: 'Niveles',
            schoolLife: 'Vida escolar',
            admissions: 'Admisión',
            contact: 'Contacto',
        },
        hero: {
            badge: `Matrícula abierta ${SCHOOL.enrollmentYear}`,
            intro: `Colegio bilingüe en ${SCHOOL.city}, ${SCHOOL.province}. Veinte años formando estudiantes con valores, criterio y dominio del inglés — desde pre-escolar hasta bachillerato.`,
            whatsapp: 'Escríbenos',
            founded: `Fundado en ${SCHOOL.foundedYear} · ${SCHOOL.city}, ${SCHOOL.province}`,
        },
        stats: [
            { value: '20', label: 'años de experiencia' },
            { value: '4', label: 'niveles académicos' },
            { value: '100%', label: 'programa bilingüe' },
            { value: '2', label: 'idiomas en el aula' },
        ],
        about: {
            eyebrow: 'Sobre nosotros',
            title: 'Una educación con valores, inteligente y creativa',
            checks: [
                'Formación bilingüe',
                'Ambiente de aprendizaje propicio',
                'Acompañamiento personalizado',
                'Plan de estudios completo',
            ],
            historyLink: 'Conocer nuestra historia',
        },
        benefits: {
            eyebrow: 'Por qué La Colmena',
            title: 'Lo que distingue a nuestros estudiantes',
        },
        campus: {
            eyebrow: 'Nuestra sede',
            directions: 'Cómo llegar',
        },
        levels: {
            eyebrow: 'Oferta académica',
            title: 'Cuatro niveles, un mismo estándar',
            description:
                'Cada nivel tiene su horario y su plan de materias. Toca un nivel para ver el detalle completo.',
            showSubjects: 'Ver materias',
            hideSubjects: 'Ocultar materias',
            subjectCount: (count) => `Materias (${count})`,
        },
        schoolLife: {
            eyebrow: 'Vida escolar',
            title: 'Aprender también pasa fuera del aula',
            description:
                'Folclore, banda de guerra, idiomas, emprendimiento y deporte: actividades que forman en disciplina, creatividad y trabajo en equipo.',
            learnMore: 'Ver más',
            allActivities: 'Conocer toda la vida escolar',
        },
        platform: {
            eyebrow: 'Plataforma',
            cta: 'Entrar al portal',
        },
        admissions: {
            eyebrow: 'Admisión',
            title: 'Matricularse es sencillo',
            description:
                'Reúne los documentos, envía tu solicitud en línea y nuestra secretaría te contacta.',
            requirements: 'Requisitos',
            regulationsLink: 'Conocer el reglamento del colegio',
            formLink: 'Llenar formulario de pre-matrícula',
            paymentTitle: 'Formas de pago aceptadas',
            paymentDescription:
                'Paga como te quede más cómodo. Cada pago queda registrado en el portal del acudiente.',
        },
        contact: {
            eyebrow: 'Contáctanos',
            title: 'Estamos para atenderte',
            description:
                'Toca cualquier dato: desde el celular llama, abre el correo o Instagram; desde la computadora copia el teléfono al portapapeles.',
            address: 'Dirección',
            phones: 'Teléfonos',
            email: 'Correo',
            hours: 'Horario de atención',
            hoursValue: 'Lunes a viernes · 7:30 a. m. — 2:00 p. m.',
        },
        footer: {
            schoolYear: `Año lectivo ${SCHOOL.schoolYear}`,
            linksLabel: 'Enlaces del sitio',
            history: 'Nuestra historia',
            regulations: 'Reglamento',
            privacy: 'Privacidad',
            portal: 'Portal del acudiente',
        },
    },
    video: {
        progress: 'Avance del video',
        position: (current, total) => `${current} de ${total}`,
        play: 'Reproducir video',
        pause: 'Pausar video',
        unmute: 'Activar sonido',
        mute: 'Silenciar',
        volume: 'Volumen',
        playLabel: `Reproducir video: ${SCHOOL.name}, 20 años`,
        title: '20 años sembrando el néctar de la sabiduría',
        meta: 'Video · 2:22',
    },
    history: {
        seoTitle: `Nuestra historia — ${SCHOOL.name}`,
        seoDescription: `Desde ${SCHOOL.foundedYear}, el ${SCHOOL.name} forma a la niñez y juventud de ${SCHOOL.city}, ${SCHOOL.province}. Conoce sus orígenes y sus hitos.`,
        eyebrow: 'Nuestra historia',
        title: `Desde ${SCHOOL.foundedYear}, sembrando el néctar de la sabiduría`,
        intro: `Lo que empezó con 25 estudiantes en ${SCHOOL.city} es hoy una comunidad educativa que acompaña a sus «Colmenitas» desde Preescolar hasta Media.`,
        howWeBegan: 'Cómo empezamos',
        drivesUs: 'Lo que nos mueve hoy',
    },
    timeline: {
        eyebrow: 'Momentos que nos definen',
        title: 'El vuelo que nos trajo hasta aquí',
        // La frase va partida para poner «celda a celda» en negrita
        introBefore: 'Una colmena se construye',
        introStrong: 'celda a celda',
        introAfter:
            ', y nuestra historia también. Cada generación ha dejado algo que nos permite seguir creciendo juntos.',
        today: 'Hoy',
        onwardEyebrow: 'Y el vuelo continúa',
        onwardTitle: 'Una celda se convierte en otra.',
        onwardText:
            'Lo que comenzó con 25 estudiantes hoy es una comunidad que sigue construyendo futuro. Nuestra historia todavía tiene muchas celdas por llenar.',
    },
    schoolLife: {
        seoTitle: `Vida escolar — ${SCHOOL.name}`,
        seoDescription: `Folclore, banda de guerra, clases de alemán, ferias de emprendimiento y deporte en el ${SCHOOL.name} de ${SCHOOL.city}, ${SCHOOL.province}.`,
        eyebrow: 'Vida escolar',
        title: 'Aprender también pasa fuera del aula',
        intro: 'Actividades que forman en disciplina, creatividad y trabajo en equipo, y que dan a cada estudiante un espacio para descubrir sus talentos.',
    },
    regulations: {
        seoTitle: `Reglamento interno — ${SCHOOL.name}`,
        seoDescription: `Normas de convivencia, asistencia, uniforme y seguridad del ${SCHOOL.name} en ${SCHOOL.city}, ${SCHOOL.province}.`,
        eyebrow: 'Reglamento interno',
        title: 'Cómo convivimos en La Colmena',
        disclaimer:
            'Este resumen es orientativo. El reglamento interno completo y el contrato de servicios educativos se entregan y se firman en secretaría al momento de la matrícula, y son los documentos que rigen.',
        questions: '¿Alguna duda? Escríbenos a',
        requirementsLink: 'Ver requisitos de admisión',
    },
    privacy: {
        seoTitle: `Aviso de privacidad — ${SCHOOL.name}`,
        seoDescription: `Qué datos pide la pre-matrícula del ${SCHOOL.name}, para qué los usa, dónde se guardan y cómo pedir que se borren.`,
        eyebrow: 'Aviso de privacidad',
        title: 'Cómo cuidamos tus datos',
        updated: `Actualizado en ${PRIVACY.updated} · Versión ${PRIVACY.version}`,
        emailSubject: 'Protección de datos',
        cta: 'Ir a la pre-matrícula',
    },
    preEnrollment: {
        seoTitle: `Pre-matrícula ${SCHOOL.enrollmentYear} — ${SCHOOL.name}`,
        seoDescription: `Formulario de pre-matrícula del ${SCHOOL.name} en ${SCHOOL.city}, ${SCHOOL.province}. Pre-escolar, primaria, pre-media y bachiller en ciencias.`,
        eyebrow: `Pre-matrícula ${SCHOOL.enrollmentYear}`,
        title: 'Únete a La Colmena',
        intro: 'Déjanos tus datos y el grado que te interesa. Secretaría te contacta para confirmar el cupo, agendar una visita y explicarte los pasos de la matrícula.',
        processTitle: 'Nuestro proceso de admisión',
        documentsTitle: 'Documentos para la matrícula',
        documentsNote:
            'No hace falta enviarlos ahora: se entregan en secretaría.',
        talkToUs: '¿Prefieres hablar con nosotros?',
        form: {
            optional: '(opcional)',
            botField: 'No llenes este campo:',
            studentTitle: 'Datos del estudiante',
            requiredNote:
                'Todos los campos son obligatorios salvo los marcados como opcionales.',
            studentFirstName: 'Nombre',
            studentLastName: 'Apellido',
            birthDate: 'Fecha de nacimiento',
            birthDatePlaceholder: 'dd/mm/aaaa',
            // Nombres accesibles de las flechas del calendario
            calendar: {
                previousMonth: 'Mes anterior',
                nextMonth: 'Mes siguiente',
                previousYear: 'Año anterior',
                nextYear: 'Año siguiente',
                previousDecade: 'Década anterior',
                nextDecade: 'Década siguiente',
            },
            grade: 'Grado al que aplica',
            gradePlaceholder: 'Selecciona el grado',
            noResults: 'Sin resultados',
            previousSchool: 'Colegio de procedencia',
            siblingsNote:
                'Si inscribes a más de un hijo, cuéntanos de los demás en comentarios.',
            guardianTitle: 'Datos del acudiente',
            guardianFirstName: 'Nombre del acudiente',
            guardianLastName: 'Apellido del acudiente',
            email: 'Correo electrónico',
            emailPlaceholder: 'nombre@correo.com',
            phone: 'Teléfono o WhatsApp',
            source: '¿Cómo nos conociste?',
            sourcePlaceholder: 'Selecciona una opción',
            comments: 'Comentarios o preguntas',
            commentsPlaceholder:
                'Por ejemplo: otros hijos que quieras inscribir o cualquier duda.',
            healthNote:
                'No incluyas información de salud. Si el estudiante tiene alguna necesidad especial, lo conversamos en la visita.',
            consent: `Soy el padre, la madre o el acudiente del estudiante y autorizo al ${SCHOOL.name} a usar estos datos solo para la pre-matrícula. Sé que se guardan fuera de Panamá y que puedo pedir que se borren cuando quiera.`,
            privacyLink: 'Leer el aviso de privacidad',
            failed: 'No pudimos enviar el formulario. Inténtalo de nuevo o escríbenos por',
            failedWhatsappMessage:
                'Hola, quisiera información sobre la pre-matrícula.',
            sending: 'Enviando…',
            submit: 'Enviar pre-matrícula',
            disclaimer:
                'La pre-matrícula no reserva el cupo: la matrícula se formaliza en secretaría con los documentos y el contrato firmado.',
        },
        errors: {
            studentFirstName: 'Escribe el nombre del estudiante.',
            studentLastName: 'Escribe el apellido del estudiante.',
            birthDate: 'Indica la fecha de nacimiento.',
            grade: 'Marca el grado al que aplica.',
            guardianFirstName: 'Escribe tu nombre.',
            guardianLastName: 'Escribe tu apellido.',
            emailMissing: 'Escribe tu correo.',
            emailInvalid: 'Revisa el correo: parece incompleto.',
            phone: 'Escribe un teléfono de al menos 7 dígitos.',
            consent: 'Para enviar la solicitud necesitamos tu autorización.',
        },
        sent: {
            thanks: (name) => `¡Gracias, ${name}!`,
            received: (student) =>
                `Recibimos la solicitud de pre-matrícula de ${student}. Secretaría te contactará en los próximos días hábiles para confirmar el cupo y los pasos siguientes.`,
            whatsappMessage: (name, student) =>
                `Hola, soy ${name} y acabo de enviar la pre-matrícula en línea de ${student}.`,
        },
    },
}
