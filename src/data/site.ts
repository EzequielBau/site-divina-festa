/**
 * Fonte factual central do Divina Festa.
 *
 * Única fonte dos fatos reutilizáveis do negócio, usada por páginas e, no futuro,
 * pelo schema (DEC-026). Os valores seguem o documento mestre §3 e as decisões
 * DEC-017 a DEC-019.
 *
 * Regras:
 * - Só entram dados aprovados. Nada pendente de confirmação.
 * - Fora deste arquivo de propósito: eventos realizados (L-02), avaliações
 *   do Google (L-03), CEP, e-mail, CNPJ (L-12), perfis sociais e GBP (L-13),
 *   horário dos eventos (L-15).
 * - O telefone da linha Divina Essência não é contato do site (DEC-018, DEC-020).
 */

export interface Phone {
  /** Formato de exibição. */
  readonly display: string;
  /** Formato E.164, para links tel: e wa.me. */
  readonly e164: string;
}

export interface SiteFacts {
  readonly business: {
    /** "Divina Festa". O uso de "Buffet" no nome segue em aberto (DIV-12). */
    readonly name: string;
    readonly category: string;
    readonly foundingYear: number;
    readonly areaDisplay: string;
    /** Um evento por vez; não há eventos simultâneos. */
    readonly simultaneousEvents: false;
  };
  readonly contact: {
    /** WhatsApp comercial geral (DEC-018). */
    readonly whatsappGeneral: Phone;
    /** WhatsApp Royal / corporativo (DEC-018). */
    readonly whatsappCorporate: Phone;
    readonly commercialHours: string;
  };
  readonly address: {
    readonly street: string;
    readonly number: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly country: string;
  };
  readonly capacity: {
    /** Texto da Home (DEC-017). */
    readonly home: string;
    /** Texto de Espaço e Estrutura (DEC-017). Não usar na Home. */
    readonly detailed: string;
    readonly seatedMax: number;
    readonly standingMax: number;
  };
  readonly amenities: {
    /** Estacionamento privativo (DEC-019). */
    readonly privateParking: true;
    readonly airConditioning: true;
    readonly kidsArea: true;
    readonly accessibility: true;
    readonly wifi: true;
    readonly security: true;
    readonly medicalEmergency: true;
  };
  readonly services: {
    readonly ownBuffet: true;
    readonly ownKitchen: true;
    readonly decoration: true;
    readonly coordination: true;
    readonly staffIncluded: true;
  };
  /** Perfis sociais ainda não confirmados nos documentos (L-13). */
  readonly social: Readonly<Record<string, string>>;
}

export const site = {
  business: {
    name: 'Divina Festa',
    category: 'Espaço de eventos e buffet',
    foundingYear: 2005,
    areaDisplay: 'aproximadamente 700 m²',
    simultaneousEvents: false,
  },
  contact: {
    whatsappGeneral: { display: '(41) 99247-0605', e164: '+5541992470605' },
    whatsappCorporate: { display: '(41) 99262-0604', e164: '+5541992620604' },
    commercialHours: '9h às 19h',
  },
  address: {
    street: 'Rua Marcelino Champagnat',
    number: '122',
    neighborhood: 'Mercês',
    city: 'Curitiba',
    state: 'PR',
    country: 'BR',
  },
  capacity: {
    home: 'até 150 convidados',
    detailed:
      'até 150 pessoas sentadas ou até 190 pessoas, conforme a montagem e o formato do evento; a capacidade máxima considera o uso conjunto do salão e da área infantil',
    seatedMax: 150,
    standingMax: 190,
  },
  amenities: {
    privateParking: true,
    airConditioning: true,
    kidsArea: true,
    accessibility: true,
    wifi: true,
    security: true,
    medicalEmergency: true,
  },
  services: {
    ownBuffet: true,
    ownKitchen: true,
    decoration: true,
    coordination: true,
    staffIncluded: true,
  },
  social: {},
} as const satisfies SiteFacts;
