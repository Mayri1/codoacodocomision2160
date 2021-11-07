
package ejercicio1java;

import java.util.Scanner;


public class ejercicio1java {
    public static void main(String[] args) {
       Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su edad");
        int edad =entrada.nextInt();
        System.out.println("Ingrese su hobbie");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de codigo preferido");
        String editorCodigo = entrada.nextLine();
        System.out.println("Ingrese sel sistema operativo que utiliza");
        String sistemaOp = entrada.nextLine();
        
        System.out.println("Hola "+ nombre+ "!");
        System.out.println("Tu edad es: "+edad);
        System.out.println("Tu editor de codigo de preferencia es: "+editorCodigo);
        System.out.println("Y el sistema operativo que utilizas es: "+ sistemaOp);
        
        
       
        
    }
    
}
