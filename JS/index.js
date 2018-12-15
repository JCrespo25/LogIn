function validar()
{
    var getUsuario = document.getElementById("ussername").value;
    var getUontraseña = document.getElementById("password").value;

    console.log(getUsuario);
    console.log(getUontraseña);

    var usuarioC = "Crespo";
    var usuarioA = "Austin";

    var contraseñaC = "123456789";
    var contraseñaA = "987654321";

    
    if(getUsuario == usuarioC || getUsuario == usuarioA)
    {
        if(getUsuario == usuarioC)
        {
            if(getUontraseña != contraseñaC)
            {
                alert("El usuario " + usuarioC + " existe pero la contraseña es incorrecta");
            }
            else if(getUontraseña == contraseñaC)
            {
                alert("Ha iniciado sesion " + usuarioC);
            }
        }
        else if(getUsuario == usuarioA)
        {
            if(getUontraseña != contraseñaA)
            {
                alert("El usuario " + usuarioA + " existe pero la contraseña es incorrecta");
            }
            else if(getUontraseña == contraseñaA)
            {
                alert("Ha iniciado sesion " + usuarioA);
            }
        }
    }
    else
    {
        alert("El usuario no existe");
    }
}