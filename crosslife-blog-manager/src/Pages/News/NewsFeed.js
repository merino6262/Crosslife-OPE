import React from 'react';
import { useNavigate } from 'react-router';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';
import ModalDelete from '../../Components/ModalDelete/ModalDelete';

const NewsFeed = () => {
  const [modalDelete, setModalDelete] = React.useState(false);
  const navigate = useNavigate();
  const buttonSecondaryConfig = {
    content: "Criar Notícia",
    onClick: () => {navigate("criar")}
  }

  return (
    <>
      <HeaderNews title="Suas Notícias" buttonSecondary={buttonSecondaryConfig}/>
      <Feed setModalDelete={setModalDelete}/>
      {
        modalDelete && <ModalDelete setModalDelete={setModalDelete} modalDelete={modalDelete}/>
      }
    </>
  )
}

export default NewsFeed;
