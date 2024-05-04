const App = () =>(
    <div className="centrado">
        <h1 className="titulo">
            Agenda
        </h1>
        <Agenda/>
    </div>
);

const db = [
    {
        id:0 , nombre:"Lionel", apellido:"Messi", telefono:"3815072103"
    },
   
    {
        id:1 , nombre:"Lautaro", apellido:"god", telefono:"3815446787"
    },

    {
        id:1 , nombre:"Lucas", apellido:"Lazarte", telefono:"3815201307"
    },

    {
        id:1 , nombre:"Sofia", apellido:"Abregú", telefono:"3815575783"
    },

    {
        id:1 , nombre:"Pia", apellido:"Juarez", telefono:"3816612976"
    },

    {
        id:1 , nombre:"Ana Paula", apellido:"Flores", telefono:"3815836868"
    },
]
const Contacto = ({nombre,apellido,telefono}) =>(
    <div className="tarjetaContacto">
        <p>
            {nombre} {apellido}
        </p>
        <p>
            Celular: {telefono}
        </p>
    </div>
);

const Agenda =()=>(
    <div>
        <div className="container">
            {db.map(contacto=>(
               <Contacto
                    key={contacto.id}
                    nombre={contacto.nombre}
                    apellido={contacto.apellido}
                    telefono={contacto.telefono}
               />
            ))}
        </div>
    </div>

);


ReactDOM.render(<App />, document.getElementById('root'));