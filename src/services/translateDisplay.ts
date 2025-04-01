import firstCharUpper from "./firstCharUpper";

enum Colour {
  white = "blanc",
  black = "noir",
  red = "rouge",
  blue = "bleu",
  green = "vert",
}

export default function translateDisplay({ colour }: { colour: string }) {
  const translatedColour = Colour[colour as keyof typeof Colour];
  const formatedColour = firstCharUpper(translatedColour);

  return formatedColour;
}
