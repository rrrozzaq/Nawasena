import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/recruiter")({
  component: () => <AppShell mode="recruiter"><Outlet /></AppShell>,
});
