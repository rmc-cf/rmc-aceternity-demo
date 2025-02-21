import CardEffect from "@/components/custom/3DCardEffect";
import DPin from "@/components/custom/3DPin";
import RmcBackgroundLines from "@/components/custom/BackgroundLines";
import { Banner } from "@/components/custom/Banner";
import RmcGrid from "@/components/custom/RmcGrid";
export default function Home() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      {/* <CardEffect /> */}
      {/* <DPin/> */}
      <Banner title={'RMC Spaces'} subTitle={'Welcome to RMC Spaces'}/>
      {/* <RmcBackgroundLines title="It's show time" subTitle="Don't close your eyes"/> */}
      <RmcGrid items={items}/>
    </div>
  );
}
