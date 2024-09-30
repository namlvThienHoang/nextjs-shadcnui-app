import { Metadata } from "next";
import Image from "next/image";
import TeamSwitcher from "./_components/team-switcher";
import { MainNav } from "./_components/main-nav";
import { UserNav } from "./_components/user-nav";
import { Search } from "./_components/search";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function DashBoardLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        {children}
      </div>
    
  </div>
  )
}