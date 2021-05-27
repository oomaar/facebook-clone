import Image from "next/image";
import { signOut, useSession } from "next-auth/client";
import { HeaderIcon } from "..";
import {
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    ChatIcon,
    BellIcon,
} from "@heroicons/react/solid";
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
} from "@heroicons/react/outline";

const Header = () => {
    const [session] = useSession();

    return (
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <div>
                    <Image
                        className="cursor-pointer"
                        src="/Facebook-logo.png"
                        width={40}
                        height={40}
                        layout="fixed"
                    />
                </div>
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-500" />
                    <input
                        className="hidden md:inline-flex ml-2 items-center bg-transparent
                        outline-none placeholder-gray-500 flex-shrink"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />
                <p className="font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
};

export default Header;
