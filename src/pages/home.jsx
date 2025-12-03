import React from "react";
import Button from "../components/buttons";
import CallNowButton from "../components/callNow";
import { links } from "../components/links";
export default function Home() {
  return (
    <div className="bg-card rounded-2xl p-6 pb-12 shadow-xl ring-1 ring-black/20 max-w-wd mx-auto ">
      <div className="flex flex-col items-center mt-12">
        <img
          src="favicon2.png"
          alt="profile"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-accent1 shadow-md object-cover mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-display text-brand mb-2">
          Saqib Ali
        </h1>
        <p className=" text-lg  sm:text-lg font-semibold font-lato text-brand/80 text-center mb-6">
          Digital Experiences ·Web Dev ·SEO ·wordpress
        </p>
        <hr className="w-36 border-t border-accent1 mb-6" />
        <div className="flex flex-col space-y-3 w-full items-center">
          {links.map((l) => (
            <Button
              key={l.name}
              label={l.name}
              href={l.url}
              variant={l.variant}
            />
          ))}
        </div>
        <CallNowButton />
      </div>
    </div>
  );
}
