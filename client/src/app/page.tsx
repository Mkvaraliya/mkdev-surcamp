import { BlockRenderer } from "@/Components/BlockRenderer";
import { HeroSection } from "@/Components/blocks/HeroSection";
import { InfoBlock } from "@/Components/blocks/InfoBlock";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if(!data){
    console.log("data Not Found")
  }
  return {...data.data};
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log("data is",data);

  return <BlockRenderer blocks={blocks} />
}
