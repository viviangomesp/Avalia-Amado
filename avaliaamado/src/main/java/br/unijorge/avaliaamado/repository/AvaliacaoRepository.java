package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{

    List<Avaliacao> findByEventoId(long id);//Listando por ID do evento
    
    List<Avaliacao> findByUsuarioId(long id);//Listando por ID do usuário

    List<Avaliacao> findByServicoId(long id);//Listando por ID do serviço

    List<Avaliacao> findByNotaGreaterThanEqual(int nota);//Listando por nota maior ou igual a x

    boolean existsByEventoIdAndUsuarioId(Long eventoId, Long usuarioId);

    boolean existsByServicoIdAndUsuarioId(Long servicoId, Long usuarioId);

}
