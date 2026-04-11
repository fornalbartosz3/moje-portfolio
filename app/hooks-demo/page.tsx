"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HooksDemo() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCount(count - 1)}>-</Button>
        <Button variant="outline" onClick={() => setCount(count + 1)}>+</Button>
        <Button variant="destructive" onClick={() => setCount(0)}>Reset</Button>
      </div>
    </main>
  );
}