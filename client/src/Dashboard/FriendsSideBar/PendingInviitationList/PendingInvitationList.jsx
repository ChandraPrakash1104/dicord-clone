import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationListItem from './PendingInvitationListItem';

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      mail: 'dummy@ad.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: 'John',
      mail: 'John@ad.com',
    },
  },
];

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitationList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitaion) => (
        <PendingInvitationListItem
          key={invitaion._id}
          id={invitaion._id}
          username={invitaion.senderId.username}
          mail={invitaion.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationList;