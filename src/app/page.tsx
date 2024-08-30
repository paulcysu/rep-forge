import NavBar from "@/src/components/NavBar";
import Schedule from "@components/routine/Schedule";
import MacroPieChart from "@components/MacroPieChart";
import WeightChart from "@components/WeightChart";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="p-10">
        <div className="">
          <Schedule />
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          <MacroPieChart />
          <WeightChart />
        </div>
      </div>
    </main>
  );
}
