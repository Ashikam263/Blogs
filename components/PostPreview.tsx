import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-2 text-lg">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
