// @ts-nocheck
"use client";
import StudentApp from "@/components/StudentApp";
import ResponsiveWrapper from "@/components/shared/ResponsiveWrapper";

export default function Page() {
  return (
    <ResponsiveWrapper app="student">
      <StudentApp />
    </ResponsiveWrapper>
  );
}
