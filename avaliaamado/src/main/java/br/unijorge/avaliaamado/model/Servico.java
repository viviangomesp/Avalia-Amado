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

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID_Servico;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String local;

    @Column(nullable = false)
    private String data;

    @Column(nullable = false)
    private String hora;

    @OneToMany
    private List<Avaliacao> avaliacoes;

}
