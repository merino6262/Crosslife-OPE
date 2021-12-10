import emailjs from "emailjs-com";
import React from 'react';
import "./Email.css" 

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('GmailMessage', 'template_0zs50ja', e.target, 'user_GDAuIiJmjfObIowALP3cO')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div>
            <div className="container">
            <h2 className ="h2">Contato</h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label className ="label">Assunto</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Assunto do email" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label className ="label">Email</label>
                            <input type="email" className="form-control" required placeholder="Email de destino" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label className ="label">Mensagem</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}