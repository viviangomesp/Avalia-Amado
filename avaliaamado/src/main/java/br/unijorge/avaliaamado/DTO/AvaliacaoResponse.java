package br.unijorge.avaliaamado.DTO;

import lombok.Data;
import br.unijorge.avaliaamado.model.Avaliacao;

@Data
public class AvaliacaoResponse {
    private Long id;
    private String descricao;
    private Double nota;
    private boolean isAnonimo;
    private String nomeUsuario;

    public AvaliacaoResponse(Avaliacao avaliacao) {
        this.id = avaliacao.getId();
        this.descricao = avaliacao.getDescricao();
        this.nota = avaliacao.getNota();
        this.isAnonimo = avaliacao.isAnonimo();
        
        if (avaliacao.isAnonimo()) {
            this.nomeUsuario = "Anônimo";
        } else {
            this.nomeUsuario = avaliacao.getUsuario().getNome();
        }
    }
}




