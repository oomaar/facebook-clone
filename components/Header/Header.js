import Image from "next/image";
import {
    HomeIcon,
    UserGroupIcon,
    BellIcon,
    ChatIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HeaderIcon } from "..";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
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
                        className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500
                        flex-shrink"
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
        </div>
    );
};

export default Header;
