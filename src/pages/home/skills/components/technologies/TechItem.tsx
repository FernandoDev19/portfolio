type Props = {
    imageUrl: string;
    width: number;
    title: string;
    alt: string;
    techIndicator: "active" | "learning" | "past" | "discontinued";
};

export default function TechItem({imageUrl, width, title, alt, techIndicator}: Props) {
  return (
    <li>
      <img
        loading="lazy"
        src={imageUrl}
        width={width}
        title={title}
        alt={alt}
      />
      <div className={`tech-indicator ${techIndicator}`}></div>
    </li>
  );
}
