package departamento;

import personal.Personal;


public class Departamento extends Personal{
    public Departamento(String nombre, String apellido, String domicilio, int edad, String depto){
        super(nombre,apellido,domicilio,edad);
    }

    public Departamento(String lucrecia, String casas, String calle_32, int i, String legales) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    public String mostrarDatos(){
        return "\n Nombre: " + nombre + "\n Apellido: "+ apellido +
                "\n Domicilio: "+ domicilio + "\n Edad: "+ edad +"\n Sueldo: " + getSueldo();
    }
}