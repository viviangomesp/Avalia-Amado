package br.unijorge.avaliaamado.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Geração automática do ID
    private long ID_Avaliacao;

    @Column
    private String descricao;

    @Column(nullable = false)
    private int nota;

    @Column(nullable = false)
    private boolean isAnonimo;

    @ManyToOne //Um usuário pode ter várias avaliações
    @JoinColumn(name = "ID_User") //Chave estrangeira para a tabela Usuario
    private Usuario usuario;

    @ManyToOne //Um evento pode ter várias avaliações
    @JoinColumn(name = "ID_Evento") //Chave estrangeira para a tabela Evento
    private Evento evento;

}
