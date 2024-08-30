"use client"

import React from 'react';
import NavBar from "@/src/components/NavBar";
import { MultipleContainers } from "@/src/components/routine/MultipleContainers";
import MacroPieChart from "@components/MacroPieChart";
import WeightChart from "@components/WeightChart";
import { rectSortingStrategy } from "@dnd-kit/sortable";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="p-10">
        <div className="">
          <MultipleContainers
            itemCount={5}
            strategy={rectSortingStrategy}
            vertical
          />
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          <MacroPieChart />
          <WeightChart />
        </div>
      </div>
    </main>
  );
}
