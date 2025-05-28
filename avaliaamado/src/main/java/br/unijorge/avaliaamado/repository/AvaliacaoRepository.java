package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository//Contrato de persistência de dados
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{

    List<Avaliacao> findByEvento_Id(long id);//Lista avaliacoes por ID do evento
    
    List<Avaliacao> findByUsuario_Id(long id);

    List<Avaliacao> findByServico_Id(long id);

    List<Avaliacao> findByNotaGreaterThanEqual(Double nota);//Lista avaliacoes por nota maior ou igual a um valor específico

    boolean existsByEvento_IdAndUsuario_Id(Long eventoId, Long usuarioId);//Valida se existe avaliação por ID do evento e ID do usuário

    boolean existsByServico_IdAndUsuario_Id(Long servicoId, Long usuarioId);

}
