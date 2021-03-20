import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useSocketContext } from './SocketContext';
const API_URL = 'http://localhost:3500';
const FeedBackContext = React.createContext();
export const useFeedBackContext = () => useContext(FeedBackContext);
export function FeedBackProvider(props) {
  const [state, setState] = useState({ feedbacks: [], isPosted: false });
  const socket = useSocketContext();
  const getFeedBacks = async () => {
    const res = await axios.get(`${API_URL}/getlist`);
    setState((prevState) => ({ ...prevState, feedbacks: res.data }));
    return res.data;
  };

  const postFeedBack = async (payload) => {
    const res = await axios.post(`${API_URL}/save`, payload);
    setState((prevState) => ({ ...prevState, isPosted: true }));
  };

  const resetIsPosted = () => {
    setState((prevState) => ({ ...prevState, isPosted: false }));
  };
  useEffect(() => {
    getFeedBacks();
  }, []);

  useEffect(() => {
    if (socket == null) return;
    console.log('socket', socket);
    socket.on('receive-postedFeedback', ({ message }) => {
      console.log('postedFeedback', message);
      // setState((prevState) => ({
      //   ...prevState,
      //   problems: [...prevState.feedbacks, postedFeedback],
      // }));
    });
  }, [socket]);

  const value = {
    ...state,
    postFeedBack,
    resetIsPosted,
  };
  return (
    <FeedBackContext.Provider value={value}>
      {props.children}
    </FeedBackContext.Provider>
  );
}
