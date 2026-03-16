// @ts-nocheck
"use client";
import ParentApp from "@/components/ParentApp";
import ResponsiveWrapper from "@/components/shared/ResponsiveWrapper";

export default function Page() {
  return (
    <ResponsiveWrapper app="parent">
      <ParentApp />
    </ResponsiveWrapper>
  );
}
