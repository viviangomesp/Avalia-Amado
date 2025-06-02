package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.model.Servico;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
   
    List<Servico> findByLocal(String local);
    
    List<Servico> findByTipo(TipoServico tipo); 

    //Método para calcular a média das avaliações de um serviço específico
    @Query("SELECT AVG(a.nota) FROM Avaliacao a WHERE a.servico.id = :servicoId")
    Double calcularMediaAvaliacoesPorServico(@Param ("servicoId")Long servicoId);

    @Query("SELECT e FROM Servico e JOIN e.avaliacoes a GROUP BY e.id ORDER BY AVG(a.nota) DESC")
    List<Servico> findAllByOrderByMediaAvaliacoesDesc();
}
