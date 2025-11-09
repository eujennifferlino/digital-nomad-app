import { ImageBackground } from "react-native";
import { CityPreview } from "../type";
import { Text } from "./Text";

type CityCardProps = {
  cityPreviw: CityPreview;
};

export function CityCard({ cityPreviw }: CityCardProps) {
  return (
    <ImageBackground
      source={cityPreviw.coverImage}
      style={{ width: 200, height: 200 }}
    >
      <Text>{cityPreviw.name}</Text>
      <Text>{cityPreviw.country}</Text>
    </ImageBackground>
  );
}
