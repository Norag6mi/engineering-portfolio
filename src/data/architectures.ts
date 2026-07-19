import type { ArchitectureDiagram } from "@/types/architecture";

export const architectures: ArchitectureDiagram[] = [
  {
    id: 1,
    title: "Application Distribution Platform",

    description:
      "Layered full-stack desktop architecture separating UI, business logic, backend APIs, persistence, and binary distribution.",

    nodes: [
      "Electron",
      "React",
      "FastAPI",
      "SQLAlchemy",
      "MySQL",
      "GitHub Releases",
    ],
  },

  {
    id: 2,
    title: "Multi-Agent NPC Combat System",

    description:
      "Modular AI architecture built around Finite State Machines and reusable gameplay systems.",

    nodes: [
      "Sensor System",
      "FSM",
      "Combat Controller",
      "Navigation",
      "Animator",
      "Weapon System",
    ],
  },
];