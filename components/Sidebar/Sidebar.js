import { useSession } from "next-auth/client";
import { SidebarRow } from "..";
import { sidebarRowData } from "../../data/sidebarData";

const Sidebar = () => {
    const [session, loading] = useSession();

    return (
        // <div className="flex flex-col justify-center p-2 mt-5 w-screen">
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name} />
            {sidebarRowData.map(icon => (
                <SidebarRow
                    key={icon.id}
                    Icon={icon.Icon}
                    title={icon.title}
                />
            ))}
        </div>
    );
};

export default Sidebar;
