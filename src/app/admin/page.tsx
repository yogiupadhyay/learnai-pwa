// @ts-nocheck
"use client";
import OrgApp from "@/components/OrgApp";
import ResponsiveWrapper from "@/components/shared/ResponsiveWrapper";

export default function Page() {
  return (
    <ResponsiveWrapper app="admin">
      <OrgApp />
    </ResponsiveWrapper>
  );
}
