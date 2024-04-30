import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Image from "next/image";
import logo from '../../public/images/logo.png'
import { menu } from "@/util/navbar/dropdown-menu";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Nav() {

  const router = useRouter()
  const { data: session } = useSession()

  return (
    <Navbar className="shadow-md">

      <NavbarContent className="hidden sm:flex gap-4" justify="start" >
        <NavbarItem>
          <Link href="/" color="primary">
            Home
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarBrand justify='center'>
        <Link href="/">
          <Image
            src={logo}
            alt="4REal"
            width={200}
            height={200}
            style={{ height: '17hvh', width: '170px' }}
          /></Link>
      </NavbarBrand>

      <NavbarContent as="div" justify="center">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>

            {
              menu.map((item) => (
                <DropdownItem
                  key={item.name}
                  onClick={() => router.push(item.link)}
                >{item.name}</DropdownItem>
              ))
            }

            <DropdownItem key="logout" color="danger" onClick={() => session ? signOut() : router.push('/auth/sign-in')}>
              {session ? 'Sign Out' : 'Sign In'}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
