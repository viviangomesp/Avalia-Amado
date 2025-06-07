package br.unijorge.avaliaamado.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.enums.TipoServicoSaude;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
    private long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoServico tipo;

    @Enumerated(EnumType.STRING)
    private TipoServicoSaude tipoSaude;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String local;

    private Double nota;

    private LocalDate dataInicial;

    private LocalDate dataFinal;

    private LocalTime horaInicial;

    private LocalTime horaFinal;

    @OneToMany(mappedBy = "servico")// Um serviço pode ter várias avaliações
    @JsonBackReference
    private List<Avaliacao> avaliacoes;
    
}
