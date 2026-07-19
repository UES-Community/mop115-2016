import React from "react";
import { UnidadDetailView } from "@/components/unidades/unidad-detail-view";

export function generateStaticParams() {
  return [
    { id: "u1" },
    { id: "u2" },
    { id: "u3" },
    { id: "u4" },
    { id: "u5" },
  ];
}

export default async function UnidadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <UnidadDetailView id={id} />;
}
