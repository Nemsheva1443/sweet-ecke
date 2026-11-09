
export function ListItem({ content, link }) {
  return (
    <li>
      <a href={link}>{content}</a>
    </li>
  );
}