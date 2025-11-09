import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/type";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  // const { colors } = useAppTheme();

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreviw={item} />;
  }

  return (
    <Screen>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}
