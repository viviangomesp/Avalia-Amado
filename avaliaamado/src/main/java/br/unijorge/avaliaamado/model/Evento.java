package br.unijorge.avaliaamado.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //Classe que representa a tabela Evento no banco de dados
@Data //Classe que gera os métodos getters e setters automaticamente
@NoArgsConstructor //Classe que gera o construtor padrão automaticamente
@AllArgsConstructor //Classe que gera o construtor com todos os parâmetros automaticamente
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Geração automática do ID
    private long ID_Evento;

    @Column(nullable = false) //Campo não pode ser nulo
    private String nome;

    @Column //Pode existir eventos que não aconteceram ou não tem avaliação
    private int nota; //Média das avaliações do evento

    @Column(nullable = false)
    private String local;

    @Column(nullable = false)
    private String data;

    @Column(nullable = false)
    private String hora;

    @Column(nullable = false)
    private String descricao;

    @OneToMany //Um evento pode ter várias avaliações
    private List<Avaliacao> avaliacoes;
    
}
