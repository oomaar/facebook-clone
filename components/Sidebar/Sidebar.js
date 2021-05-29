import { useSession } from "next-auth/client";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/solid";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {/* <SidebarRow Icon /> */}
        </div>
    );
};

export default Sidebar;
