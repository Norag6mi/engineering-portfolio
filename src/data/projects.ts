import type { Project } from "@/types/project";
import { asset } from "@/utils/assets";

export const projects: Project[] = [
  {
    id: 1,
    title: "Lightweight Application Distribution & Patch Management Platform",

    overview:
      "A full-stack desktop application launcher built with Electron, React, FastAPI, and MySQL that enables secure authentication, application distribution, automatic updates, and version management.",

    problem:
      "Designed to simplify desktop software distribution by separating metadata management from binary hosting, reducing backend bandwidth while providing a seamless installation and update experience.",

    architecture: [
      "Electron + React desktop client",
      "RESTful FastAPI backend",
      "JWT authentication",
      "SQLAlchemy ORM with MySQL",
      "Dockerized backend deployment",
      "GitHub Releases for application binaries",
    ],

    features: [
      "User authentication",
      "Application installation",
      "Automatic update detection",
      "Release notes",
      "Installation persistence",
      "Cloud-hosted backend",
    ],

    technologies: [
      "Electron",
      "React",
      "FastAPI",
      "Docker",
      "MySQL",
      "JWT",
    ],

    github: "https://github.com/Norag6mi/Launcher-Project",

    demo: "https://github.com/Norag6mi/Desktop-Launcher/releases/download/v1.0.0/Launcher.Setup.1.0.0.exe",

    media: [
    {
        type: "image",
        src: asset("/images/launcher/launcher.png"),
        title: "Launcher Home"
    },

    {
        type: "video",
        src: asset("/videos/launcher/launcher_setup.mp4"),
        title: "Application setup and installation demo"
    },

    {
        type: "image",
        src: asset("/images/launcher/launcher_signuppage.png"),
        title: "Sign Up"
    },

    {
        type: "image",
        src: asset("/images/launcher/launcher_loginpage.png"),
        title: "Login"
    },
    {
        type: "image",
        src: asset("/images/launcher/launcher_downloadlocation.png"),
        title: "Download Location"
    },
    {
        type: "image",
        src: asset("/images/launcher/launcher_downloadprogress1.png"),
        title: "Download Progress"
    },
    {
        type: "image",
        src: asset("/images/launcher/launcher_downloadprogress2.png"),
        title: "Download Progress"
    },

    {
        type: "video",
        src: asset("/videos/launcher/launcher_utility.mp4"),
        title: "Launcher Utility Features"
    },

    {
        type: "image",
        src: asset("/images/launcher/launcher_patchnotes.png"),
        title: "Patch Notes"
    },

    {
        type: "image",
        src: asset("/images/launcher/launcher_logoutoption.png"),
        title: "logout option"
    }
  ]
  },

  {
    id: 2,

    title: "Multi-Agent NPC Combat System with Hybrid FSM-Based Decision Making",

    overview:
      "A modular Unity AI framework implementing autonomous NPC combat using Finite State Machines, tactical decision-making, and reusable gameplay systems.",

    problem:
      "Built to create scalable NPC behaviors capable of adapting to dynamic combat situations while maintaining modular and maintainable AI architecture.",

    architecture: [
      "Hybrid FSM architecture",
      "Navigation Controller",
      "Combat Position Evaluator",
      "Sensor System",
      "Animation Controller",
      "Weapon Controller",
    ],

    features: [
      "Dynamic combat behaviors",
      "Cover system",
      "Retreat logic",
      "Combat positioning",
      "Animation-driven AI",
      "Reusable architecture",
    ],

    technologies: [
      "Unity",
      "C#",
      "FSM",
      "NavMesh",
      "AI",
    ],

    github: "https://github.com/Norag6mi/Multi-Agent-Hybrid-Autonomous-System-with-FSM-Based-Decision-Making.git",

    demo: "https://github.com/Norag6mi/Multi-Agent-Hybrid-Autonomous-System-with-FSM-Based-Decision-Making/releases/download/V1.1.1/BombSquadWin.zip",

    media: [
      {
        type: "image",
        src: asset("/images/NPC/npc.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_1.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_2.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_3.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_4.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_5.png"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_6.png"),
        title: "NPC Combat"
      },

      {
        type: "video",
        src: asset("/videos/NPC/NPC_interfactioncombat.mp4"),
        title: "NPC Combat"
      },

      {
        type: "image",
        src: asset("/images/NPC/npc_2.png"),
        title: "NPC Combat"
      },

      {
        type: "video",
        src: asset("/videos/NPC/NPC_VSplayer.mp4"),
        title: "NPC Combat2"
      }
    ],
  },

  {
    id: 3,

    title: "Visualizer XR",

    overview:
      "An Android AR application developed during my internship that delivers interactive augmented reality experiences using Unity and AR Foundation.",

    problem:
      "Built to create engaging mobile AR interactions while maintaining performance on Android devices and integrating custom 3D assets.",

    architecture: [
      "Unity",
      "AR Foundation",
      "MonoBehaviour architecture",
      "Interactive UI",
      "Android deployment",
    ],

    features: [
      "Interactive AR experience",
      "Thumb controller",
      "Custom UI",
      "Optimized 3D assets",
      "Google Play deployment",
    ],

    technologies: [
      "Unity",
      "AR Foundation",
      "C#",
      "Blender",
    ],

    github: "",

    demo: "https://play.google.com/store/apps/details?id=com.IEMA.VisualizerXR",

    media: [
      {
        type: "image",
        src: asset("/images/VXR/VXR1.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR2.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR3.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR4.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR5.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR6.png"),
        title: "Visualizer XR"
      },

      {
        type: "image",
        src: asset("/images/VXR/VXR7.png"),
        title: "Visualizer XR"
      },
    ],
  },
];