import {useState, useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatsListInit } from '../../store/selectors/chatsSelectors'
import { addChat, deleteChat, subscribeOnChats } from '../../store/actions/chatsActions'
import { onDeleteChatMessages } from '../../store/actions/messagesActions'
import ChatList from '../ChatList/ChatList'
import ChatListAddForm from '../ChatListAddForm/ChatListAddForm'

function ChatListContainer () {

  useEffect(() => {
    dispatch(subscribeOnChats())
  }, [])

  const dispatch = useDispatch()

  const chatsList = useSelector(chatsListInit)

  const onDelete = useCallback(
    (id) => {
      dispatch(deleteChat(id))
      dispatch(onDeleteChatMessages(id)) // Или лучше вызывать onDeleteChatMessage в onDeleteAction ?
    },
    [dispatch],
  )
  
  const onAddChat = useCallback(
    (newName) => {
      dispatch(addChat(newName))
    },
    [dispatch],
  )

  const [chatName, setChatName] = useState('')

  function setName (name) {
    return setChatName(name)
  }

  return (
    <>
      <ChatList 
        chatsList={chatsList}
        onDelete={onDelete}
      />
      <ChatListAddForm
        onAddChat={onAddChat}
        setName={setName}
        chatName={chatName}
      />
    </>
  )
}

export default ChatListContainer