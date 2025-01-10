import NextLink from "next/link";
import { site_links } from "@/reusable/variables/site";

export default function Links() {
  return (
    <div className="flex flex-row">
      {site_links.map((link, index) => (
        <div className="m-2 hover:underline" key={index}>
          <NextLink href={link.href}> {link.label}</NextLink>
        </div>
      ))}
    </div>
  );
}
