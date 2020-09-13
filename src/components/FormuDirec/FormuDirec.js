import React,{useState} from 'react'


const FormuDirec = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        celular: ''
    })

    const handleInputChange = (event) => {
     
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(  datos.nombre + ' ' + datos.direccion + ' ' + datos.celular)
    }

 return(
     <>
     <h2 className="text-center">Complete formulario de envío</h2>
      
     <form className="d-flex flex-column align-items-center" onSubmit={enviarDatos}>
         
                    <div className="col-md-6 mb-3">
                    <input type="text"
                     placeholder="
                      Ingrese nombre"
                       className="form-control"
                        onChange={handleInputChange} 
                        name="nombre"
                        name="direccion"
                        minlength="3"
                        maxLength="40"
                        required
                       >

                        </input>
                    </div>
                    <div className="col-md-6 mb-3">
                    <input type="text"
                     placeholder="Ingrese Direc. donde sea recibir el pedido"
                     className="form-control"
                      onChange={handleInputChange}
                       name="direccion"
                       minlength="5"
                       maxLength="50"
                       required>

                       </input>
                       </div>
                    <div className="col-md-6 mb-3">
                    <input type="text"
                     placeholder="Ingrese celular sin 0 ni 15" 
                     className="form-control"
                      onChange={handleInputChange}
                       name="celular"
                       name="direccion"
                       minlength="10"
                       maxLength="11"
                       required>

                       </input>
                    </div>
                    <div className="col-md-6">
                <button type="submit" className="btn btn-primary form-control">Enviar</button>
                </div>
            </form>
           
            
     </>
 )
 
}

export default FormuDirec;