import { cn } from "@/lib/utils";

export function SplitText({
  text,
  className,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
}) {
  const words = text.split(" ");
  return (
    <Tag className={cn("split-text", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word" style={{ animationDelay: `${i * 70}ms` }}>
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
