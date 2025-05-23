package br.unijorge.avaliaamado.model;

import java.util.List;

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
    private long ID_Servico;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoServico tipo;

    @Enumerated(EnumType.STRING)
    @Column
    private TipoServicoSaude tipoSaude;

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
