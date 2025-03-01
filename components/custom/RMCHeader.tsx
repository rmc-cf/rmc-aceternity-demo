"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IMenuList, IType } from "@/types/menu";

export function RMCHeader({ menuList }: { menuList: IMenuList }) {
      return (
            <div className="relative w-full flex items-center justify-center ">
                  <Navbar className="top-2 " data={menuList} />
            </div>
      );
}

function Navbar({ className, data }: { className?: string, data: IMenuList }) {
      const [active, setActive] = useState<string | null>(null);
      return (
            <div
                  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
            >
                  <Menu setActive={setActive}>
                        <MenuItem item="Home" setActive={()=>{}} active={null} url="/"></MenuItem>
                        {data.map((item, index) => (
                              <MenuItem key={index} url={item.url!}  setActive={!item.isTop?setActive:()=>{}} active={!item.isTop?active:null} item={item.name}>
                                    {
                                          item.type==IType.DATA?(
                                                <ProductItem
                                                title="Algochurn"
                                                href="https://algochurn.com"
                                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                                description="Prepare for tech interviews like never before."
                                              />
                                          ):(

                                          item.children?.length && (
                                                      <div className="flex flex-col space-y-4 text-sm">
                                                            {
                                                                  item.children.map((child) => (
                                                                        <HoveredLink href={child.url}>{child.name}</HoveredLink>
                                                                       
                                                                  ))
                                                            }
                                                      </div>
                                                    
                                          )
                                    )
                                    }

                              </MenuItem>
                        ))}

                        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
                  </Menu>
            </div>
      );
}
