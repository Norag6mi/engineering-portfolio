import type { Note } from "@/types/note";

export const notes: Note[] = [
  {
    id: 1,

    title: "Designing Modular NPC AI using FSM",

    summary:
      "How separating sensing, navigation, combat and animation into independent components made the AI easier to extend and maintain.",

    content: [
    "Building increasingly complex NPC behaviors quickly revealed the limitations of placing all combat logic inside a single script. As new features such as retreating, repositioning, cover selection, and animation synchronization were added, maintaining the system became increasingly difficult. I needed an architecture that could scale without turning into a monolithic controller.",

    "I adopted a Finite State Machine (FSM) as the high-level decision-making layer while moving individual responsibilities into dedicated components. Navigation, sensing, combat positioning, animation, and weapon handling became independent systems that communicated through well-defined interfaces rather than directly depending on one another.",

    "One of the most valuable decisions was separating combat movement from combat decisions. Instead of allowing the Engage state to control every movement directly, a dedicated CombatMovementController became responsible for evaluating tactical positions, retreat logic, pursuit behavior, and holding optimal engagement distances. This significantly simplified the state logic while making movement behaviors reusable across different combat scenarios.",

    "As additional features such as cover usage and animation-driven combat were introduced, this modular design proved its value. New behaviors could be integrated without rewriting existing systems, and debugging individual components became much easier because responsibilities remained clearly separated.",

    "The project reinforced the importance of separation of concerns in gameplay programming. Rather than treating AI as a single system, dividing it into specialized components resulted in cleaner code, easier testing, and a more maintainable architecture capable of supporting increasingly sophisticated NPC behaviors."
    ],

    project: "Multi-Agent NPC Combat System",

    tags: ["Unity", "FSM", "Monobehaviour", "Architecture"],
  },

  {
    id: 2,

    title: "Building a Desktop Launcher with Electron + React",

    summary:
    "Design decisions behind separating Electron's privileged process from the React frontend to create a secure, maintainable, and scalable desktop application architecture.",

    content: [
    "Developing a desktop application with Electron introduced an architectural challenge that doesn't exist in traditional web applications. Some functionality, such as file system access, downloading installers, and launching executables, required Node.js privileges, while the user interface needed to remain isolated inside React.",

    "Rather than allowing React components to access Electron APIs directly, I implemented a clear separation between the renderer process and the main process using Electron's IPC system. React became responsible only for presentation and user interactions, while Electron handled privileged desktop operations through well-defined communication channels.",

    "This separation made the project significantly easier to maintain. Business logic related to downloading, extracting archives, installation management, and launching applications remained inside Electron services, while React focused exclusively on rendering the interface and managing application state.",

    "The architecture also simplified future development. Features such as automatic updates, installation persistence, release notes, and download progress tracking could be implemented independently without tightly coupling desktop functionality to the frontend.",

    "The biggest lesson from this project was that Electron applications benefit from being treated as two separate applications communicating through carefully designed interfaces. Maintaining this boundary improved code organization, reduced complexity, and resulted in a cleaner desktop application architecture."
    ],

    project: "Application Distribution Platform",

    tags: ["Electron", "React", "Vite" , "Desktop"],
  },

  {
    id: 3,

    title: "Dockerizing a FastAPI Backend",

    summary:
    "Lessons learned while containerizing a FastAPI backend with SQLAlchemy and MySQL to create a consistent development and deployment workflow.",

    content: [
    "After completing the backend implementation, I wanted to eliminate the common 'works on my machine' problem by packaging the entire application into reproducible containers. Docker became the foundation for creating a consistent environment across development and deployment.",

    "The backend was organized around FastAPI, SQLAlchemy, JWT authentication, and MySQL. Using Docker Compose allowed each service to run independently while communicating through an isolated network. Environment variables were externalized through configuration files, making it possible to deploy the application without modifying source code.",

    "One challenge involved ensuring reliable startup behavior. Since the API depended on the database, service initialization needed to account for database availability before accepting requests. Managing these dependencies highlighted the importance of service orchestration rather than simply containerizing individual applications.",

    "Containerization also simplified deployment to cloud platforms. The same Docker images used during local development could be deployed without requiring additional installation steps or manual dependency management, reducing the likelihood of environment-specific issues.",

    "This project demonstrated that Docker is not simply a deployment tool but an architectural decision that improves reproducibility, portability, and maintainability. Building containerized services from the beginning makes future scaling and deployment considerably easier."
    ],

    project: "Launcher Backend",

    tags: ["FastAPI", "Docker", "MySQL" , "Bcrypt", "JWT"],
  },

 {
  id: 4,

  title: "Neural Networks for Adaptive NPC Decision-Making",

  summary:
    "Lessons learned while evolving neural-network-controlled NPCs against a handcrafted FSM opponent, covering curriculum learning, experimental design, statistical validation, and emergent behavior.",

  content: [
    "Building this project changed how I think about AI systems. My original goal wasn't simply to implement a neural network—it was to understand whether an agent could discover effective combat strategies through evolutionary pressure rather than explicitly programmed rules.",

    "To evaluate this fairly, I trained neural-network-controlled agents against a rule-based Finite State Machine (FSM) opponent that I had developed myself. Both systems shared identical perception, physics, and combat mechanics, ensuring that the only variable being compared was the decision-making architecture.",

    "One of the first challenges appeared almost immediately. Randomly initialized neural agents rarely survived long enough for evolution to occur. Entire generations were eliminated before meaningful mutations or selection could take place.",

    "Instead of increasing computational resources, I introduced a staged curriculum where agents first learned navigation against passive targets before facing combat. Although originally a practical workaround, this closely resembled curriculum learning and became the foundation that enabled successful training.",

    "Another lesson came from what initially appeared to be a learning plateau. Extending evaluation windows from 60 to 120 seconds revealed that the bottleneck wasn't the learning algorithm—it was the experimental design. Longer evaluation windows allowed additional reproduction cycles, enabling agents to escape local optima.",

    "Evolutionary algorithms naturally produced high variance between experimental runs. Rather than selecting favorable results, I validated improvements using statistical testing, confirming that the observed gains were significant despite noisy outcomes.",

    "The most rewarding moment came while reviewing combat behavior. Late-generation agents consistently maintained a distance that prevented the handcrafted FSM from entering its attack state. This strategy was never programmed or rewarded—it emerged entirely through evolutionary selection and exposed a limitation in my own rule-based AI.",

    "This project reinforced several engineering principles that continue to influence how I design intelligent systems: build training pipelines around realistic hardware constraints, validate experiments before tuning algorithms, support conclusions with statistics, and always observe agent behavior alongside performance metrics."
  ],

  project: "NPC Evolution Simulation",

  tags: [
    "Unity",
    "Neural Networks",
    "AI",
    "Architecture",
  ],
  }
];