/*
Copyright 2019-2022 (c) Dappros Ltd, registered in England & Wales, registration number 11455432. All rights reserved.
You may not use this file except in compliance with the License.
You may obtain a copy of the License at https://github.com/dappros/ethora/blob/main/LICENSE.
Note: linked open-source libraries and components may be subject to their own licenses.
*/

import React, {useEffect, useMemo, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useStores} from '../../stores/context';
import {RoomList} from './RoomList';
import {commonColors, defaultChats, textStyles} from '../../../docs/config';
import {Badge, Text} from 'native-base';

const ROOM_KEYS = {
  official: 'official',
  private: 'private',
  groups: 'groups',
};

export const RoomsTabBar = observer(() => {
  const [routeIndex, setRouteIndex] = useState(0);
  const routes = [
    {key: ROOM_KEYS.official, title: 'Official'},
    {key: ROOM_KEYS.private, title: 'Private'},
    {key: ROOM_KEYS.groups, title: 'Groups'},
  ];

  const {chatStore} = useStores();
  // const roomsList = chatStore.roomList;

  const filterRooms = () => {
    if (chatStore.activeChats === ROOM_KEYS.private) {
      const rooms = chatStore.roomList?.filter((item: any) => {
        const splitedJid = item?.jid?.split('@')[0];

        if (item.participants < 3 && !defaultChats[splitedJid]) {
          return item;
        }
      });

      return rooms;
    }

    if (chatStore.activeChats === ROOM_KEYS.official) {
      const rooms = chatStore.roomList.filter(item => {
        const splitedJid = item?.jid?.split('@')[0];

        if (
          defaultChats[splitedJid] ||
          chatStore.roomsInfoMap[item.jid]?.isFavourite
        ) {
          return item;
        }
      });

      return rooms;
    }

    if (chatStore.activeChats === ROOM_KEYS.groups) {
      const rooms = chatStore.roomList.filter((item: any) => {
        const splitedJid = item?.jid?.split('@')[0];

        if (item.participants > 2 && !defaultChats[splitedJid]) {
          return item;
        }
      });
      return rooms;
    }
  };
  useEffect(() => {
    if (chatStore.roomList) {
      chatStore.updateCounter();
    }
  }, [chatStore.roomList]);
  const roomList = useMemo(
    () => filterRooms(),
    [chatStore.roomList, chatStore.activeChats],
  );

  return <RoomList roomsList={roomList} />;
});
