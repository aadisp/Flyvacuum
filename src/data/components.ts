export interface Datasheet {
  name: string;
  series?: string;
  href: string;
}

export interface ComponentGroup {
  id: string;
  title: string;
  text: string;
  items: Datasheet[];
}

// The PDFs live in public/datasheets/. To add one, drop the file there and add a line below.
const pdf = (file: string) => `/datasheets/${file}.pdf`;

export const componentGroups: ComponentGroup[] = [
  {
    id: 'flanges',
    title: 'Flanges and fittings',
    text: 'Four flange standards: ISO KF, ISO, CF and ANSI.',
    items: [
      { name: 'ISO KF flanges and fittings', href: pdf('ISO-KF-FLANGES-AND-FITTINGS') },
      { name: 'ISO flanges and fittings', href: pdf('ISO-FLANGES-AND-FITTINGS') },
      { name: 'CF flanges and fittings', href: pdf('CF-FLANGES-AND-FITTINGS-1') },
      { name: 'ANSI flanges and fittings', href: pdf('ANSI-FLANGES-AND-FITTINGS') },
    ],
  },
  {
    id: 'valves',
    title: 'Valves',
    text: 'Gate, right angle, butterfly, pressure relief, air admittance, needle and combination valves.',
    items: [
      { name: 'Gate valve', series: 'FVT-GV small series', href: pdf('GATE-VALVE---FVT-GV-SMALL-SERIES') },
      { name: 'Right angle valve', series: 'RVP series', href: pdf('RIGHT-ANGLE-VALVE---RVP-SERIES') },
      { name: 'Butterfly valve', series: 'BV series', href: pdf('BUTTERFLY-VALVE---BV-SERIES') },
      { name: 'Pressure relief valve', href: pdf('PRESSURE-RELIEF-VALVE') },
      { name: 'Air admittance valve', href: pdf('AIR-ADMITTANCE-VALVE') },
      { name: 'Needle valve', href: pdf('NEEDLE-VALVE') },
      { name: 'Combination valve', href: pdf('COMBINATION-VALVE') },
    ],
  },
  {
    id: 'baffles',
    title: 'Baffles',
    text: 'Water-cooled chevron baffles.',
    items: [{ name: 'Water-cooled chevron baffles', href: pdf('WATER-COOLED-CHEVRON-BAFFLES') }],
  },
];

export const datasheetCount = componentGroups.reduce((n, g) => n + g.items.length, 0);
