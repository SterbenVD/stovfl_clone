import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../url";

export default function useGetPosts(pageNumber, section) {
  const [allPosts, setAllPosts] = useState([
    "4",
    "9",
    "16",
    "18",
    "38",
    "39",
    "42",
    "44",
    "49",
    "57",
    "73",
    "94",
  ]);
  // useEffect(() => {
  //   if (section == "Trending")
  //     setAllPosts([
  //       "4",
  //       "9",
  //       "16",
  //       "18",
  //       "38",
  //       "39",
  //       "42",
  //       "44",
  //       "49",
  //       "57",
  //       "73",
  //       "94",
  //     ]);
  //   else {
  //     axios.get(`${url.axios_url}/post/`);
  //   }
  // }, [section]);
  const [hasMore, setHasMore] = useState(false);
  const [posts, setPosts] = useState(["4", "9", "16", "18", "38"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    setPosts((prevPosts) => {
      let last = prevPosts.length - 1;
      let append;
      if (last + 5 <= allPosts.length - 1) {
        append = allPosts.slice(last + 1, last + 6);
      } else append = allPosts.slice(last + 1);
      return [...prevPosts, ...append];
    });
  }, [pageNumber]);
  return { loading, error, posts, hasMore };
}
