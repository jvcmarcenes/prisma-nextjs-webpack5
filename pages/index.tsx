import { Comment } from ".prisma/client";
import { GetServerSideProps } from "next";

interface Props {
  comments: Comment[]
}

export default function Home({ comments }: Props) {
  return <>
    <h1> Comments </h1>
    {comments.map(comment => <div key={comment.id}> 
      <h3> {comment.author} </h3>
      <p> {comment.content} </p>
      <hr />
    </div>)}
  </>
}

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/comments')
  const { comments } = await res.json()

  return {
    props: { 
      comments
    }
  }
}