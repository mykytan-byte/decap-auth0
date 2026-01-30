import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-4">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/blog/${id}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{title}</h2>
              <small className="text-gray-500">
                {new Date(date).toLocaleDateString()}
              </small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
