import { getAllPostIds, getPostData } from '../../../lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <article className="prose lg:prose-xl">
                <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
                <div className="text-gray-500 mb-8">{new Date(postData.date).toLocaleDateString()}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
            </article>
            <div className="mt-8">
                <Link href="/" className="text-blue-500 hover:underline">
                    ← Back to home
                </Link>
            </div>
        </div>
    );
}
