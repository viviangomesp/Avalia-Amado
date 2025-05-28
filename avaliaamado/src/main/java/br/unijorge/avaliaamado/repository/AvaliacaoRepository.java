package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{

    List<Avaliacao> findByEvento_Id(long id);//Listando por ID do evento
    
    List<Avaliacao> findByUsuario_Id(long id);//Listando por ID do usuário

    List<Avaliacao> findByServico_Id(long id);//Listando por ID do serviço

    List<Avaliacao> findByNotaGreaterThanEqual(Double nota);//Listando por nota maior ou igual a x

    boolean existsByEvento_IdAndUsuario_Id(Long eventoId, Long usuarioId);

    boolean existsByServico_IdAndUsuario_Id(Long servicoId, Long usuarioId);

}
