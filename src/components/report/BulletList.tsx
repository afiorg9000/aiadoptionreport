import { motion } from "framer-motion";
import { bulletStyles, getRotatingColor, spacing } from "./styles";

interface BulletItem {
  title?: string;
  content: React.ReactNode;
}

interface BulletListProps {
  items: (string | BulletItem)[];
  color?: string; // Single color for all bullets (e.g., "llpa-orange")
  colorRotate?: boolean; // Use rotating colors
  startColor?: number; // Starting index for color rotation
  className?: string;
  animate?: boolean;
}

const BulletList = ({
  items,
  color,
  colorRotate = false,
  startColor = 0,
  className = "",
  animate = true,
}: BulletListProps) => {
  return (
    <ul className={`${spacing.listGap} ${className}`}>
      {items.map((item, index) => {
        const isObject = typeof item === "object" && item !== null && "content" in item;
        const title = isObject ? (item as BulletItem).title : undefined;
        const content: React.ReactNode = isObject ? (item as BulletItem).content : (item as string);

        // Determine bullet color
        const bulletColor = color
          ? `bg-${color}`
          : colorRotate
            ? `bg-${getRotatingColor(startColor + index)}`
            : "bg-llpa-orange";

        const listItem = (
          <li className={bulletStyles.container}>
            <span className={`${bulletStyles.dot} ${bulletColor}`} />
            <div className={bulletStyles.content}>
              {title && <h4 className={bulletStyles.title}>{title}</h4>}
              <span className={bulletStyles.text}>{content}</span>
            </div>
          </li>
        );

        if (animate) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {listItem}
            </motion.div>
          );
        }

        return <div key={index}>{listItem}</div>;
      })}
    </ul>
  );
};

export default BulletList;
