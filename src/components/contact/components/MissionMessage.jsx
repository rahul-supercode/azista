"use client";

import { useSearchParams } from "next/navigation";

import TextField from "@/components/ui/TextField";

/** Message field, prefilled with the brief sent from Build your mission. */
export default function MissionMessage(props) {
  const mission = useSearchParams().get("mission") ?? "";

  return <TextField key={mission} defaultValue={mission} {...props} />;
}
