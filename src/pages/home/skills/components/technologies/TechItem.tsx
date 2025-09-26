type Props = {
    imageUrl: string;
    width: number;
    title: string;
    alt: string;
    techIndicator: "active" | "learning" | "past" | "discontinued";
};

export default function TechItem({imageUrl, width, title, alt, techIndicator}: Props) {
  return (
    <li className="tech-item flex flex-col items-center justify-center">
      <div className="relative">
        <img
          loading="lazy"
          src={imageUrl}
          width={width}
          height={width}
          title={title}
          alt={alt}
          style={{ filter: 'drop-shadow(0 20px 4px rgba(0,0,0,0.2))' }}
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
          techIndicator === 'active' ? 'bg-green-500' :
          techIndicator === 'learning' ? 'bg-yellow-500' :
          techIndicator === 'past' ? 'bg-blue-500' : 'bg-red-500'
        }`}></div>
      </div>
      <span className="text-xs mt-2 text-center text-neutral-600 dark:!text-neutral-100">{title.split(' - ')[0]}</span>
    </li>
  );
}
