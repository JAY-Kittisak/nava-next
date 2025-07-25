import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbsProps } from "@/types/utils";

const SiteHeader: React.FC<BreadcrumbsProps> = ({
  items = [{ breadcrumbHref: "/dashboard", breadcrumbLabel: "Dashboard" }],
}) => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            {items.map((item, index) => {
              if (index + 1 === items.length) {
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>{item.breadcrumbLabel}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              } else
                return (
                  <div key={index} className="flex items-center">
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild className="mr-3">
                        <Link href={item.breadcrumbHref || "#"}>
                          {item.breadcrumbLabel}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                  </div>
                );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default SiteHeader;
