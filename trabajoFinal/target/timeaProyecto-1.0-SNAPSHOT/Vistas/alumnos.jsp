<%-- 
    Document   : clientes
    Created on : 13 dic. 2021, 22:07:39
    Author     : delan
--%>

<%@page import="modelo.AlumnosDAO"%>
<%@page import="java.util.List"%>
<%@page import="modelo.Alumnos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Lista de Alumnos</title>
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Over+the+Rainbow&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <h1 class="text-center" style="font-family: 'Italiana', serif; " >Lista de Alumnos</h1>
        <div class="container">
            <div class="row">
                <a class="btn btn-secondary w-100 m-3" 
                   href="AlumnosController?accion=nuevo">Agregar Alumno</a>
                <table class="table table-secondary">
                    <thead>
                        <th>Id</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </thead>
                    <tbody>
                        <%
                            List<Alumnos> resultado=null;
                            AlumnosDAO alumno =new AlumnosDAO();
                            resultado = alumno.listarAlumnos();
                            
                            for(int a = 0; a < resultado.size(); a++){
                                String ruta ="AlumnosController?accion=modificar&id=" + resultado.get(a).getId();
                                String rutaE ="AlumnosController?accion=eliminar&id=" + resultado.get(a).getId();
                                %>
                                <tr>
                                    <td><%= resultado.get(a).getId()%></td>
                                    <td><%= resultado.get(a).getNombres()%></td>
                                    <td><%= resultado.get(a).getApellidos()%></td>
                                    <td><%= resultado.get(a).getEmail()%></td>
                                    <td><%= resultado.get(a).getTelefono()%></td>
                                    <td><a class="text-success" href=<%= ruta%>>X</a></td>
                                    <td><a class="text-danger" href=<%= rutaE%>>X</a></td>
                                </tr>
                                <%
                            }
                        %>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>