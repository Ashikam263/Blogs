import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import EditorComponent from "../../../components/Editor";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // Assuming EditorComponent has a prop for initial content
  const initialContent = post.content;
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <EditorComponent initialContent={initialContent} />
    </div>
  );
};


export default PostPage;
