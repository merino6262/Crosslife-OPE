import React from 'react'
import { useNavigate } from 'react-router-dom';
import FormPartOne from '../../Components/FormPartOne/FormPartOne';
import FormPartTwo from '../../Components/FormPartTwo/FormPartTwo';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { NEWS_PUT } from '../../Services/API';

const FormEdit = ({data}) => {
  const {request} = useFetch();
  const [page, setPage] = React.useState(1);
  console.log(data.titulo)
  const title = useForm(undefined, true, data.titulo);
  const subtitle = useForm(undefined, false, data.subtitle?data.subtitle:"");
  const paragraph = useForm(undefined, true, data.corpo);
  const [imageUrl, setImageUrl] = React.useState(data["capa_url"]? {
    preview:data["capa_url"],
  }:{});
  const [category, setCategory] = React.useState(data.categoria);
  const navigate = useNavigate();
  const convertDate = () => {
    const date = new Date();
    const dataString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return dataString;
  }

  const handleSubmitNews = async () => {
    const date = convertDate()
    const body = {
      titulo: title.value,
      subtitulo: subtitle.value,
      corpo: paragraph.value,
      categoria: category,
      autor: "yudi yoshimine",
      data_criacao: date,
    }

    if(category.length !== 0){
      const {url, options} = NEWS_PUT(data.id, body);
      const {response} = await request(url, options);
      if(response.ok){
        alert('enviou');
        navigate("/noticias")
      }
    }
    else{
      alert("Selecione pelo menos uma categoria")
    }
  }
  
  switch (page){
    case 1:
      return <FormPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage} data={data}/>
    case 2:
      return <FormPartTwo setPage={setPage} imageField={{imageUrl, setImageUrl}} categoryField={{category, setCategory}} handleSubmitNews={handleSubmitNews}/>
    default:
      return null
  }
}

export default FormEdit
