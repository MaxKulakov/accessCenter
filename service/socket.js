import React, { Fragment, useState, useEffect } from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import 'babel-polyfill';

import C from './constsants';
import E from './events';
import Message from './components/MessageComponent/MessageCommon';


const socket = io.connect(C.SOCKET_URL);

const message = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});

  useEffect(function() {
    socket.on(E.ADD_MESSAGE_FROM_SERVER, ({ message }) =>
      setMessages(messages => [...messages, message])
    );
  }, []);

  const chooseUserHandler = ({ id, name, nickname, avatar }) => {
    socket.emit(E.CHOOSE_USER_FROM_CLIENT, { id });
    setUser({ name, nickname, avatar });
  };

  const addMessageHandler = message => {
    const newMessage = {
      ...user,
      text: message
    };
    socket.emit(E.ADD_MESSAGE_FROM_CLIENT, { message: newMessage });
    setMessages(messages => [...messages, newMessage]);
  };

  return (
    <Message
      body={messages}
      time={time}
      name={user}
      key={id}
    />
  );
};
