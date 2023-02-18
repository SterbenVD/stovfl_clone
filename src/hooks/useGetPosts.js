import React, { useState, useEffect } from "react";

export default function useGetPosts(pageNumber) {
  const allPosts = [
    { title: "Title1" },
    { title: "Title2" },
    { title: "Title3" },
    { title: "Title4" },
    { title: "Title5" },
    { title: "Title6" },
    { title: "Title7" },
    { title: "Title8" },
    { title: "Title9" },
    { title: "Title10" },
    { title: "Title11" },
    { title: "Title12" },
    { title: "Title13" },
    { title: "Title14" },
    { title: "Title15" },
    { title: "Title16" },
    { title: "Title17" },
    { title: "Title18" },
    { title: "Title19" },
    { title: "Title20" },
    { title: "Title21" },
    { title: "Title22" },
    { title: "Title23" },
    { title: "Title24" },
    { title: "Title25" },
    { title: "Title26" },
    { title: "Title27" },
    { title: "Title28" },
    { title: "Title29" },
    { title: "Title30" },
    { title: "Title31" },
    { title: "Title32" },
    { title: "Title33" },
    { title: "Title34" },
    { title: "Title35" },
    { title: "Title36" },
    { title: "Title37" },
    { title: "Title38" },
    { title: "Title39" },
    { title: "Title40" },
    { title: "Title41" },
    { title: "Title42" },
    { title: "Title43" },
    { title: "Title44" },
    { title: "Title45" },
    { title: "Title46" },
    { title: "Title47" },
    { title: "Title48" },
    { title: "Title49" },
    { title: "Title50" },
    { title: "Title51" },
    { title: "Title52" },
    { title: "Title53" },
    { title: "Title54" },
    { title: "Title55" },
    { title: "Title56" },
    { title: "Title57" },
    { title: "Title58" },
    { title: "Title59" },
    { title: "Title60" },
    { title: "Title61" },
    { title: "Title62" },
    { title: "Title63" },
    { title: "Title64" },
    { title: "Title65" },
    { title: "Title66" },
  ];
  const [hasMore, setHasMore] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Title1" },
    { title: "Title2" },
    { title: "Title3" },
    { title: "Title4" },
    { title: "Title5" },
  ]);
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
