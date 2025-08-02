type Props = {
    skill: string;
}

export default function CompSkillItem({skill}: Props) {
  return (
     <li
        className="p-4 rounded-full bg-neutral-100 flex items-center gap-2"
      >
        {skill}
      </li>
  )
}