/// <reference types="react" />
declare type Props = {
    icon: "wind" | "feels" | "humidity" | "pop" | "visibility" | "pressure";
    title: string;
    info: string | JSX.Element;
    description: string;
};
declare const Tile: ({ icon, title, info, description }: Props) => JSX.Element;
export default Tile;
