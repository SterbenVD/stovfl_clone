import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../url";

export default function useGetPosts(pageNumber, section, setPageNumber) {
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
  const [posts, setPosts] = useState(allPosts.slice(0, 5));

  useEffect(() => {
    console.log(section);
    if (section == "Trending Posts") {
      setAllPosts([
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
      setPosts(allPosts.slice(0, 5));
      setPageNumber(1);
    } else {
      axios
        .get(
          `${
            url.axios_url
          }/post/tag/creation_date/desc?tags=${encodeURIComponent(section)}`
        )
        .then((res) => {
          // console.log(encodeURIComponent(section));
          // console.log(res.data);
          setAllPosts(res.data.map((a) => a.id));
          // setPosts(allPosts.slice(0, 5));
          console.log(posts);
          console.log(allPosts);
          setPageNumber(1);
        });
    }
    console.log(posts);
  }, [section]);

  useEffect(() => {
    setPosts(allPosts.slice(0, 5));
  }, [allPosts]);
  const [hasMore, setHasMore] = useState(false);
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
      setLoading(false);
      return [...prevPosts, ...append];
    });
  }, [pageNumber]);
  return { loading, error, posts, hasMore };
}
