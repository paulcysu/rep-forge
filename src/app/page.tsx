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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1">
            <MacroPieChart />
          </div>
          <div className="col-span-1">
            <WeightChart />
          </div>
        </div>
      </div>
    </main>
  );
}
