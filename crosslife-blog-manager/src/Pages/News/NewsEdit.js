import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../Hooks/useFetch';
import { NEWS_GET_ID } from '../../Services/API';
import FormEdit from '../../Components/formEdit/formEdit';

const NewsEdit = () => {
  const { id } = useParams();
  const {data, request} = useFetch();
  React.useEffect(()=>{
    const fetchNews = async () => {
      const {url, options} = NEWS_GET_ID(id);
      await request(url, options);
    }
    fetchNews();
  }, [request, id]);

  if(data){
    return <FormEdit data={data}/>;
  }
  else{
    return null;
  }
}

export default NewsEdit
