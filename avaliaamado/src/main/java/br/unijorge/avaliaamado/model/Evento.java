package br.unijorge.avaliaamado.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String nome;

    private Double nota;

    @Column(nullable = false)
    private String local;

    @Column(nullable = false)
    private LocalDate dataInicial;

    private LocalDate dataFinal;

    @Column(nullable = false)
    private LocalTime horaInicial;

    private LocalTime horaFinal;

    @Column(nullable = false)
    private String descricao;

    @OneToMany(mappedBy = "evento")
    @JsonBackReference
    private List<Avaliacao> avaliacoes;
    
}
