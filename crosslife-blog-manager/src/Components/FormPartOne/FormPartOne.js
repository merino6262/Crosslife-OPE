import React from 'react'
import HeaderNews from '../HeaderNews/HeaderNews'
import Input from '../Input/Input'

const FormPartOne = ({title, subtitle, paragraph, setPage, data}) => {
  const buttonSecondaryConfig = {
    content: "Próximo",
    onClick: () =>{
      if(title.validate() && paragraph.validate()){
        setPage(2);
      }
    }
  }

  return (
    <>
      <HeaderNews title="Criando notícia" buttonSecondary={buttonSecondaryConfig}/>
      <form>
        <Input label="Título" id="title" type="text"  {...title}/>
        <Input label="Subtítulo" id="subtitle" type="text" {...subtitle}/>
        <Input label="Corpo da notícia" id="paragraph" isBox={true} {...paragraph}/>
      </form>
      
    </>
  )
}

export default FormPartOne
