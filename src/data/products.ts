export type Spec = [label: string, value: string];

export interface SizeTable {
  title: string;
  models: string[];
  rows: { label?: string; unit: string; values: string[] }[];
}

export interface Model {
  slug: string;
  name: string;
  range: [number, number] | null;
  rangeLabel: string | null;
  specs: Spec[];
  body?: string[];
  table?: SizeTable;
}

export interface Product {
  slug: string;
  name: string;
  label: string;
  summary: string;
  range: [number, number] | null;
  rangeLabel: string | null;
  specs: Spec[];
  body: string[];
  advantages?: string[];
  models?: Model[];
}

// Temperature scale used by the range bars (°C)
export const SCALE = { min: -60, max: 2700 };

export const products: Product[] = [
  {
    slug: 'gas-cooling',
    name: 'Vacuum furnaces, gas cooling',
    label: 'Gas cooling furnaces',
    summary: 'Graphite, molybdenum or tungsten hot zone with 1 to 16 bar gas quenching.',
    range: [600, 2600],
    rangeLabel: '600–2600 °C',
    specs: [
      ['Max temperature', '2600 °C'],
      ['Max quench pressure', '16 bar'],
      ['Ultimate vacuum', '1×10⁻⁶ mbar'],
    ],
    body: [
      'Flyvacuum makes a wide range of furnaces for brazing, sintering, quenching and vacuum heat treatment of metals. They are designed for stringent heat treatment under high vacuum and high temperature.',
      'Gas quenching furnaces come with forced circulation and quench pressure from 1 to 16 bar for the most demanding applications.',
    ],
    models: [
      {
        slug: 'horizontal',
        name: 'Horizontal furnace with gas quenching',
        range: [600, 2600],
        rangeLabel: '600–2600 °C',
        specs: [
          ['Temperature', '600–2600 °C'],
          ['Gas quenching', '1–16 bar absolute'],
          ['Hot zone', 'Graphite, molybdenum or tungsten'],
          ['Vacuum level', '10⁻², 10⁻⁵, 10⁻⁶ mbar'],
        ],
        table: {
          title: 'Standard horizontal models',
          models: ['FVT-H300', 'FVT-H400', 'FVT-H600', 'FVT-H900', 'FVT-H1200'],
          rows: [
            { label: 'Uniform zone size (W × H × L)', unit: 'mm', values: ['300×300×400', '400×400×600', '600×600×900', '900×900×1200', '1200×1200×1600'] },
            { unit: 'inch', values: ['12×12×16', '16×16×24', '24×24×36', '36×36×48', '48×48×63'] },
            { label: 'Hearth capacity', unit: 'kg', values: ['200', '400', '600', '1200', '2500'] },
            { label: 'Furnace size (W × H × L)', unit: 'm', values: ['2.5×2.5×4', '2.6×3×5', '3.2×3.6×5.5', '3.5×4×7', '4.6×4×8'] },
          ],
        },
      },
      {
        slug: 'vertical',
        name: 'Vertical furnace with gas quenching',
        range: [600, 2400],
        rangeLabel: '600–2400 °C',
        specs: [
          ['Temperature', '600–2400 °C'],
          ['Gas quenching', '1–16 bar absolute'],
          ['Hot zone', 'Graphite, molybdenum or tungsten'],
          ['Vacuum level', '10⁻², 10⁻⁵, 10⁻⁶ mbar'],
        ],
        table: {
          title: 'Standard vertical models',
          models: ['FVT-V900', 'FVT-V1200'],
          rows: [
            { label: 'Uniform zone size (Ø × H)', unit: 'mm', values: ['Ø900×1200', 'Ø1200×1500'] },
            { unit: 'inch', values: ['Ø36×48', 'Ø48×60'] },
            { label: 'Hearth capacity', unit: 'kg', values: ['1000', '1500'] },
            { label: 'Furnace size (W × H × L)', unit: 'm', values: ['5×7.5×6', '6×8×7'] },
          ],
        },
      },
    ],
  },
  {
    slug: 'oil-quenching',
    name: 'Vacuum furnaces, oil quenching',
    label: 'Oil quenching furnaces',
    summary: 'Dual chamber furnace with a graphite hot zone and fast, smooth load transfer.',
    range: [600, 1200],
    rangeLabel: '600–1200 °C',
    specs: [
      ['Temperature', '600–1200 °C'],
      ['Gas quenching', '6 or 12 bar absolute'],
      ['Hot zone', 'Graphite'],
    ],
    body: [
      'The dual chamber furnace suits a wide range of heat treat jobs. An oil quench module is combined with a heating module and an internal drive that moves the load quickly and smoothly.',
      'An internal vacuum door separates the two chambers, so the heating chamber stays hot and under vacuum while you load and unload. A rear access door simplifies maintenance.',
      'Cooling can be by gas quench or by hardening oil. An agitation system pushes oil through the load for uniform, fast cooling. Graphite insulation and heating elements give long service life.',
    ],
    advantages: [
      'Reduced production cost',
      'Faster production time',
      'Clean, environmentally friendly process',
      'No flammable or explosive atmosphere',
      'No atmosphere generator needed',
      'No fire or explosion risk',
    ],
    models: [
      {
        slug: 'dual-chamber',
        name: 'Dual chamber oil quench furnace',
        range: [600, 1200],
        rangeLabel: '600–1200 °C',
        specs: [
          ['Temperature', '600–1200 °C'],
          ['Gas quenching', '6 or 12 bar absolute'],
          ['Hot zone', 'Graphite'],
          ['Vacuum level', '10⁻² mbar'],
        ],
        table: {
          title: 'Standard horizontal models',
          models: ['FVT-HO400', 'FVT-HO600', 'FVT-HO900'],
          rows: [
            { label: 'Uniform zone size (W × H × L)', unit: 'mm', values: ['400×400×600', '600×600×900', '900×900×1200'] },
            { unit: 'inch', values: ['16×16×24', '24×24×36', '36×36×48'] },
            { label: 'Hearth capacity', unit: 'kg', values: ['200', '600', '1200'] },
            { label: 'Furnace size (W × H × L)', unit: 'm', values: ['3.5×3.5×6', '4.2×4.6×6.5', '4.5×5×8'] },
          ],
        },
      },
    ],
  },
  {
    slug: 'pumping-system',
    name: 'Vacuum pumping systems',
    label: 'Pumping systems',
    summary: 'Custom pumping stacks on a steel frame, ready to connect.',
    range: null,
    rangeLabel: null,
    specs: [
      ['Roughing', 'Rotary vane or dry pumps'],
      ['Boosting', 'Roots or booster pumps'],
      ['High vacuum', 'Diffusion or turbo pumps'],
    ],
    body: [
      'Flyvacuum builds pumping stacks to match your process. Combine rotary vane or dry pumps with Roots or booster pumps. For high vacuum, add a diffusion or turbo pump.',
      'Each modular stack is mounted on a steel frame with isolation valves, inlet air filters, a control panel, receiver tanks, sensors and flexible connections.',
    ],
  },
  {
    slug: 'hot-zones',
    name: 'Vacuum hot zones',
    label: 'Hot zones',
    summary: 'All-metal or graphite hot zones, built as modules for easy fitting.',
    range: [20, 2700],
    rangeLabel: 'up to 2700 °C',
    specs: [
      ['Max temperature', '2700 °C'],
      ['Elements', 'Molybdenum, tungsten or graphite'],
      ['Build', 'Modular'],
    ],
    body: [
      'The hot zone is the most critical part of a vacuum furnace. It sets performance and running cost, so the design should follow a careful analysis of your process.',
      'Heating elements can be metal or graphite in several styles, and the right material depends mostly on operating temperature. Flyvacuum designs and makes hot zones with molybdenum, tungsten or graphite elements for heat treatment up to 2700 °C.',
      'Every hot zone is modular, so it goes into and out of the vacuum chamber easily.',
    ],
  },
  {
    slug: 'vacuum-oven',
    name: 'Vacuum ovens',
    label: 'Vacuum ovens',
    summary: 'Cold wall ovens for drying and heat sensitive work, 100 to 500 °C.',
    range: [100, 500],
    rangeLabel: '100–500 °C',
    specs: [
      ['Temperature', '100–500 °C'],
      ['Design', 'Cold wall, water cooled'],
      ['Build', 'Stainless steel jacket and flanges'],
    ],
    body: [
      'Vacuum ovens are used in laboratory research, engineering and industry, mostly for drying hygroscopic and heat sensitive materials. Lowering chamber pressure below the vapour pressure of water makes it boil off at lower temperature, and the low pressure also limits oxidation.',
      'Material sits on trays while a vacuum pump reduces the pressure. The oven can be filled with inert gas, which speeds up drying of some compound materials.',
    ],
  },
  {
    slug: 'induction-melting',
    name: 'Vacuum induction melting furnaces',
    label: 'Induction melting furnaces',
    summary: 'Custom VIM furnaces for superalloys and other high value alloys.',
    range: null,
    rangeLabel: null,
    specs: [
      ['Process', 'Induction melting under vacuum'],
      ['Used for', 'Superalloys, stainless steels, magnetic and battery alloys'],
      ['Design', 'Custom'],
    ],
    body: [
      'Vacuum induction melting (VIM) melts metal by electromagnetic induction under vacuum. A refractory lined crucible sits inside an induction coil within a vacuum chamber. The charge goes in under vacuum, power melts it, and more charges are added until the melt is the right size.',
      'When the melt chemistry is right, the crucible tilts and pours into moulds. VIM makes superalloys, stainless steels, magnetic and battery alloys, electronic alloys and other demanding high value alloys.',
    ],
  },
  {
    slug: 'thermal-vacuum-chambers',
    name: 'Thermal vacuum chambers',
    label: 'Thermal vacuum chambers',
    summary: 'Vacuum plus controlled temperature for testing space hardware.',
    range: [-60, 120],
    rangeLabel: '−60 to +120 °C',
    specs: [
      ['Vacuum level', 'Down to 10⁻⁶ mbar'],
      ['Temperature', '−60 to +120 °C'],
      ['Shrouds', 'Custom thermal plates'],
    ],
    body: [
      'Space hardware must survive very low pressure and sudden temperature changes in orbit, where heat can only leave without air to carry it away.',
      'Flyvacuum thermal vacuum chambers combine vacuum and temperature in one system. Thermal plates and shrouds are made in a range of materials and finishes, isolated from the chamber wall, with heating and cooling that simulate wide and fast temperature swings.',
    ],
  },
  {
    slug: 'glove-box',
    name: 'Vacuum glove boxes',
    label: 'Glove boxes',
    summary: 'Controlled low moisture, low oxygen environments, configured to your use.',
    range: null,
    rangeLabel: null,
    specs: [
      ['Environment', 'Vacuum to low moisture and oxygen'],
      ['Method', 'Vacuum cycling and gas backfill'],
      ['Design', 'Custom'],
    ],
    body: [
      'A vacuum glove box gives a controlled negative pressure environment, up to full vacuum. Gloves on the front or side panels let you work inside without touching the contents.',
      'Glove boxes are used for degassing, low moisture and low oxygen work, atmospheric simulation, sensor calibration and multi-stage vacuum pressure testing. Vacuum cycling and process gas backfilling is a fast, economical way to reach very low moisture and oxygen levels.',
      'Flyvacuum configures glove boxes for almost any application, protecting both your process and your people.',
    ],
  },
];

export const ranged = products.filter((p) => p.range);
