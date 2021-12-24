
package config;

import java.sql.*;


public class Conexion {
    public Connection getConection(){
        Connection a = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            a = DriverManager.getConnection("jdbc:mysql://localhost:3306/codoacodo",
                    "mayra", "mayra");
        }catch(ClassNotFoundException | SQLException error){
            System.out.println(error.toString());
        }
        return a;
    }
   /*spublic static void main(String[] lelis) throws SQLException{
        Connection conexion = null;
        Conexion con = new Conexion();
        conexion = con.getConection();
        
        PreparedStatement ps;
        ResultSet rs;
        ps = conexion.prepareStatement("SELECT * FROM participantess");
        rs = ps.executeQuery();
        while(rs.next()){
          int id = rs.getInt("id");
          String nombre = rs.getString("nombre");
          String apellido = rs.getString("apellido");
          String email = rs.getString("email");
          int telefono = rs.getInt("telefono");
            System.out.println("id: " + id + "\n Nombre: " + nombre +
                    "\n Apellido: " + apellido + 
                    "\n Email: " + email + "\n Telefono: " + telefono);
        }
    }*/
}
