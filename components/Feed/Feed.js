import { Story } from "..";

const Feed = () => {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className="mx-auto max-w-md md:max-w-lg">
                <Story />
            </div>
        </div>
    );
};

export default Feed;
