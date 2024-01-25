"use client";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { useRouter } from "next/navigation";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { useState } from "react";
import EditorComponent from "./Editor";

const PostPreview = (props: PostMetadata) => {
  const router = useRouter();
  const [isEditMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
    router.push(`/posts/${props.slug}`);
  };

  const handleDelete = () => {
    console.log(`Deleting post with slug: ${props.slug}`);
  };

  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white hover:bg-gray-100 transition duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm text-slate-400">{new Date(props.date).toLocaleDateString()}</p>
          <Link href={`/posts/${props.slug}`}>
            <h2 className="text-violet-600 hover:underline text-lg">{props.title}</h2>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="px-2 py-1 rounded-md mr-2" onClick={handleEdit}>
            <BsPencilSquare />
          </button>
          <button className="px-2 py-1 rounded-md" onClick={handleDelete}>
            <BsTrash />
          </button>
        </div>
      </div>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;