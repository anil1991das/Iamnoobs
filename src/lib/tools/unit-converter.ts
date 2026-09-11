export interface UnitCategory {
  name: string;
  units: Unit[];
}

export interface Unit {
  name: string;
  symbol: string;
  toBase: (val: number) => number;
  fromBase: (val: number) => number;
}

const make = (name: string, symbol: string, factor: number): Unit => ({
  name, symbol,
  toBase: (v) => v * factor,
  fromBase: (v) => v / factor,
});

export const unitCategories: UnitCategory[] = [
  {
    name: "Length",
    units: [
      make("Meter", "m", 1),
      make("Kilometer", "km", 1000),
      make("Centimeter", "cm", 0.01),
      make("Millimeter", "mm", 0.001),
      make("Mile", "mi", 1609.344),
      make("Yard", "yd", 0.9144),
      make("Foot", "ft", 0.3048),
      make("Inch", "in", 0.0254),
    ],
  },
  {
    name: "Weight",
    units: [
      make("Kilogram", "kg", 1),
      make("Gram", "g", 0.001),
      make("Milligram", "mg", 0.000001),
      make("Pound", "lb", 0.453592),
      make("Ounce", "oz", 0.0283495),
      make("Ton (metric)", "t", 1000),
    ],
  },
  {
    name: "Temperature",
    units: [
      {
        name: "Celsius", symbol: "°C",
        toBase: (v) => v,
        fromBase: (v) => v,
      },
      {
        name: "Fahrenheit", symbol: "°F",
        toBase: (v) => (v - 32) * 5 / 9,
        fromBase: (v) => v * 9 / 5 + 32,
      },
      {
        name: "Kelvin", symbol: "K",
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15,
      },
    ],
  },
  {
    name: "Area",
    units: [
      make("Square Meter", "m²", 1),
      make("Square Kilometer", "km²", 1e6),
      make("Hectare", "ha", 10000),
      make("Acre", "ac", 4046.86),
      make("Square Foot", "ft²", 0.092903),
      make("Square Inch", "in²", 0.00064516),
    ],
  },
  {
    name: "Volume",
    units: [
      make("Liter", "L", 1),
      make("Milliliter", "mL", 0.001),
      make("Gallon (US)", "gal", 3.78541),
      make("Quart (US)", "qt", 0.946353),
      make("Pint (US)", "pt", 0.473176),
      make("Cup (US)", "cup", 0.236588),
      make("Fluid Ounce (US)", "fl oz", 0.0295735),
      make("Cubic Meter", "m³", 1000),
    ],
  },
  {
    name: "Speed",
    units: [
      make("m/s", "m/s", 1),
      make("km/h", "km/h", 0.277778),
      make("mph", "mph", 0.44704),
      make("Knot", "kn", 0.514444),
    ],
  },
  {
    name: "Data",
    units: [
      make("Byte", "B", 1),
      make("Kilobyte", "KB", 1024),
      make("Megabyte", "MB", 1048576),
      make("Gigabyte", "GB", 1073741824),
      make("Terabyte", "TB", 1099511627776),
      make("Bit", "bit", 0.125),
    ],
  },
];

export function convert(value: number, from: Unit, to: Unit): number {
  const base = from.toBase(value);
  return to.fromBase(base);
}
