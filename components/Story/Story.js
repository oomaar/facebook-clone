import { StoryCard } from "..";

const stories = [
    {
        name: "Omar Hassan",
        src: "/story/Me.jpg",
        profile: "/story/Me2.JPG"
    },
    {
        name: "Elon Musk",
        src: "/story/Elon Musk.jpg",
        profile: "/story/Elon Musk2.jpg"
    },
    {
        name: "Mark Zuckerberg",
        src: "/story/Mark Zuckerberg.jpg",
        profile: "/story/Mark Zuckerberg2.jpg"
    },
    {
        name: "Bill Gates",
        src: "/story/Bill Gates.jpg",
        profile: "/story/Bill Gates2.jpg"
    }
];

const Story = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            story
            {stories.map(story => (
                <StoryCard
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    );
};

export default Story;
