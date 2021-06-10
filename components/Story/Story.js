import { StoryCard } from "..";
import { stories } from "../../data/storiesData";


const Story = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story, i) => (
                <StoryCard
                    key={i}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    );
};

export default Story;
