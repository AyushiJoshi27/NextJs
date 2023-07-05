import Link from "next/link";

export default function EventItem( itemData ) {
    const {title, url, date, id} = itemData;

  return (
    <li>
      <img src={url} alt={id} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{date}</time>
          </div>
        </div>
        <div>
            <Link href="/">Explored events</Link>
        </div>
      </div>
    </li>
  );
}
