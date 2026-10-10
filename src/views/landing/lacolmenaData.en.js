/**
 * Catálogo en inglés: la versión de `lacolmenaData.js`, con las mismas
 * exportaciones, en el mismo orden y con los mismos `id`, `icon` y fotos,
 * más los textos de la interfaz (`UI`) al final. Si se cambia algo en
 * español, hay que cambiarlo aquí también; `npm run check:i18n` lo revisa.
 *
 * Los datos de contacto y el nombre del colegio no se traducen: salen
 * del archivo en español. El texto en inglés va sin tildes ni eñes.
 */

import {
    SCHOOL as SCHOOL_ES,
    ENROLLMENT_GRADES,
    ENROLLMENT_SOURCES,
    PRIVACY as PRIVACY_ES,
} from './lacolmenaData'

/** En inglés no se usan tildes: «Coclé» → «Cocle», «Vía» → «Via». */
export const SCHOOL = {
    ...SCHOOL_ES,
    motto: 'The Nectar of Wisdom',
    province: 'Cocle',
    address: 'Rodolfo Chiari Avenue, Via El Puerto',
    addressLine2: 'Aguadulce — Cocle, Panama',
}

export const ABOUT = `${SCHOOL.name} prepares the next generations through an education grounded in values, academic excellence, creativity and character. With more than 20 years of experience, we offer a modern, well-rounded learning environment that drives our students' personal and academic growth.`

export const ABOUT_HIGHLIGHTS = [
    SCHOOL.name,
    'more than 20 years of experience',
]

export const HISTORY = {
    foundedOn: 'May 16, 2006',
    founder: 'Mirta Gisela Batista Saenz',
    decree: 'Resolution No. 9417 of 2006',
    intro: [
        `${SCHOOL.name} was born thanks to the efforts of Mirta Gisela Batista Saenz, who secured its founding through Resolution No. 9417 of 2006 and led the school from its very first days.`,
        'We opened our doors with 25 students in preschool, first and second grade. Today we serve more than 230 students, with 24 teachers covering languages, sciences, technology and computing from Preschool through High School.',
        'From the start, the school has grown hand in hand with its teachers, staff, students, families and the whole community, all proud of the “Colmenitas” generations and their achievements.',
    ],
    stats: [
        { value: '25', label: 'students in 2006' },
        { value: '230+', label: 'students today' },
        { value: '24', label: 'teachers' },
    ],
    milestones: [
        {
            year: 2006,
            title: 'La Colmena is born',
            kicker: 'The first cell',
            tag: 'The beginning',
            description:
                'Founded on May 16, the school opens with 25 students in preschool, first and second grade.',
        },
        {
            year: 2020,
            title: 'General Basic Education',
            kicker: 'The hive grows',
            tag: 'Growth',
            description:
                'The academic program expands to complete General Basic Education.',
        },
        {
            year: 2022,
            title: 'First Middle School graduates',
            kicker: 'A new generation',
            tag: 'Generations',
            description:
                'Our first class of Middle School (Pre-Media) students graduates.',
        },
        {
            year: 2023,
            title: 'Robotics arrives',
            kicker: 'New wings',
            tag: 'Innovation',
            description:
                'Robotics joins the curriculum in Primary, Middle and High School.',
        },
        {
            year: 2025,
            title: SCHOOL.name,
            kicker: 'Our identity',
            tag: 'A new chapter',
            description: `The school officially adopts the name ${SCHOOL.name}.`,
        },
    ],
    commitments: [
        {
            title: 'Always up to date',
            description:
                'Together with the Ministry of Education, we renew our high school curriculum to meet the needs of today.',
            icon: 'book',
        },
        {
            title: 'Teachers at the forefront',
            description:
                'We train our teachers in cutting-edge technology and active learning methods, in step with the demands of a globalized world.',
            icon: 'chip',
        },
        {
            title: 'An education for life',
            description:
                'We give the young people of Aguadulce a humanistic, scientific and technological education for life, work and peaceful coexistence.',
            icon: 'heart',
        },
    ],
    closing:
        'With every anniversary we renew our mission and vision, and reaffirm the calling that brought us into being: to form outstanding citizens for Aguadulce and for Panama.',
}

export const BENEFITS = [
    {
        title: 'Academic excellence',
        description: 'A demanding curriculum and close support at every level.',
        icon: 'award',
    },
    {
        title: 'Values-based education',
        description:
            'Education with character, built on ethics, respect and responsibility.',
        icon: 'heart',
    },
    {
        title: 'Leadership in English',
        description:
            'Bilingual teaching from preschool, with subjects taught in English.',
        icon: 'globe',
    },
    {
        title: 'Well-rounded growth',
        description: 'Sports, arts and culture as part of school life.',
        icon: 'sparkles',
    },
    {
        title: 'Technology and innovation',
        description:
            'Robotics and computing built into learning from primary school.',
        icon: 'chip',
    },
    {
        title: 'A proven track record',
        description:
            'Twenty years educating students in Aguadulce, in our own facilities.',
        icon: 'school',
    },
]

/**
 * Las materias que en español se dictan en los dos idiomas (Matemática y
 * Mathematics) llevan el idioma entre paréntesis para no repetirse.
 */
export const LEVELS = [
    {
        id: 'preescolar',
        name: 'Preschool',
        tagline: 'First steps, in two languages',
        schedule: '8:00 a.m. – 12:00 noon',
        subjects: [
            'Spanish',
            'Math (in Spanish)',
            'Natural Environment',
            'Social Environment',
            'Ethics and Values',
            'Physical Education',
            'Artistic Expression',
            'Oral Language',
            'Math (in English)',
            'Social Science',
            'Science',
        ],
    },
    {
        id: 'primaria',
        name: 'Primary School',
        tagline: 'Solid foundations and critical thinking',
        schedule: '7:30 a.m. – 2:00 p.m.',
        subjects: [
            'Spanish',
            'Math (in Spanish)',
            'Natural Sciences',
            'Social Studies',
            'Ethics and Values',
            'Physical Education',
            'Artistic Expression',
            'Robotics / Computing',
            'Grammar',
            'Math (in English)',
            'Reading & Writing',
            'Listening & Speaking',
            'Science',
            'Family and Development / Finance',
            'Folklore',
        ],
    },
    {
        id: 'premedia',
        name: 'Middle School',
        tagline: 'Independence, method and projects',
        schedule: '7:30 a.m. – 2:00 p.m.',
        subjects: [
            'Spanish',
            'Math',
            'Natural Sciences',
            'History',
            'Geography',
            'Civics',
            'Artistic Expression',
            'Grammar',
            'Science',
            'Listening and Speaking',
            'Reading and Writing',
            'Physical Education',
            'Computing / Robotics',
            'Family and Development / Entrepreneurship',
        ],
    },
    {
        id: 'bachiller',
        name: 'High School, Science Track',
        tagline: 'Real preparation for university',
        schedule: '7:30 a.m. – 2:00 p.m.',
        subjects: [
            'Spanish',
            'Physics',
            'Math',
            'Chemistry',
            'English',
            'History of Panama',
            'Biology',
            'Philosophy',
            'Project Evaluation',
            'Civics',
            'Finance / Entrepreneurship',
            'Computing / Robotics, 10th and 11th',
            'Physical Education, 10th and 11th',
        ],
    },
]

export const REQUIREMENTS = [
    "Copy of the student's ID card (cedula juvenil), front and back.",
    "Copy of the parent or guardian's ID card.",
    'Copy of the report card or transfer record, if coming from another school.',
    'Sign the enrollment form and school contract.',
    'Copy of health records.',
]

/* ------------------------------------------------------------------ *
 * Vida escolar
 * ------------------------------------------------------------------ */

export const ACTIVITIES = [
    {
        id: 'folclore',
        title: 'Folklore',
        tag: 'Culture',
        tagline: 'Our roots, in motion',
        summary:
            'Polleras, montunos and traditional dances: our students bring Panamanian folklore to every school event.',
        description:
            "In the folklore group, students learn Panama's traditional dances and perform them at civic ceremonies, national holidays and the school's cultural events. It's a way to discover and celebrate our traditions while building coordination, self-expression and teamwork.",
        highlights: [
            'Traditional Panamanian dances',
            'Pollera and montuno',
            'Performances at civic events',
            'Partner and group work',
        ],
        notes: [
            'Open to primary, middle and high school students.',
            'Rehearsals scheduled around the school calendar.',
        ],
        icon: 'dance',
        photo: 'folclore',
        photoPosition: '50% 50%',
        photoAlt:
            'La Colmena students performing Panamanian folklore in colorful skirts',
    },
    {
        id: 'banda',
        title: 'Marching band',
        tag: 'Tradition',
        tagline: 'Discipline you can hear',
        summary:
            "The school's signature at parades and civic events: rhythm, marching and teamwork.",
        description:
            "The marching band is the school's signature at parades and civic ceremonies. Its members learn rhythm, marching and teamwork, and represent La Colmena on national holidays and at community events in Aguadulce.",
        highlights: [
            'Drums, snare drums and bass drums',
            'Bugles and trumpets',
            'Baton twirlers and flag bearers',
            'Color guard',
        ],
        notes: [
            'Open to primary, middle and high school students.',
            'Rehearsals outside class hours, scheduled around the school calendar.',
            'Participation is voluntary and is recorded in the parent portal.',
        ],
        icon: 'music',
    },
    {
        id: 'aleman',
        title: 'German classes',
        tag: 'Languages',
        tagline: 'A third language to open more doors',
        summary:
            'On top of English, students can add a third language outside regular class hours.',
        description:
            'On top of English, students can add a third language with German classes outside regular hours. Classes combine conversation, everyday vocabulary and the culture of German-speaking countries, at a pace designed for complete beginners.',
        highlights: [
            'Conversation',
            'Everyday vocabulary',
            'Reading and writing',
            'Culture',
        ],
        notes: [
            'Taught outside regular class hours.',
            'Groups organized by level and age.',
            'Ask the school office about schedules and openings.',
        ],
        icon: 'language',
    },
    {
        id: 'emprendimiento',
        title: 'Entrepreneurship fairs',
        tag: 'Projects',
        tagline: 'From idea to first customer',
        summary:
            'Students create their own projects and businesses and present them to the community.',
        description:
            'Students create their own projects and businesses and present them to the school community at our fairs. The work is supported by our Finance and Entrepreneurship classes: spotting a need, working out costs, setting prices and learning to pitch their idea.',
        highlights: [
            'Idea and planning',
            'Costs and pricing',
            'Presenting to the public',
            'Teamwork',
        ],
        notes: [
            'Linked to Family and Development, Finance and Entrepreneurship.',
            'Open to families and the school community.',
        ],
        icon: 'store',
        photo: 'estudiante',
        photoPosition: '60% 40%',
        photoAlt: 'La Colmena student working on a project',
    },
    {
        id: 'deporte',
        title: 'Support for sports',
        tag: 'Sports',
        tagline: 'Representing the school with pride',
        summary:
            'We encourage sports and support the students who compete for the school.',
        description:
            'We encourage sports and stand behind our students when they represent the school in competitions. Physical Education helps spot and support talent, and promotes the values of sport: perseverance, respect and fair play.',
        highlights: [
            'Physical Education',
            'Inter-school competitions',
            'Fair play',
        ],
        notes: [
            'The school accompanies students at competitions.',
            'Participation is coordinated with the parent or guardian and the school calendar.',
        ],
        icon: 'sport',
        photo: 'deporte',
        photoPosition: '50% 32%',
        photoAlt: 'La Colmena students in Cocle baseball uniforms',
    },
]

/* ------------------------------------------------------------------ *
 * Plataforma digital
 * ------------------------------------------------------------------ */

export const PLATFORM = {
    title: 'Parent and student portal',
    description:
        "Every family gets access to the school portal. From a phone or computer, parents can follow their child's schedule, grades and attendance, and receive announcements from the school administration.",
}

/* ------------------------------------------------------------------ *
 * Métodos de pago
 * ------------------------------------------------------------------ */

export const PAYMENT_METHODS = [
    {
        title: 'Cash at the school office',
        description: 'Monday to Friday, during office hours.',
        icon: 'cash',
    },
    {
        title: 'Yappy',
        description:
            'Instant payment from your phone through the Yappy directory.',
        icon: 'phone',
    },
    {
        title: 'ACH / bank transfer',
        description: "To the school's account; just send us the receipt.",
        icon: 'bank',
    },
    {
        title: 'Credit or debit card',
        description: 'Visa and Mastercard at the school office.',
        icon: 'card',
    },
]

/* ------------------------------------------------------------------ *
 * Nuestra sede
 * ------------------------------------------------------------------ */

export const CAMPUS = {
    title: 'A location designed for learning',
    description:
        'Spacious classrooms, recreation areas and spaces for sports, art and robotics, in the heart of Aguadulce.',
    highlights: [
        'Spacious, bright classrooms',
        'Recreation areas',
        'Robotics lab',
        'Spaces for art and culture',
    ],
    mapsQuery: 'Colegio Bilingüe La Colmena, Aguadulce, Coclé, Panamá',
}

/* ------------------------------------------------------------------ *
 * Reglamento interno — vista `/reglamento`
 * ------------------------------------------------------------------ */

export const REGULATIONS_INTRO =
    'These are the rules that guide daily life at school. We share them so families know what we expect from our students and what they can expect from us. On enrollment, every parent or guardian receives the full school regulations and the educational services contract, which are the governing documents.'

export const REGULATIONS = [
    {
        id: 'asistencia',
        title: 'Attendance and punctuality',
        icon: 'clock',
        points: [
            'Students must attend class every day of the school calendar and arrive before the school day begins.',
            'Absences must be excused through the administration; medical absences require the corresponding certificate.',
            'After an absence, students have a few days to catch up on pending assignments.',
            "Consistent attendance is required to be eligible for each term's assessments.",
        ],
    },
    {
        id: 'uniforme',
        title: 'Uniform and personal appearance',
        icon: 'shirt',
        points: [
            'The regular and P.E. uniforms are worn complete and in good condition, on the days each one is required.',
            "Parents may buy the uniform wherever they prefer, as long as it follows the school's design and colors.",
            'A neat, simple appearance is expected: no makeup, nail polish, hair dye or flashy accessories.',
            'Each student is responsible for their own supplies and materials; we recommend labeling them with their name.',
        ],
    },
    {
        id: 'convivencia',
        title: 'Conduct and discipline',
        icon: 'handshake',
        points: [
            'Respect among students, teachers and staff is the basic rule of school life.',
            'Physical or verbal aggression is not tolerated, on or off school grounds.',
            'Caring for furniture and facilities is the responsibility of the whole school community.',
            'Misconduct is handled progressively, with the involvement of the parent or guardian and in line with the rules of the Ministry of Education (MEDUCA).',
        ],
    },
    {
        id: 'evaluacion',
        title: 'Assessment and promotion',
        icon: 'notebook',
        points: [
            'The school year is divided into three terms, with exams on the dates set in the school calendar.',
            'Students are promoted when they pass the full curriculum for the year.',
            'Grades are shared with parents at the end of each term and are available on the portal.',
            'Any concern about a grade is raised with the teacher first and, if needed, with the administration.',
        ],
    },
    {
        id: 'dispositivos',
        title: 'Devices and social media',
        icon: 'phone',
        points: [
            'Cell phone use is regulated on school grounds and is not allowed during class time.',
            'Recording or taking photos inside the school without permission is not allowed.',
            'Social media posts that harm the image or integrity of a student or staff member are treated as a disciplinary offense.',
            'We recommend not bringing electronic devices or valuables to school.',
        ],
    },
    {
        id: 'seguridad',
        title: 'Arrival, dismissal and safety',
        icon: 'shield',
        points: [
            'Students are released only to people the parent or guardian has authorized in writing.',
            'The list of authorized people is kept up to date in the parent portal.',
            "The school's responsibility for the student begins and ends with the school day.",
            'All visits to the school require prior approval from the administration.',
        ],
    },
    {
        id: 'comunicacion',
        title: 'Communication with families',
        icon: 'chat',
        points: [
            'Official announcements are sent through the portal and arrive as phone notifications.',
            'Parents agree to attend the meetings and appointments the school calls.',
            'Concerns are raised first with the subject teacher and then with the administration.',
            "Each student's academic and personal performance is handled confidentially.",
        ],
    },
    {
        id: 'actividades',
        title: 'Activities and field trips',
        icon: 'compass',
        points: [
            'Trips and activities organized by the school are part of the learning experience and require signed permission from the parent or guardian.',
            'Field trips are processed with MEDUCA well in advance.',
            'Participation in the band and other activities is voluntary and coordinated with the school calendar.',
        ],
    },
]

/* ------------------------------------------------------------------ *
 * Pre-matrícula — formulario en /pre-matricula
 * ------------------------------------------------------------------ */

/**
 * Grados y fuentes se envían en español aunque el formulario esté en
 * inglés, para que secretaría reciba siempre los mismos valores: aquí
 * solo cambia lo que se lee en pantalla.
 */
export { ENROLLMENT_GRADES, ENROLLMENT_SOURCES }

export const ENROLLMENT_GRADE_LABELS = {
    'Pre-kínder': 'Pre-K',
    Kínder: 'Kindergarten',
    '1.º': '1st grade',
    '2.º': '2nd grade',
    '3.º': '3rd grade',
    '4.º': '4th grade',
    '5.º': '5th grade',
    '6.º': '6th grade',
    '7.º': '7th grade',
    '8.º': '8th grade',
    '9.º': '9th grade',
    '10.º': '10th grade',
    '11.º': '11th grade',
    '12.º': '12th grade',
}

export const ENROLLMENT_SOURCE_LABELS = {
    'Google / búsqueda en internet': 'Google / web search',
    'Recomendación de un familiar o amigo': 'Recommended by family or a friend',
    'Tengo otro hijo en el colegio': 'I already have a child at the school',
    'Visité el colegio': 'I visited the school',
    Otro: 'Other',
}

export const ENROLLMENT_STEPS = [
    {
        title: 'Send the form',
        description:
            "Share your details and the grade you're interested in. It takes less than two minutes.",
    },
    {
        title: "We'll be in touch",
        description:
            'The school office will email or call you to confirm availability and answer your questions.',
    },
    {
        title: 'Schedule a visit',
        description: 'Tour our facilities and hand in the admission documents.',
    },
    {
        title: 'Enrollment',
        description:
            'Sign the enrollment form and the school contract, and your child is officially part of the hive.',
    },
]

/* ------------------------------------------------------------------ *
 * Aviso de privacidad — vista `/privacidad`
 * La versión que rige es la española; esta es una traducción.
 * ------------------------------------------------------------------ */

export const PRIVACY = {
    version: PRIVACY_ES.version,
    updated: 'October 2026',
    email: PRIVACY_ES.email,
    intro: "When you fill out the pre-enrollment form, you trust us with your information and your child's. Here we explain, with no fine print, what we do with it, in accordance with Panama's Law 81 of 2019 on Personal Data Protection.",
    translationNote:
        'This English version is provided for your convenience. If there is any difference, the Spanish version prevails.',
    sections: [
        {
            id: 'responsable',
            title: 'Who looks after your data',
            icon: 'shield',
            points: [
                `${SCHOOL.name}, located at ${SCHOOL.address}, ${SCHOOL.city}, is responsible for your data.`,
                `For any privacy matter, email us at ${SCHOOL.email} or call ${SCHOOL.phones[0]}.`,
            ],
        },
        {
            id: 'datos',
            title: 'What data we ask for',
            icon: 'card',
            points: [
                "About the student: first name, last name, date of birth, the grade they're applying to and, optionally, their previous school.",
                'About you: first name, last name, email and phone number.',
                'Optionally: how you heard about us and any comments.',
                'We do not ask for health information or any other sensitive data.',
            ],
        },
        {
            id: 'uso',
            title: 'What we use it for',
            icon: 'target',
            points: [
                'To contact you, confirm availability and answer your questions.',
                'To schedule your visit to the school.',
                'To prepare the enrollment if you decide to continue.',
                "We don't use it for advertising, we don't sell it and we don't share it with other schools or companies.",
            ],
        },
        {
            id: 'autorizacion',
            title: 'Your consent',
            icon: 'check',
            points: [
                "By checking the box on the form, you give us permission, as the student's parent or guardian, to use this data.",
                'You can withdraw that permission at any time: just write to us.',
            ],
        },
        {
            id: 'donde',
            title: 'Where it is stored',
            icon: 'cloud',
            points: [
                'Our website runs on Netlify, a U.S. company that stores the forms and screens them with a spam filter.',
                'Each submission also reaches the school office by email.',
                'This means your data is stored outside Panama. By checking the box, you also agree to this.',
                'Only the staff who handle admissions can see it.',
            ],
        },
        {
            id: 'tiempo',
            title: 'How long we keep it',
            icon: 'hourglass',
            points: [
                "Only for the enrollment process of the year you're applying for.",
                "If the student doesn't enroll, we delete it when that period ends.",
                "If the student enrolls, it becomes part of their school record, which is governed by the school's contract and regulations.",
            ],
        },
        {
            id: 'derechos',
            title: 'Your rights',
            icon: 'user',
            points: [
                'You can ask to see your data, correct it, have us stop using it or receive a copy, also on behalf of the student.',
                "It's free. We reply within 10 business days at most, and make corrections within 5.",
                "If we don't reply, you can contact Panama's National Authority for Transparency and Access to Information (ANTAI).",
            ],
        },
        {
            id: 'cookies',
            title: 'Cookies and changes',
            icon: 'cookie',
            points: [
                'This site does not use tracking or advertising cookies.',
                'If we change this notice, we will post the new version here with its date.',
            ],
        },
    ],
    erase: {
        title: 'You can ask us to delete your data',
        description:
            "At any time you can ask us to delete your data and the student's. Write to us from the email you used on the form, or call us, and we'll delete it from all our records: the form and the school office's email. We'll let you know when it's done.",
    },
}

/* ------------------------------------------------------------------ *
 * Textos de la interfaz — catálogo EN, con las mismas claves que el
 * `UI` de `lacolmenaData.js`.
 * ------------------------------------------------------------------ */

export const UI = {
    meta: { locale: 'en_US' },
    language: { label: 'Language' },
    common: {
        motto: `“${SCHOOL.motto}”`,
        crestAlt: `${SCHOOL.name} crest`,
        startPreEnrollment: 'Start pre-enrollment',
        requestInfo: 'Request more information',
        onlinePreEnrollment: 'Online pre-enrollment',
        whatsappCta: 'Message us on WhatsApp',
        backToSite: 'Back to site',
        privacyNotice: 'Privacy notice',
        copyright: `© ${new Date().getFullYear()} ${SCHOOL.name}. All rights reserved.`,
        developedBy: 'Developed by',
        emailUsAt: 'Email us at',
        orCallUsAt: 'or call us at',
    },
    contact: {
        copied: 'Copied',
        copy: 'Copy',
        copyValue: (value) => `Copy ${value}`,
        emailValue: (value) => `Email ${value}`,
        callOrCopy: (value) => `${value} — click to call or copy`,
    },
    apply: {
        kicker: 'Join the hive',
        label: 'Apply now',
    },
    home: {
        seoDescription: `Bilingual school in ${SCHOOL.city}, ${SCHOOL.province}, Panama. Preschool, primary, middle school and high school (science track). Online pre-enrollment and parent portal.`,
        whatsappMessage: `Hello, I would like information about enrollment at ${SCHOOL.name}.`,
        openMenu: 'Open menu',
        nav: {
            about: 'About',
            levels: 'Academics',
            schoolLife: 'School life',
            admissions: 'Admissions',
            contact: 'Contact',
        },
        hero: {
            badge: `Now enrolling for ${SCHOOL.enrollmentYear}`,
            intro: `Bilingual school in ${SCHOOL.city}, ${SCHOOL.province}. Twenty years educating students with values, sound judgment and a strong command of English — from preschool through high school.`,
            whatsapp: 'Message us',
            founded: `Founded in ${SCHOOL.foundedYear} · ${SCHOOL.city}, ${SCHOOL.province}`,
        },
        stats: [
            { value: '20', label: 'years of experience' },
            { value: '4', label: 'academic levels' },
            { value: '100%', label: 'bilingual program' },
            { value: '2', label: 'languages in the classroom' },
        ],
        about: {
            eyebrow: 'About us',
            title: 'A values-based, smart and creative education',
            checks: [
                'Bilingual education',
                'A supportive learning environment',
                'Personalized support',
                'A complete curriculum',
            ],
            historyLink: 'Discover our story',
        },
        benefits: {
            eyebrow: 'Why La Colmena',
            title: 'What sets our students apart',
        },
        campus: {
            eyebrow: 'Our location',
            directions: 'Get directions',
        },
        levels: {
            eyebrow: 'Academics',
            title: 'Four levels, one standard',
            description:
                'Each level has its own schedule and subjects. Tap a level to see the full details.',
            showSubjects: 'View subjects',
            hideSubjects: 'Hide subjects',
            subjectCount: (count) => `Subjects (${count})`,
        },
        schoolLife: {
            eyebrow: 'School life',
            title: 'Learning also happens outside the classroom',
            description:
                'Folklore, marching band, languages, entrepreneurship and sports: activities that build discipline, creativity and teamwork.',
            learnMore: 'Learn more',
            allActivities: 'Explore all of school life',
        },
        platform: {
            eyebrow: 'Platform',
            cta: 'Go to the portal',
        },
        admissions: {
            eyebrow: 'Admissions',
            title: 'Enrolling is simple',
            description:
                'Gather the documents, send your application online and our school office will contact you.',
            requirements: 'Requirements',
            regulationsLink: 'Read the school regulations',
            formLink: 'Fill out the pre-enrollment form',
            paymentTitle: 'Accepted payment methods',
            paymentDescription:
                'Pay whichever way works best for you. Every payment is recorded in the parent portal.',
        },
        contact: {
            eyebrow: 'Contact us',
            title: "We're here to help",
            description:
                'Tap any detail: on your phone it calls or opens email or Instagram; on a computer it copies the phone number to the clipboard.',
            address: 'Address',
            phones: 'Phone',
            email: 'Email',
            hours: 'Office hours',
            hoursValue: 'Monday to Friday · 7:30 a.m. – 2:00 p.m.',
        },
        footer: {
            schoolYear: `School year ${SCHOOL.schoolYear}`,
            linksLabel: 'Site links',
            history: 'Our story',
            regulations: 'School regulations',
            privacy: 'Privacy',
            portal: 'Parent portal',
        },
    },
    video: {
        progress: 'Video progress',
        position: (current, total) => `${current} of ${total}`,
        play: 'Play video',
        pause: 'Pause video',
        unmute: 'Unmute',
        mute: 'Mute',
        volume: 'Volume',
        playLabel: `Play video: ${SCHOOL.name}, 20 years`,
        title: '20 years sowing the nectar of wisdom',
        // El video no tiene subtítulos: se avisa que está en español
        meta: 'Video in Spanish · 2:22',
    },
    history: {
        seoTitle: `Our story — ${SCHOOL.name}`,
        seoDescription: `Since ${SCHOOL.foundedYear}, ${SCHOOL.name} has educated the children and young people of ${SCHOOL.city}, ${SCHOOL.province}. Learn about its origins and milestones.`,
        eyebrow: 'Our story',
        title: `Since ${SCHOOL.foundedYear}, sowing the nectar of wisdom`,
        intro: `What began with 25 students in ${SCHOOL.city} is now a school community that guides its “Colmenitas” from Preschool through High School.`,
        howWeBegan: 'How we began',
        drivesUs: 'What drives us today',
    },
    timeline: {
        eyebrow: 'Moments that define us',
        title: 'The flight that brought us here',
        introBefore: 'A hive is built',
        introStrong: 'cell by cell',
        introAfter:
            ', and so is our story. Every generation has left something that helps us keep growing together.',
        today: 'Today',
        onwardEyebrow: 'And the flight goes on',
        onwardTitle: 'One cell leads to the next.',
        onwardText:
            'What began with 25 students is now a community that keeps building the future. Our story still has many cells left to fill.',
    },
    schoolLife: {
        seoTitle: `School life — ${SCHOOL.name}`,
        seoDescription: `Folklore, marching band, German classes, entrepreneurship fairs and sports at ${SCHOOL.name} in ${SCHOOL.city}, ${SCHOOL.province}.`,
        eyebrow: 'School life',
        title: 'Learning also happens outside the classroom',
        intro: 'Activities that build discipline, creativity and teamwork, and give every student room to discover their talents.',
    },
    regulations: {
        seoTitle: `School regulations — ${SCHOOL.name}`,
        seoDescription: `Rules on conduct, attendance, uniform and safety at ${SCHOOL.name} in ${SCHOOL.city}, ${SCHOOL.province}.`,
        eyebrow: 'School regulations',
        title: 'How we live together at La Colmena',
        disclaimer:
            'This summary is for guidance only. The full school regulations and the educational services contract are handed out and signed at the school office at enrollment, and they are the governing documents.',
        questions: 'Questions? Email us at',
        requirementsLink: 'See admission requirements',
    },
    privacy: {
        seoTitle: `Privacy notice — ${SCHOOL.name}`,
        seoDescription: `What data the ${SCHOOL.name} pre-enrollment form asks for, what it is used for, where it is stored and how to have it deleted.`,
        eyebrow: 'Privacy notice',
        title: 'How we protect your data',
        updated: `Updated ${PRIVACY.updated} · Version ${PRIVACY.version}`,
        emailSubject: 'Data protection',
        cta: 'Go to pre-enrollment',
    },
    preEnrollment: {
        seoTitle: `Pre-enrollment ${SCHOOL.enrollmentYear} — ${SCHOOL.name}`,
        seoDescription: `Pre-enrollment form for ${SCHOOL.name} in ${SCHOOL.city}, ${SCHOOL.province}. Preschool, primary, middle school and high school (science track).`,
        eyebrow: `Pre-enrollment ${SCHOOL.enrollmentYear}`,
        title: 'Join La Colmena',
        intro: "Share your details and the grade you're interested in. The school office will contact you to confirm availability, schedule a visit and walk you through the enrollment steps.",
        processTitle: 'Our admissions process',
        documentsTitle: 'Documents for enrollment',
        documentsNote:
            "You don't need to send them now: they are handed in at the school office.",
        talkToUs: 'Would you rather talk to us?',
        form: {
            optional: '(optional)',
            botField: 'Leave this field empty:',
            studentTitle: 'Student information',
            requiredNote: 'All fields are required unless marked as optional.',
            studentFirstName: 'First name',
            studentLastName: 'Last name',
            birthDate: 'Date of birth',
            birthDatePlaceholder: 'dd/mm/yyyy',
            calendar: {
                previousMonth: 'Previous month',
                nextMonth: 'Next month',
                previousYear: 'Previous year',
                nextYear: 'Next year',
                previousDecade: 'Previous decade',
                nextDecade: 'Next decade',
            },
            grade: 'Grade applying to',
            gradePlaceholder: 'Select a grade',
            noResults: 'No results',
            previousSchool: 'Previous school',
            siblingsNote:
                'If you are enrolling more than one child, tell us about the others in the comments.',
            guardianTitle: 'Parent or guardian information',
            guardianFirstName: 'First name',
            guardianLastName: 'Last name',
            email: 'Email',
            emailPlaceholder: 'name@email.com',
            phone: 'Phone or WhatsApp',
            source: 'How did you hear about us?',
            sourcePlaceholder: 'Select an option',
            comments: 'Comments or questions',
            commentsPlaceholder:
                'For example: other children you would like to enroll, or any questions.',
            healthNote:
                'Please do not include health information. If the student has any special needs, we can talk about it during the visit.',
            consent: `I am the student's parent or guardian and I authorize ${SCHOOL.name} to use this information only for pre-enrollment. I understand it is stored outside Panama and that I can ask for it to be deleted at any time.`,
            privacyLink: 'Read the privacy notice',
            failed: "We couldn't send the form. Please try again or message us on",
            failedWhatsappMessage:
                'Hello, I would like information about pre-enrollment.',
            sending: 'Sending…',
            submit: 'Send pre-enrollment',
            disclaimer:
                'Pre-enrollment does not reserve a spot: enrollment is finalized at the school office with the documents and the signed contract.',
        },
        errors: {
            studentFirstName: "Enter the student's first name.",
            studentLastName: "Enter the student's last name.",
            birthDate: 'Enter the date of birth.',
            grade: 'Select the grade they are applying to.',
            guardianFirstName: 'Enter your first name.',
            guardianLastName: 'Enter your last name.',
            emailMissing: 'Enter your email.',
            emailInvalid: 'Check your email: it looks incomplete.',
            phone: 'Enter a phone number with at least 7 digits.',
            consent: 'We need your consent to send the application.',
        },
        sent: {
            thanks: (name) => `Thank you, ${name}!`,
            received: (student) =>
                `We received the pre-enrollment application for ${student}. The school office will contact you within the next few business days to confirm availability and the next steps.`,
            whatsappMessage: (name, student) =>
                `Hello, I'm ${name} and I just sent the online pre-enrollment form for ${student}.`,
        },
    },
}
