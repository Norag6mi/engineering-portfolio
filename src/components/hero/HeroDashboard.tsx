import { profile } from "@/data/profile";
import { FiMapPin, FiBriefcase, FiCpu, FiActivity, } from "react-icons/fi";
import type { ReactNode } from "react";

export default function HeroDashboard() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm uppercase tracking-widest text-muted">
          System Status
        </h3>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted">
            {profile.status}
          </span>
        </div>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="space-y-5">
        <DashboardRow
          icon={<FiBriefcase />}
          title="Role"
          value={profile.role}
        />

        <DashboardRow
          icon={<FiCpu />}
          title="Current Focus"
          value={profile.currentFocus}
        />

        <DashboardRow
          icon={<FiActivity />}
          title="Latest Project"
          value={profile.latestProject}
        />

        <DashboardRow
          icon={<FiMapPin />}
          title="Location"
          value={profile.location}
        />
      </div>

      <div className="my-6 h-px bg-border" />

      <div>
        <p className="font-mono text-sm text-primary">
          &gt; engineering_philosophy
        </p>

        <p className="mt-3 text-sm leading-7 text-muted">
          Building maintainable software through clean architecture,
          modular design, and practical engineering.
        </p>
      </div>
    </div>
  );
}

interface DashboardRowProps {
  icon: ReactNode;
  title: string;
  value: string;
}

function DashboardRow({
  icon,
  title,
  value,
}: DashboardRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-primary">
        {icon}
      </div>

      <div>
        <p className="text-sm text-muted">
          {title}
        </p>

        <p className="mt-1 font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}