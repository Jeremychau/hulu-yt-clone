import Image from "next/image"
import HeaderItem from "./HeaderItem"

import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between item-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem Title="HOME" Icon={HomeIcon} />
                <HeaderItem Title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem Title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem Title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem Title="SEARCH" Icon={SearchIcon} />
                <HeaderItem Title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
                alt=""
            />

        </header>
    )
}

export default Header
