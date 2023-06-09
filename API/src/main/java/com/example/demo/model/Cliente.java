/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

 
@Entity
@Table(name= "cliente")
public class Cliente {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codCliente")
    private Integer codCliente;
    
    
    @Column(name = "nome")
    private String nome;
    
    @Column(name = "email")
    private String email;
    
    
     @Column(name = "senha")
    private String senha;
     
    @Column(name = "cpf")
    private int cpf;
       
    @Column(name = "fone")
    private int  fone;

    public Cliente() {
    }

    public Cliente(Integer codCliente, String nome, String email, String senha, int cpf, int fone) {
        this.codCliente = codCliente;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.fone = fone;
    }


    public Integer getCodCliente() {
        return codCliente;
    }

    public void setCodCliente(Integer codCliente) {
        this.codCliente = codCliente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getCpf() {
        return cpf;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }

    public int getFone() {
        return fone;
    }

    public void setFone(int fone) {
        this.fone = fone;
    }

    @Override
    public String toString() {
        return "Cliente{" + "codCliente=" + codCliente + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", cpf=" + cpf + ", fone=" + fone + '}';
    }
    
    
    
    
}
