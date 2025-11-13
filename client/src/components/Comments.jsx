import Comment from "./Comment";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
};

const Comments = ({ postId }) => {
  const { user } = useUser();

  // Get the token from the auth provider
  const { getToken } = useAuth();

  // Fetch the comments
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  // Create a query client
  const queryClient = useQueryClient();

  // Create a mutation to add a comment
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      // Get the token from the auth provider
      const token = await getToken();
      // Add the comment to the database
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      // Show a success message
      toast.success("Comment has been created");
      // Invalidate the queries
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      // Show an error message
      toast.error(error.response.data);
    },
  });

  // Handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      {/* Title */}
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      {/* Form to add a comment */}
      <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>
      {isPending ? "loading..." : error ? "Something went wrong.." + error.message : !data ? "Comments not found" :

        <>
          {/* Show the loading comment */}
          {mutation.isPending && (<Comment comment={{ desc: `${mutation.variables.desc} (Sending...)`, createdAt: new Date(), user: { username: user.username, img: user.imageUrl } }} />)}
          {/* Show the comments */}
          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      }
    </div>
  );
};

export default Comments;
