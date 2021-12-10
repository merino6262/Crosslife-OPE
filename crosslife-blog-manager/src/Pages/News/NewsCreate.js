import React from 'react'
import useForm from '../../Hooks/useForm';
import FormPartOne from '../../Components/FormPartOne/FormPartOne'
import FormPartTwo from '../../Components/FormPartTwo/FormPartTwo';
import { NEWS_POST } from '../../Services/API';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';


const NewsCreate = () => {
  const [page, setPage] = React.useState(1);
  const title = useForm();
  const subtitle = useForm(undefined, false);
  const paragraph = useForm();
  const [imageUrl, setImageUrl] = React.useState({});
  const [category, setCategory] = React.useState("");
  const {request} = useFetch();
  const navigate = useNavigate();

  const convertDate = () => {
    const date = new Date();
    const dataString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return dataString;
  }

  const handleSubmitNews = async () => {
    const data = convertDate()
    const body = {
      titulo: title.value,
      subtitulo: subtitle.value,
      corpo: paragraph.value,
      categoria: category,
      autor: "yudi yoshimine",
      imagem: imageUrl.image ? imageUrl.image : null,
      data_criacao: data,
    }

    if(category.length !== 0){
      const {url, options} = NEWS_POST(body);
      const {response} = await request(url, options);
      if(response.ok){
        alert('enviou');
        navigate("/noticias");
      }
    }
    else{
      alert("Selecione pelo menos uma categoria");
    }
  }

  switch (page){
    case 1:
      return <FormPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
    case 2:
      return <FormPartTwo setPage={setPage} imageField={{imageUrl, setImageUrl}} categoryField={{category, setCategory}} handleSubmitNews={handleSubmitNews}/>
    default:
      return null
  }
}

export default NewsCreate
