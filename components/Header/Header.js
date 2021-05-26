import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <div>
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
                        className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            <div>
                <div>
                    <HeaderIcon Icon={HomeIcon} />
                </div>
            </div>
        </div>
    );
};

export default Header;
