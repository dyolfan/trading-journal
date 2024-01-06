import React from 'react';
import GreenTickIcon from '../../../../assets/image/icons/green_tick.svg';
import RedCrossIcon from '../../../../assets/image/icons/red-x.svg';
import WarningIcon from '../../../../assets/image/icons/warning-sign.svg';
import s from './Message.module.css';

export enum MessageType {
  SUCCESS,
  ERROR,
  WARNING,
}

type SimpleMessageProps = {
  type: MessageType;
  text: string;
};

const resolveMessageType = (type: MessageType) => {
  let messageIcon = GreenTickIcon;
  if (type === MessageType.ERROR) {
    messageIcon = RedCrossIcon;
  } else if (type === MessageType.WARNING) {
    messageIcon = WarningIcon;
  }
  return messageIcon;
};

const SimpleMessage: React.FC<SimpleMessageProps> = ({ type, text }) => {
  const messageIcon = resolveMessageType(type);

  return (
    <div className="flex w-fit mt-4">
      <img src={messageIcon} alt="green tick" className={s.message_icon} />
      <div className="pl-4 font-bold">{text}</div>
    </div>
  );
};

export default SimpleMessage;
