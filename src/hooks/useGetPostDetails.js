import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import url from "../../url";

function useGetPostDetails({ postID, type }) {
  const [data, setData] = useState({
    title: "",
    body: "",
    score: "",
    creation_date: "",
    owner_display_name: "",
    owner_user_id: "",
    tags: "",
    anscount: "",
  });
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
      case "question":
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

      case "answer":
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
    // console.log(state);
  }, [state]);

  const datagen = () => {
    axios.get(`${url.axios_url}/post/${postID}`).then((res) => {
      // console.log(type);
      // console.log(res);
      if (type == "question" || type == "home") {
        axios
          .get(`${url.axios_url}/user/${res.data.owner_user_id}`)
          .then((res2) => {
            dispatch({
              type: type,
              payload: {
                title: res.data.title,
                body: res.data.body,
                score: res.data.score,
                creation_date: res.data.creation_date,
                owner_display_name: res2.data.display_name,
                owner_user_id: res.data.owner_user_id,
                tags: res.data.tags,
                anscount: 10,
              },
            });
          });
      } else if (type == "answer") {
        // console.log(res.data.parent_id === null);
        axios
          .get(`${url.axios_url}/post/${res.data.parent_id}`)
          .then((res2) => {
            console.log(res2);
            axios
              .get(`${url.axios_url}/user/${res2.owner_user_id}`)
              .then((res3) => {
                // console.log(res3);
                dispatch({
                  type: type,
                  payload: {
                    title: res2.data.title,
                    body: res.data.body,
                    score: res.data.score,
                    creation_date: res.data.creation_date,
                    owner_user_id: res3.data.owner_user_id,
                    owner_display_name: res3.data.display_name,
                    tags: res.data.tags,
                    anscount: 10,
                    parent_id: res.data.parent_id,
                  },
                });
              });
          });
      }
    });
  };

  useEffect(() => {
    datagen();
  }, []);
  return state;
}

export default useGetPostDetails;
