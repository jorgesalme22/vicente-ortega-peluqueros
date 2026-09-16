import type { ComponentType } from "react";
import { services as serviceData } from "@/lib/business";
import {
  ScissorsIcon,
  DropIcon,
  SparkleIcon,
  LeafIcon,
  BrushIcon,
} from "./icons";

const iconBySlug: Record<string, ComponentType<{ className?: string }>> = {
  "corte-senora": ScissorsIcon,
  "corte-caballero": ScissorsIcon,
  coloracion: DropIcon,
  "balayage-mechas": SparkleIcon,
  tratamientos: LeafIcon,
  peinado: BrushIcon,
};

export const services = serviceData.map((s) => ({
  ...s,
  icon: iconBySlug[s.slug] ?? ScissorsIcon,
}));
