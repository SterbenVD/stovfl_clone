import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import url from "../../url";

function useGetPostDetails({ postID }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "home":
        return {
          title: action.payload.title,
          body: action.payload.body,
          score: action.payload.score,
          creation_date: action.payload.creation_date,
          owner_display_name: action.payload.owner_display_name,
          owner_user_id: action.payload.owner_user_id,
          tags: action.payload.tags,
          anscount: action.payload.anscount,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    title: "",
    body: "",
    score: "",
    creation_date: "",
    owner_display_name: "",
    owner_user_id: "",
    tags: "",
    anscount: "",
  });

  useEffect(() => {
    axios.get(`${url.axios_url}/post/${postID}`).then((res) => {
      console.log(res);
      dispatch({
        type: "home",
        payload: {
          title: res.data.title,
          body: res.data.body,
          score: res.data.score,
          creation_date: res.data.creation_date,
          owner_display_name: res.data.owner_display_name,
          owner_user_id: res.data.owner_user_id,
          tags: res.data.tags,
          anscount: 10,
        },
      });
    });
  }, []);
  return state;
}

export default useGetPostDetails;
