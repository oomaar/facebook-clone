import { Contact } from "..";
import { contacts } from "../../data/contactData";
import { SearchIcon } from "@heroicons/react/outline";
import {
    DotsHorizontalIcon,
    VideoCameraIcon
} from "@heroicons/react/solid";

const Widgets = () => {
    return (
        <div className="hidden md:inline-flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact, i) => (
                <Contact
                    key={i}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    );
};

export default Widgets;
